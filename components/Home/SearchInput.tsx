import React from "react";

const SearchInput = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-[20px] text-gray-400">
        Lets find a car for your GREAT Trip:
      </h2>
      <div className="flex justify-center">
        <div className='flex bg-gray-100 rounded-full divide-x p-1 px-3'>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none bg-transparent"
            />
          </div>
          <div>
            <input
              type="date"
              className="p-2 outline-none bg-transparent  text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
