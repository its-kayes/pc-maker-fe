import { ILink } from "@/config/type";
import Link from "next/link";

interface Props {
    title: string;
    links: ILink[];
}

const LinkGrid = ({ title, links }: Props) => {
    return (
        <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start cursor-default">
                {title}
            </h6>

            {links.map((item: ILink) => <p className="mb-4" key={item._id}>
                <Link href={item.url} className="text-primary-900 hover:text-primary-700 font-medium">
                    {item.title}
                </Link>
            </p>)}

        </div>
    )
}

export default LinkGrid