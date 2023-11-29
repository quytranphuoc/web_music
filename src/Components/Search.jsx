import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="w-full flex items-center ">
      <span className="h-15 px-3 bg-[#DDE4E4] py-2 flex items-center justify-center rounded-l-[20px]  text-gray-500">
        <FiSearch size={24} />
      </span>
      <input
        type="text"
        className="w-full outline-none bg-[#DDE4E4] px-3 py-2 rounded-r-[20px] h-15 text-gray-500"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
}

export default Search;
