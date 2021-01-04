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
           <p><Link to={`/friend/${id}`//ay route ta dynamically dakhanor jonno ayvabe dclear kora hoyece ,akhane protek id dynamic dakhache and dynamic p[ath e ashtace]
            }><button>Show details of {id}</button></Link></p> 
        </div>
    );
};

export default Friends;