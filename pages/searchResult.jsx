import Head from "next/head";
import { useEffect, useState } from "react";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts, getSearch } from "../services/index";
import Router, { useRouter } from "next/router";

const searchResult = ({ posts }) => {
  const router = useRouter();
  console.log("routerquery", router.query);
  const [sPosts, setSPosts] = useState([]);

  useEffect(() => {
    getSearch().then((newPosts) => {
      const res = newPosts.filter(
        (post) => post.node.title == router.query.searched
      );
      console.log(res);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Amir Siadat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-0 mb-2 ">
        <div className="grid  grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="xl:col-span-2 lg:col-span-3 col-span-1 bg-customGray">
            <div className="lg:sticky relative top-4 ">
              <Categories />
              {/* <PostWidget /> */}
            </div>
          </div>
          <div className="grid  lg:grid-cols-2 lg:col-span-9 xl:col-span-10 lg:ml-3 col-span-1 gap-6 mt-8 lg:mt-0">
            you searched for "{router.query.searched}" :
          </div>
        </div>
      </div>
    </>
  );
};
export default searchResult;
