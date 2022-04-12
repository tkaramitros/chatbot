import React from "react";
import "./Login.css";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/user/login", {
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
    // console.log(data)
    if (data.message === "Auth successful") {
      console.log("ok");
      localStorage.setItem("token", data.token);
      alert("Login successful");
      window.location.href = "/dashboard";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div
      className="container-lg"
      style={{ paddingTop: "70px", paddingBottom: " 70px" }}
    >
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );

  // const[openModal, setOpenModal] =useState(false);
  // return (
  // <>
  //   <div className='container-popup'>
  //     <Navbar/>
  //    <div className='container'>
  //       <div class="text-center">
  //         <h1> Hello!! Click on the button to Login.</h1>
  //         <button className='openModalBtn' onClick={()=> {setOpenModal(true);
  //         }}
  //         >
  //           Login
  //           </button>
  //         {openModal && <Modal closeModal = {setOpenModal}/>}
  //       </div>
  //    </div>
  //   </div>
  // </>
  // )
};

export default Login;
