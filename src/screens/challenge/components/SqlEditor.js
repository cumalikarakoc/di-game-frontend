import React from 'react'

const SqlEditor = ({className}) => {

    return (
        <div className={className}>
            <div className="rounded overflow-hidden border-2">
            </div>
            < button
                className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                Button
            </button>
        </div>
    )
};

export default SqlEditor