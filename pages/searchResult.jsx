import Head from "next/head";
import { useEffect, useState } from "react";
import { PostCard, Categories } from "../components";
import {  getSearchPost } from "../services/index";
import  { useRouter } from "next/router";

const searchResult = ({ posts }) => {
  const router = useRouter();
  const val = router.query.searched;

  const [sPosts, setSPosts] = useState([]);

  useEffect(() => {
    getSearchPost(val).then((newPosts) => {
      const res = newPosts;
      setSPosts(res);
    });
  }, [router.isReady]);

  if (sPosts === null) {
    return <>hi</>;
  } else {
    return (
      <>
        <Head>
          <title>Amir Siadat</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container mx-auto px-0 mb-2 ">
          <div className="grid  grid-cols-1 lg:grid-cols-12 gap-3">
            <div className="xl:col-span-2 lg:col-span-3 col-span-1 bg-customBlue">
              <div className="lg:sticky relative top-4">
                <Categories place={router.query.slug} />
                {/* <PostWidget /> */}
              </div>
            </div>

            <div className="grid   lg:col-span-9 xl:col-span-10 col-span-1 ">
              <div className="bg-customBlue text-white p-5 text-2xl my-auto">
                searchin for "{router.query.searched}"
              </div>
              <div className="grid  lg:grid-cols-2  mt-2 gap-6">
                {sPosts.reverse().map((post, index) => (
                  <PostCard key={index} post={post.node} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default searchResult;
