import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {title,body,id}=post;
    const navigate=useNavigate();
    const handleShowDetails=()=>{
      navigate(`/post/${id}`)
    }
    return (
        <div style={{border:'1px solid red ',marginTop:'10px'}}>
            <h3>Id: {id}</h3>
            <h2>Title: {title}</h2>
            
            <Link to={`/post/${id}`}>Post detais</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;