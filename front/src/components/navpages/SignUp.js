import React from 'react';
import "./SignUp.css";
import Navbar from '../Navbar';
import { useState } from 'react';
import Modal from '../Modal';



const SignUp = () => {
  const[openModal, setOpenModal] =useState(false);
  return ( 
  <>  
    <div className='container-popup'>
      <Navbar/> 
     <div className='container'> 
        <div class="text-center">
          <h1> Hello!! Click on the button to SignUp.</h1>
          <button className='openModalBtn' onClick={()=> {setOpenModal(true);
          }}
          >
            SignUp
            </button>
          {openModal && <Modal closeModal = {setOpenModal}/>}
        </div>       
     </div>    
    </div>
  </>
  )
}

export default SignUp;