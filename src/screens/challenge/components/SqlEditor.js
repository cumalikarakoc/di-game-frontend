import React from "react";
import AceEditor from "react-ace";
import "brace/mode/sqlserver";
import "brace/theme/textmate";

const SqlEditor = ({ className, id, value = "", onChange }) => {
  return (
    <div className={className}>
      <AceEditor
        width="100%"
        mode="sqlserver"
        theme="textmate"
        name={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SqlEditor;
