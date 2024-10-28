import { Link } from "react-router-dom";


const Users = ({user}) => {
    const {id,name,address,email}=user
    return (
        <div style={{border:'2px solid red ',margin:'5px',padding:'10px', borderRadius:'10px'}}>
            <p >{name}</p>
            <p >{address.zipcode}</p>
            <p >{email}</p>
            <Link to={`/user/${id}`}>Show Detais</Link>
        </div>
    );
};

export default Users;