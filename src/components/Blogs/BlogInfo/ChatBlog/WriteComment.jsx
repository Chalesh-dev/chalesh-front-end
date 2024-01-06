import Image from "next/image";
import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const WriteComment = () => {
  const loggedInUser = {
    id: "wedewf",
    name: "amir",
  };
  const [type, setType] = useState(false);
  const handleType = () => {
    setType(true);
  };
  return (
    <div
      className={`w-[90%] border border-gray-300 rounded-md p-3 my-2 min-h-[70px] drop-shadow-lg ${
        type ? "h-[220px]" : "h-[70px]"
      } transition-all duration-700 ease-in-out`}
    >
      {type && (
        <div className="flex gap-2 items-center mb-2">
          {loggedInUser?.image ? (
            <Image
              width={38}
              height={38}
              className="rounded-full"
              alt="user img"
            />
          ) : (
            <IoPersonCircleOutline style={{ color: "#ccc" }} size={32} />
          )}
          <span className="text-black text-[0.7rem]">{loggedInUser.name}</span>
        </div>
      )}

      <textarea
        onClick={handleType}
        className={`resize-none border-none focus-within:border-slate-400 text-black/75 border-0 text-[0.7rem] focus:border-0 w-full rounded-md ${
          type ? "p-2" : "p-3"
        } ${
          type ? "h-[110px]" : "h-[40px]"
        } transition-all duration-700 ease-linear`}
        placeholder="What are you thoughts?"
      ></textarea>

      {type && (
        <div className="flex gap-2 text-black text-[0.7rem] justify-end my-2">
          <button onClick={() => setType(false)}>Cancel</button>
          <button className="px-3 py-2 rounded-2xl bg-green-300">
            Respond
          </button>
        </div>
      )}
    </div>
  );
};

export default WriteComment;
