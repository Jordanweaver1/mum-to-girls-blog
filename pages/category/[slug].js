import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  const [menuHidden, setMenuHidden] = useState(true);
  

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-4">
      <div className="lg:col-span-2 bg-white shadow-lg p-0 mt-2 pt-4 pb-4 text-3xl mb-2 rounded-lg text-center font-semibold">
          {categories.map((category, index) => {
            if(`/category/${category.slug}` === `${window.location.pathname}`){
              return(
              <h1>{category.name}</h1>)
            }
            })}
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1 col-span-1">
          {posts.slice(0).reverse().map((post, index) => {
            if (index === 0 || index % 2 ===0){
              return(
            <PostCard key = {index} post={post.node} />)}})}
        </div>
        <div className="lg:col-span-1 col-span-1">
          {posts.slice(0).reverse().map((post, index) => {
            if ( index % 2 !== 0){
              return(
            <PostCard key = {index} post={post.node} />)}})}
        </div>
        <div className="lg:col-span-1 col-span-1 relative lg:sticky">
          <Categories />
        </div>
        </div>
      </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
