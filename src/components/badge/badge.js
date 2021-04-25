import React from 'react';

const Badge = ({value}) => {
    return (
        <span className={`${value > 0 ? 'inline-flex' : 'hidden'} items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full`}>
            {value}
        </span>
    )
}

export default Badge