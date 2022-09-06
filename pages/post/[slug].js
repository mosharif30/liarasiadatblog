import React from "react";
import { useRouter } from "next/router";

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Loader,
} from "../../components";
import { getPosts, getPostDetails } from "../../services";
// import { AdjacentPosts } from "../../sections";

const PostDetails = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-0 mb-2 ">
        <div className="grid  grid-cols-1 lg:grid-cols-12 gap-3 ">
          <div className="xl:col-span-2 lg:col-span-3 col-span-1 bg-customGray">
            <div className="lg:sticky relative top-4">
              <Categories place={post.categories[0].slug} />
              {/* <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              /> */}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-9 xl:col-span-10">
            <PostDetail post={post} />
            {/* <Author author={post.author} /> */}
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />  */}
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getServerSideProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
// export async function getStaticPaths() {
//   const posts = await getPosts();
//   return {
//     paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
//     fallback: true,
//   };
// }
