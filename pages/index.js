import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, AboutUsBar } from '../components';
import { getPosts } from '../services';


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-4">
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
          <AboutUsBar />
        </div>
        </div>
        <FeaturedPosts />
      </div>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

