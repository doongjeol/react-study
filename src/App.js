import React, {useRef, useState} from 'react'
import UserList from './UserList'
import CreateUser from './CreateUser'
import WebsocketPractice from './WebsocketPractice'

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active).length;
}

function App(){
  const [inputs, setInputs] = useState({
    username: '',
    email:''
  })
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    console.log(typeof(name))
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    setInputs({
      username : '',
      email: ''
    })
    nextId.current += 1;
  }

  const onRemove = id => {
    
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user
      )
    );

  }

  const count = countActiveUsers(users);
  return (
    <>
      <CreateUser 
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
<<<<<<< HEAD
      <UserList users = {users}/>
      <WebsocketPractice />
=======
      <UserList users = {users} onRemove = {onRemove} onToggle = {onToggle}/>
      <div>활성 사용자 수 : {count} </div>
>>>>>>> d128394a2f69e1cfb8f53e87b39665f67f631022
    </>
  )
}

export default App;