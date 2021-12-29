import React from "react";
import './UserCard.css';

function UserCard(props) {
    return (
        <div className="UserCard">
            <h2>{props.user.name}</h2>
            <h3>{props.user.username}</h3>
            <p><i>{props.user.email}</i></p>
        </div>
    )
}


export default UserCard;