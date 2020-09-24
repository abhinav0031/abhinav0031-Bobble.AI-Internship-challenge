import React, { useState } from "react";
import axios from "axios";
import logo from "./logo.png";
import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";
export const Register = (props) => {
  const responseFacebook = (response) => {
    alert("Registered Successfully");
    console.log(response);
  };

  const responseGoogle = (response) => {
    alert("Registered Successfully");
    console.log(response);
  };
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const { name, lastname, email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    register();
    emptyValues();
  };
  const register = async () => {
    const formData = {
      email: email,
      password: password,
    };
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://reqres.in/api/users",
        formData,
        config
      );
      console.log(res.data.id);
      alert("User Registered");
    } catch (err) {
      alert("Error");
    }
  };
  const emptyValues = () => {
    setUser({ name: "", lastname: "", email: "", password: "" });
  };

  return (
    <div className='form-container'>
      <div className='header'>
        <div className='img-container'>
          <img src={logo} alt='boohoo' className='img-responsive' />
        </div>
      </div>
      <div className='line'>
        <hr />
      </div>
      <div className='signup-form'>
        <h4>SignUp Here</h4>
        <div className='form-heading'>
          <span className='form-title'>Create your account</span>
          <br />
          <span className='form-subheading'>
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <div className='signupbtns'>
            <div className='container'>
              <div className='google'>
                <GoogleLogin
                  clientId='551472235823-982fg58ecs24nlh3h4h5bc2d423mhcvk.apps.googleusercontent.com'
                  buttonText='LOGIN WITH GOOGLE'
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
              </div>
              <div className='facebook'>
                <FacebookLogin
                  appId='' //Could not get APP ID as i did not have facebook account, tried to make facebook account but it got disabeled
                  fields='name,email,picture'
                  callback={responseFacebook}
                />
              </div>
            </div>
          </div>
          <div className='division'>
            <div className='separator'>OR</div>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='FirstName'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='lastname'
              value={lastname}
              onChange={onChange}
              placeholder='LastName'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              required
              placeholder='Password'
              minLength='6'
            />
          </div>
          <div className='conditions'>
            By click Sign Up,you agree to our{" "}
            <span className='pm-clr'>Terms of Use</span> and our{" "}
            <span className='pm-clr'>Privacy Policy</span>
          </div>
          <div className='btn-container'>
            <input
              type='submit'
              value='Sign Up'
              className='register-btn btn-primary btn-block'
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
