import React, { useEffect,useState } from 'react';
import {Link, useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"

const EditContact = () => {


    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[number,setNumber] = useState()

    const {id} = useParams();
    const contacts = useSelector((state) =>state)
    const currentContact = contacts.find((contact) => contact.id === parseInt(id))
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() =>{
        if(currentContact){
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
  },[currentContact])

    const handleSubmit = (e) =>{
        e.preventDefault();
  
        const checkMail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email )
        const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.number ===  parseInt(number))
  
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
            id: parseInt(id),
            name,
            email,
            number
        }
        dispatch({type: "UPDATE_CONTACT",payload:data});
        toast.success("Student updated successfully");
        navigate("/")
      }

    

    return (
        <div className="container">
            {
                currentContact ? (
                    <>
                        <div className="row">
            <h1 className="display-3 text-center">
                Add Student {id}
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
                        value={number} onChange={e => setNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group p-1">
                        <input type="submit" value="Update Student" className="btn btn-dark" />
                    </div>
                    <div className="form-group p-1">
                        <Link to="/" className="btn btn-danger mr-3">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
                    </>):(
                        <h1 className="display-3 text-center">
                        Student contact with id {id} not exists
                    </h1>
                    )
                    })
            
      
    </div>
    );
};

export default EditContact;