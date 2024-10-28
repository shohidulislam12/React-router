import { Link, useNavigate, useRouteError } from "react-router-dom";


const Error = () => {
    const error=useRouteError();
    const navigat=useNavigate()
    const handlenavigate=()=>{
        navigat(-1)
    }
    console.log(error);
    return (
        <div>
            <h2>Opps!!</h2>
            <p>{error.statusText||error.message}</p>
            {
                error.status==404&&<div>
                    <h3>page nor fount</h3>
                    <p>go back where are you ffrom </p>
                    <button onClick={handlenavigate}>go back</button>
                    <Link to='/'>Go home</Link>
                  
                </div>
            }
        </div>
    );
};

export default Error;