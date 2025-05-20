import React from 'react';
import './button.css'

export default function Button({className='', onClick, children, type='button'}){
    const defaultStyles='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400';

    return(
        <button type={type}
        className={`${defaultStyles} ${className}`}
        onClick={onClick}
        >
            {children}
        </button>
    );
};

