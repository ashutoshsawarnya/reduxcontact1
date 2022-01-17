import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const contacts = useSelector((state) => state)
     const dispatch = useDispatch();

    const deleteContact = (id) =>{
        dispatch({type:"DELETE_CONTACT",payload:id})
        toast.success("Contact deleted successfully")
    }
    return (
        <div className="container">
            <div className="row">
           <div className="col-md-12 my-5 text-center">
            <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
           
           </div>
           <div className="col-md-10 mx-auto">
         <table className="table table-hover">
           <thead className="text-white bg-dark text-center">
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Email</td>
                <td>Number</td>
                <td>Action</td>
            </tr>
           </thead>
           <tbody>
               {
                   contacts.map((contact,id) =>(
                      <tr key={id}>
                          <td>{id+1}</td>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.number}</td>
                          <td>
                              <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                              <button type="button" className="btn btn-small btn-danger"
                               onClick={() => deleteContact(contact.id)}
                              >Delete</button>
                              </td>
                        </tr>
                   ))
               }
           </tbody>
         </table>
           </div>
            </div>
        </div>
    );
};

export default Home;