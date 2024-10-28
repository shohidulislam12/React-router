import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData();
    const {name}=user
    console.log(user);

    return (
        <div>
            <h2>Details About User</h2>
            <p>Name:{name}</p>
        </div>
    );
};

export default UserDetails;