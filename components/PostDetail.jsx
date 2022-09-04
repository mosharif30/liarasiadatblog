import React from "react";

import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const PostDetail = ({ post }) => {
  const content = post.content.raw;
  console.log(post);
  const references = [];
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  console.log(post);

  return (
    <div>
      <div className="bg-white shadow-lg  lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt=""
            className="object-top h-full w-full object-cover  shadow-lg -t-lg lg:"
          />
        </div>
        <div className="px-5 lg:px-2 text-base  ">
          <div className="flex items-center mb-8 w-full">
            <div className="font-medium text-gray-700">
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
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>

          <RichText
            content={content}
            renderers={{
              h1: ({ children }) => <h1 className={`wfafsa`}>{children}</h1>,
              blockquote: ({ children }) => (
                <blockquote
                  style={{
                    paddingLeft: "16px",
                    borderLeft: "4px solid blue",
                    fontSize: "26px",
                  }}
                >
                  {children}
                </blockquote>
              ),
              a: ({ children, href, openInNewTab }) => (
                <a
                  id={href.startsWith("endref") ? href : ""}
                  href={
                    href.endsWith("p")
                      ? `#${href.slice(0, -1)}`
                      : href.startsWith("endref")
                      ? `#${href}p`
                      : href
                  }
                  target={openInNewTab ? "_blank" : "_self"}
                  style={{ color: "blue" }}
                  rel="noreferrer"
                >
                  {children}
                </a>
              ),
              h2: ({ children }) => (
                <h2 style={{ color: "darkcyan" }}>{children}</h2>
              ),
              p: ({ children }) => (
                <p
                
                  className="mb-8"
                >
                  {children}
                </p>
              ),
              bold: ({ children }) => <strong>{children}</strong>,
              code_block: ({ children }) => {
                return (
                  <pre className="line-numbers language-none">
                    <code>{children}</code>
                  </pre>
                );
              },
              Asset: {
                application: () => (
                  <div>
                    <p>Asset</p>
                  </div>
                ),
                text: () => (
                  <div>
                    <p>text plain</p>
                  </div>
                ),
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
