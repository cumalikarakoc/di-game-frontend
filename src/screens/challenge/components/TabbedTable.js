import React from 'react'

const TabbedTable = (props) => {

    return (
        <div className="rounded overflow-hidden border-2">
            <div className="px-6">
                <ul className="list-reset flex ">
                    <li className="-mb-px mr-1">
                        <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold"
                           href="#">Users</a>
                    </li>
                    <li className="mr-1">
                        <a className="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold"
                           href="#">Guests</a>
                    </li>
                    <li className="mr-1">
                        <a className="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold"
                           href="#">Courses</a>
                    </li>
                </ul>
            </div>
            <p className="text-grey-darker text-base mt-4 mb-2 px-5">
                Table elements
            </p>
        </div>
    )
};

export default TabbedTable