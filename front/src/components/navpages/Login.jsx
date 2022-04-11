import React from 'react';
import "./Login.css";
import Navbar from '../Navbar';
import { useState } from 'react';
import Modal from '../Modal';



const Login = () => {
  const[openModal, setOpenModal] =useState(false);
  return ( 
  <>  
    <div className='container-popup'>
      <Navbar/> 
     <div className='container'> 
        <div class="text-center">
          <h1> Hello!! Click on the button to Login.</h1>
          <button className='openModalBtn' onClick={()=> {setOpenModal(true);
          }}
          >
            Login
            </button>
          {openModal && <Modal closeModal = {setOpenModal}/>}
        </div>       
     </div>    
    </div>
  </>
  )
}

export default Login;