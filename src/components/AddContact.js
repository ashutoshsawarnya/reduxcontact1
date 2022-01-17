import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"

const AddContact = () => {
   
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[number,setNumber] = useState()
    const contacts = useSelector((state) => state)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
      e.preventDefault();

      const checkMail = contacts.find((contact) => contact.email === email && email)
      const checkNumber = contacts.find((contact) => contact.number ===  parseInt(number))

      if(!email || !number || !number){
          return toast.warning("Please fill in all fields!!")
      }

      if(checkMail){
          return toast.error("Email Already Exists")
      }
      
      if(checkNumber){
          return toast.error("Number Already Exists")
      }

      const data = {
          id: contacts[contacts.length -1].id + 1,
          name,
          email,
          number
      }
      dispatch({type: "ADD_CONTACT",payload:data});
      toast.success("Student added successfully");
      navigate("/")
    }
    return (
        <div>
            <div className="row">
                <h1 className="display-3 text-center">
                    Add Student
                </h1>
                <div className="col-md-6 shadow mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-1">
                            <input type="text" placeholder="Name" className="form-control"
                            value ={name} onChange ={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-1">
                            <input type="email" placeholder="Email" className="form-control" 
                            value={email} onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-1">
                            <input type="number" placeholder="Number" className="form-control" 
                            value={number} onChange={ e => setNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-1">
                            <input type="submit" value="Add Student" className="btn btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact;