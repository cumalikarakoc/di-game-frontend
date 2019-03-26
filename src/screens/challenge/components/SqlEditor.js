import React from "react";
import AceEditor from "react-ace";
import "brace/mode/sqlserver";
import "brace/theme/textmate";

const SqlEditor = ({ className, value = "", onChange }) => {
  return (
    <div className={className}>
      <AceEditor
        width="100%"
        mode="sqlserver"
        theme="textmate"
        name="UNIQUE_ID_OF_DIV"
        value={value}
        editorProps={{ $blockScrolling: true }}
        onChange={onChange}
      />
    </div>
  );
};

export default SqlEditor;
