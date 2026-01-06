const Profile = ({ name, setName }) => {

  return (
    <div>
      <h1>Profile Page</h1>
      <form>
        <label htmlFor="changeName">Change User</label>
        <input 
          type="text" 
          id="changeName" 
          placeholder="Enter new name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Profile
