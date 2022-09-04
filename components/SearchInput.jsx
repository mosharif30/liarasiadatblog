import React from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";

const SearchInput = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data.searched);
    Router.push({
      pathname: "/searchResult",
      query: data,
    });
  };
  const onError = (errors, e) => console.log(errors, e);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="p-2">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            {...register("searched")}
            type="text"
            id="default-search"
            className="border border-solid border-white focus:border-red-700 block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50   "
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-customGray hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
