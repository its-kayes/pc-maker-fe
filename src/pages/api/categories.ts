import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';

type Data = {
    name: string
}

type ErrorResponse = {
    error: string;
    errorMessage?: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | ErrorResponse>
) {

    if (req.method === "GET") {

        // Get the absolute path to the categories.json file
        const filePath = path.join(process.cwd(), 'src', 'config', 'json', 'categories.json');


        // Read the file asynchronously
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading data from file:', err);
                res.status(500).json({ error: 'Error reading data', errorMessage: err.message });
            } else {
                try {
                    // Parse the JSON data
                    const jsonData: Data = JSON.parse(data);
                    res.status(200).json(jsonData);
                } catch (parseError) {
                    res.status(500).json({ error: 'Error parsing data' });
                }
            }
        });
    }

}