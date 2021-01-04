import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name,email,id} = props.friends;
    const friendsStyle = {
        border:'1px solid lightgray',
        margin: '20px',
        padding:'20px',
        borderRadius:'20px'

    }
    return (
        <div style={friendsStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <button>onclickd</button>
           <p>id: <Link to={`/about/${id}`}>Show details {id}</Link></p>
        </div>
    );
};

export default Friends;