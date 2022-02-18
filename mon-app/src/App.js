import './App.css';
import React,{useState} from 'react';
import Form from './form'

let users = [
{ id: "123456789", createdDate: "2021-01-06T00:00:00.000Z", status: "En Validation", firstName: "Mohamed", lastName: "Taha", userName: "mtaha", registrationNumber: "2584", },

{ id: "987654321", createdDate: "2021-07-25T00:00:00.000Z", status: "Validé", firstName: "Hamid", lastName: "Orrich", userName: "horrich", registrationNumber: "1594", },

{ id: "852963741", createdDate: "2021-09-15T00:00:00.000Z", status: "Rejeté", firstName: "Rachid", lastName: "Mahidi", userName: "rmahidi", registrationNumber: "3576",

} ]



function App() {

  const [user, setUsers] = useState(users);
  const [isOpen, setIsOpen] = useState(false);

  
  const deleteSubmit = (ev)=>{
      setUsers((users) => {
        return [...users.filter(item => item.id !== ev)]
      });
    } 
    const handelsubmit = (ev)=>{
      ev.preventDefault(); 
  
  const adduser = { 
    id: Math.floor(Math.random() * 1000),
    createdDate: ev.target.createdDate.value,
    status: ev.target.status.value,
    firstName: ev.target.FirstName.value, 
    lastName: ev.target.LastName.value,
    userName: ev.target.UserName.value,
    registrationNumber: ev.target.number.value,
    };

    setUsers((user) => {
      return [...user, adduser]
    });

    setIsOpen(!isOpen);
    console.log(ev.target.LastName.value)
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
     <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Created Date</th>
      <th scope="col">status</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Registration Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {user.map((val, key) => {
      return (
        <tr key={key}>
          <td >{val.id}</td>
          <td >{(new Date(val.createdDate)).toLocaleDateString()}</td>
          <td  ><button className={val.status +" btn"}>{val.status}</button> </td>
          <td >{val.firstName}</td>
          <td >{val.lastName}</td>
          <td>{val.userName}</td>
          <td className='lg'>{val.registrationNumber}</td>
          <td><button className="btn btn-outline-danger" onClick={() => deleteSubmit(val.id)}>Delete</button></td>
        </tr>
      )
    })}
     </tbody>
</table>

       <button type="button" className="btn btn-primary float-end m-4" onClick={togglePopup} >Ajouter utilisateur</button>

    
 {isOpen && 
    <Form togglePopup={togglePopup} handelsubmit={handelsubmit}/> 
       }


   </div>
  );
}

export default App;
