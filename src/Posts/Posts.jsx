import { useLoaderData } from "react-router-dom";
import Post from "./post";


const Posts = () => {
  const posts=  useLoaderData();
    return (
        <div>
            <h2>Post:{posts.length}</h2>
            <div>
                {
                    posts.map(post=><Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;