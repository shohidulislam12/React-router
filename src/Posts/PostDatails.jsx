import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDatails = () => {
    const post=useLoaderData();
    const params=useParams()
    const navigate=useNavigate()
    console.log(params);
    const handleBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h4>Details:{post.title}</h4>
            <p>Details:{post.body}</p>
            <button onClick={handleBack}>go back</button>
        </div>
    );
};

export default PostDatails;