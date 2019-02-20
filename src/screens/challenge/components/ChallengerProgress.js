import React from 'react'

const ChallengerProgress = (props) => {

    return (
        <div className="max-w-sm rounded overflow-hidden border-2">
            <div className="flex flex-row">
                <div className="px-4 py-2 m-2">
                    <p className="text-black text-base mb-2">
                        {props.completed} challenges completed.
                    </p>
                    <p className="text-black text-base">
                        {props.failed} challenges failed.
                    </p>
                </div>
                <div className=" px-4 py-2 m-2">
                    <img className="rounded-full h-16 w-16 flex items-center justify-center"
                         src="https://via.placeholder.com/75"/>
                </div>
            </div>
        </div>
    )
};

export default ChallengerProgress