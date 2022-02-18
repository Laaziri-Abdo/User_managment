import React from 'react'
import './App.css';
export default function form({togglePopup,handelsubmit}) {
  return (
    <form className="popup" onSubmit={handelsubmit} >
       
       <div className="popup_inner">
       <button  onClick={togglePopup} className="btn float-end m-4" >X</button>
       <h1>Ajouter d'utilisateurs</h1> 
      

       <div className="grid"> 

<div className="form-floating mb-3">
  <input name="FirstName" className="form-control" id="floatingInput" placeholder="First Name"/>
  <label htmlFor="floatingInput">First Name</label>
</div>

<div className="form-floating">
  <input name="LastName" className="form-control" id="floatingInput" placeholder="Last Name"/>
  <label htmlFor="floatingPassword">Last Name</label>
</div>

<select name="status" className="form-select" aria-label="Default select example">
  <option value="Validation">En Validation</option>
  <option value="Validé">Validé</option>
  <option value="Rejeté">Rejeté</option>
</select> 
<input
                name="number"
                placeholder="Registration Number"
                required
            />

<div className="mb-3">
  <input name="UserName" className="form-control" id="exampleFormControlInput1" placeholder="User Name"/>
</div>

<div className="mb-3">
    <input
        placeholder="Created Date"
        name="createdDate"
        required
    />
</div>
  <button type='submit' className=" btn btn-warning form-control" >Enregestrer</button>


       </div>
     </div>
   </form>
  )
}

