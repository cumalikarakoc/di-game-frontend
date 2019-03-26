import React from "react";

const Assignment = ({ description }) => {
  return (
    <div className="rounded overflow-hidden border-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4">Assignment</div>
        <hr className="h-px bg-black" />
        <p className="text-grey-darker text-base mt-4 mb-2" />
      </div>
    </div>
  );
};

export default Assignment;
