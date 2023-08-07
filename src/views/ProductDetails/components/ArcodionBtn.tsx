import React from 'react'

type Props = {
    title: string;
    show: boolean;
    setShow: (show: boolean) => void;
}

const ArcodionBtn = ({ setShow, show, title }: Props) => {
    return (
        <div>
            <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                <p className="text-base leading-4 text-gray-800">{title}</p>
                <button
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                    aria-label="show or hide"
                >
                    <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ArcodionBtn