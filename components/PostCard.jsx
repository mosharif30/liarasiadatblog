import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  // console.log(post.categories[0].name);
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="bg-white  cursor-pointer shadow-lg  p-0 lg:p-2 pb-1 mb-1 relative hover:bg-gray-300">
        <div className="relative overflow-hidden shadow-lg pb-52 mb-3 ">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top absolute h-52 w-full object-contain shadow-lg "
          ></img>
        </div>
        <h1
          className="transition duration-700 text-center mb-3 cursor-pointer text-gray-700
       hover:text-gray-900 text-base "
        >
          <Link href={`/post/${post.slug}`}>{post.categories[0].name}</Link>
        </h1>
        <h1
          className="transition duration-200 text-center mb-3  text-gray-700
       hover:text-gray-900 text-xl font-medium"
        >
          {post.title}
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-3 w-full">
          <div className="font-medium text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
        <div className="text-justify text-base text-gray-900 font-normal px-1 lg:px-2 mb-2 py-5">
          {post.excerpt}{" "}
          <span className=" text-center  inset-x-0 bottom-2">
            <Link href={`/post/${post.slug}`}>
              <span className=" inline-block   text-gray-500 hover:text-gray-900 px-0 py-0 cursor-pointer ">
                Continue Reading
              </span>
            </Link>
          </span>
        </div>
        {/* <div className=" text-center absolute inset-x-0 bottom-2">
        <Link href={`/post/${post.slug}`}>
          <span className="bg-gray-900 transition duration-500 ease transform hover:-translate-y-1 inline-block  text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer ">
            Continue Reading
          </span>
        </Link>
      </div> */}
      </div>
    </Link>
  );
};

export default PostCard;
