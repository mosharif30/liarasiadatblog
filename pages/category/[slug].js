import React from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-0 mb-2 ">
      <div className="grid  grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-3 col-span-1 ">
          <div className="lg:sticky relative top-8">
            <Categories place={router.query.slug} />
            {/* <PostWidget /> */}
          </div>
        </div>

        <div className="grid   lg:col-span-9 col-span-1 ">
          <div className="bg-customGray text-white p-5 text-2xl my-auto">
            {router.query.slug.toUpperCase()}
          </div>
          <div className="grid  lg:grid-cols-2  mt-2 gap-6">
            {posts.reverse().map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getServerSideProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
// export async function getStaticPaths() {
//   const categories = await getCategories();
//   return {
//     paths: categories.map(({ slug }) => ({ params: { slug } })),
//     fallback: true,
//   };
// }
