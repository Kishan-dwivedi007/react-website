import "./Css/LoginSignup.css";
import { Link } from "react-router-dom";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an accound?{" "}
          <span>
            {" "}
            <Link to="/login">Login here</Link>{" "}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="" name="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
