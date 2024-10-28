import { useLoaderData } from "react-router-dom";
import Users from "./User/User";

const User = () => {
    const users=useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our Users {users.length}</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)'}}>
                {
                    users.map((user)=><Users user={user}></Users>)
                }
            </div>
            <p>they are just assume</p>
        </div>
    );
};

export default User;