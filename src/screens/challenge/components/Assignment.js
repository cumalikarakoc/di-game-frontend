import React from 'react'

const Assignment = (props) => {

    return (
        <div className="max-w-sm rounded overflow-hidden border-2">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-4">Assignment</div>
                <hr className="h-px bg-black"/>
                <p className="text-grey-darker text-base mt-4 mb-2">
                    {props.assignment}
                </p>
            </div>
        </div>
    )
};

export default Assignment