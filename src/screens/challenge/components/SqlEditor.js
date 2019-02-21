import React from 'react'
import AceEditor from 'react-ace';
import 'brace/mode/sqlserver';
import 'brace/theme/textmate';

const SqlEditor = ({className}) => {

    return (
        <div className={className}>
            <AceEditor
                width="100%"
                mode="sqlserver"
                theme="textmate"
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
            />
            <button
                className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </div>
    )
};

export default SqlEditor
