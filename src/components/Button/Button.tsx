import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

type Props = {
    text: string | React.ReactNode;
    classes?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, classes, ...props }: Props) => {
    return (
        <button
            className={classNames(
                "lg:text-sm text-lg font-bold bg-primary-700 p-2.5 hover:bg-primary rounded-md trans cursor-pointer text-white text-center shadow-xl shadow-bg-primary-700 disabled:bg-primary-200 disabled:cursor-not-allowed",
                classes,
            )}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;