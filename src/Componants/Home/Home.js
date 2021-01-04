import { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';


const Home = () => {
    const [friends,setFriends] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then (res => res.json())
      .then(data => setFriends(data)); //j data pelam otak data hisabe niye setfriends e data ta set kore delam
    },[])
    return (
        <div>
            <h1>Freinds : {friends.length}</h1>
            {
                friends.map(friends => <Friends friends={friends}></Friends>)
            }
        </div>
    );
};

export default Home;