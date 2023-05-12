import { useState } from "react";
import { CiSearch } from "../../assets/icons/ReactIcon";
//ICONS

function Search({ nav }) {
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      action="#"
      className={nav ? "w-full" : "max-w-[360px] w-full"}
      onSubmit={submitHandler}
    >
      <div
        className="relative
     text-gray-600
      focus:text-gray-600"
      >
        <input
          type="text"
          name="search"
          value={input}
          onChange={handleSearch}
          placeholder="What do you want ?"
          className={
            (nav ? "border-b-2 " : "border-2 ") +
            "border-primary   w-full py-2 px-4 placeholder:text-sm placeholder:text-primary"
          }
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="rounded-full bg-transparent">
            <CiSearch className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-4" />
          </button>
        </span>
      </div>
    </form>
  );
}

export default Search;
