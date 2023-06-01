import './App.css';
import frame45 from './image/Frame45.png';
import rect1 from './image/Rectangle1.png';
import rect2 from './image/Rectangle2.png';
import rect3 from './image/Rectangle3.png';
import internet from './image/internet.png';
import linkedin from './image/linkedin.svg';
import fb from './image/fb.png';
import insta from './image/insta.png';
import petalsImg from './image/petals.jpg';
import eyeImg from './image/Vector.svg';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {

  const [userData, setUserData] = useState({ email: '', password: '' })
  // console.log(userData.email);

  function handleEye() {
    var passwordInput = document.getElementById("passwordInput");
    var eyeButton = document.getElementById("eyeButton");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeButton.classList.add("active");
    } else {
      passwordInput.type = "password";
      eyeButton.classList.remove("active");
    }
  }

  function handleClick() {
    if (!userData.email.includes("@") && !userData.email.includes(".com")) {
      toast.error("Enter Valid Email")
    }
    else if (userData.password.length === 0) {
      toast.error("Enter Password")
    }
    else {
      toast.success("Login Successfull")
    }
  }

  return (
    <div className="m-auto mt-12 main-content">
      <ToastContainer
        autoClose={1500}
        position="top-center"
        className="toast-container"
        toastClassName="dark-toast"
      />

      <div className='rounded-3xl image-content'>

        <img src={frame45} alt="frame45" className='absolute frame45' />

        <div className='upTime'>
          <div>
            <p className='font-semibold text-4xl tracking-wider'>100% Uptime😎</p>
            <p className='font-normal text-2xl tracking-wider text-slate-400'>Zero Infrastructure</p>
            <p className='font-normal text-2xl tracking-wider text-slate-400'>Management</p>
          </div>
        </div>

        <div>
          <img src={rect1} alt="rect-1" className='rect-1' />
          <img src={rect2} alt="rect-2" className='rect-2' />
          <img src={rect3} alt="rect-3" className='rect-3' />
        </div>

        <div className='frame55'>
          <img src={internet} alt="" className='internet' />
          <p className='com'>aesthisia.com</p>
        </div>

        <div className='frame61'>
          <img src={linkedin} alt="linkedin" className='linkedin' />
          <img src={fb} alt="fb" className='fb' />
          <img src={insta} alt="insta" className='insta' />
        </div>

      </div>

      <div className='side-content'>
        <img src={petalsImg} alt="" className='petals' />
        <p className='welcome'>Welcome <span style={{ color: "#08A593" }}>Back!</span> </p>
        <p className='glad'>Glad to see you, Again!</p>

        <div className='input-1'>
          <input type="text" placeholder='Enter your email' className='email inputText' onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
        </div>

        <div className='input-2'>
          <input type="password" placeholder='Enter your password' className='pass inputText' id='passwordInput' onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
          <img src={eyeImg} alt="eye" className='eye' onClick={handleEye} id='eyeButton' />
        </div>

        <p className='forgot'>Forgot Password?</p>

        <button className='btn' onClick={handleClick}>Log In</button>

        <p className='signup'>Don't have an account yet? <span style={{ color: "#08A593" }}>Sign Up</span></p>

      </div>

    </div>
  );
}

export default App;
