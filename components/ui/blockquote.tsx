import React from 'react';
import { VscQuote } from "react-icons/vsc";
import Card from './card';

type Props = {
    quote: string;
    source?: string;
    className?: string;
};

const Blockquote = ({ quote, source, className }: Props) => (
    <blockquote className={className}>
        <Card>
            <div className="h-12 w-12 p-4 rounded-full bg-gray-400 mr-4">
                <VscQuote className="text-white" />
            </div>
            <div className="flex-grow">
                <p>{quote}</p>
                {
                    source ?
                        <p className="text-right">{`- ${source}`}</p> : ""
                }
            </div>
        </Card>
    </blockquote>
);

export default Blockquote;