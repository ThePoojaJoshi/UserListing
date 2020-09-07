import React, { useState } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar'
import UserList from './components/Userlist/UserList'

function App() {

  const [ userDetailList, setUserDetailList ] = useState([
		{
			fullName: 'John J',
			DoB: new Date('01/01/1990'),
			langKnown: [ 'HTML', 'CSS' ],
			gender: 'Male',
			about: 'I am a Developer.'
		},
		{
			fullName: 'Jolie J',
			DoB: new Date('03/03/1995'),
			langKnown: [ 'ReactJS' ],
			gender: 'Female',
			about: 'My Main skill is ReactJs '
		}
	]);

  const addUser = (detail) => {
    debugger
    setUserDetailList([...userDetailList, detail]);
  }

  console.log(userDetailList)
  return (
    <div className="App">
      <div className="left-panel">
        <Sidebar userDetailList={userDetailList}/>
      </div>

      <div className="right-panel">
        <UserList userDetailList={userDetailList} addUser={addUser}/>
      </div>
    </div>
  );
}

export default App;
