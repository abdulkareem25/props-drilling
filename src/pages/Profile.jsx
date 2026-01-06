import { useState } from "react";

const Profile = ({ setName }) => {

  const [newName, setNewName] = useState('');

  return (
    <div>
      <h1>Profile Page</h1>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        setName(newName);
        setNewName('');
      }}
      >
        <label htmlFor="changeName">Change User</label>
        <input 
          type="text" 
          id="changeName" 
          placeholder="Enter new name" 
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Profile
