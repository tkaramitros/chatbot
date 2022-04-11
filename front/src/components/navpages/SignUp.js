import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setName] = useState("");
  // const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.message === "User created") {
      navigate("/login");
      console.log("ok");
    }
    if (data.message === "Mail exists") {
      alert("Email exists");
    }
  }

  return (
    <div className="container-sup">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          value={email}
          onChange={(e) => setName(e.target.value)}
          type="email"
          placeholder="email"
        />
        <br />
        {/* <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        /> */}
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SignUp;

/* const [openModal, setOpenModal] = useState(false);
return (
 <>
    <div className='container-popup'>
      <Navbar />
       <div className='container'>
        <div class="text-center">
          <h1> Hello!! Click on the button to SignUp.</h1>
           <button className='openModalBtn' onClick={() => { */
/* setOpenModal(true);
}}
>
SignUp
</button> */
/* {openModal && <Modal closeModal={setOpenModal} />}
</div> */
/* </div> */
/* </div> */
/* </> */
/* ) */
