import React from "react";
import { sendIcon } from "../../ImageExporter/ImageExporter";

const NewsLetter = () => {
  return (
    <div className="w-1/6 flex flex-col items-center justify-end h-full pb-48">
      <h1 className="text-white text-xl main-font ">
        Sign&nbsp;up&nbsp;for&nbsp;mounthly&nbsp;newsletter
      </h1>
      <form
        action="#"
        className="w-full h-16 flex flex-row items-center justify-center mt-14 "
      >
        <input
          type="text"
          className="h-full w-5/6 rounded-l"
          placeholder="  Email Address"
        />
        <button
          type="submit"
          className=" h-full w-1/6 flex flex-row items-center justify-center rounded-r"
          style={{ background: "#CB0F4C" }}
        >
          <img src={sendIcon} className="w-1/2 h-1/3" alt="" />
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
