import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    
    const {friendId} = useParams() //akhane app.js e friendid name j dynamically data ace seta useParams hook dara read kore nilam

    const [friend,setFriend] = useState({})

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`; //akhane (``) mane dynamic korar jonno tarpor (${friendId}) ata mane jotogulo user ace sob gulor id er sob data nibo

        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])

    //const {name} = props.friend;
    const {name,email,username} =friend;
    
    return (
        <div>
            <p>friend details {friendId}</p>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{username}</p>
        </div>
    );
};

export default FriendDetail;