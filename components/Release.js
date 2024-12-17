import React from "react";
// import { TouchableOpacity } from "react";

const Release = ({ debugging, setDebugging, handler }) => {
  return (
    <div
      //   className="bg-[#3331]"
      style={{
        opacity: debugging ? 1 : 0,
        // cursor: debugging ? "none" : "default",
      }}
    >
      {/* user checkbox to initiate debug statements */}
      <button onDoubleClick={handler} className="text-white cursor-none">
        Debug
      </button>
    </div>
  );
};

export default Release;
