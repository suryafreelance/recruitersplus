import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import loginbanner from "../../assets/Rectangle 5.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileScreenButton, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useNavigate } from "react-router-dom";

export const Registration = () => {
  const [showSecondBlock, setShowSecondBlock] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  }
  const handleLogin = () => {
    // Perform login logic
    setShowSecondBlock(true);
  };
  const handleSignup= () =>{
    let path = `/login`; 
    navigate(path);
  }
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countdown]);
  return <div>
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-6 p-0">
          <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="p-4">
              <h2 className="text-center mb-4 fw-700">SIGN UP</h2>
              <p>Start & Track your Scheduling Process </p>
              {!showSecondBlock && (<form className="form-input-custom">
                <div className="mb-3">

                  {/* <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" /> */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Email Address"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" /> */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMobileScreenButton} /></InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Phone Number"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Get Started</button>

                </div>
              </form>)}
              {showSecondBlock && (
                <div>
                  <div>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                      <Form.Control
                        placeholder="Enter OTP "
                        aria-label="opt"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                    <div className="resend_line">
                      {countdown > 0 ? (
                        <p>Resend Opt in {countdown} seconds</p>
                      ) : (
                        <p>Time's up! Request a new reset link.</p>
                      )}
                    </div>
                    <div>
                    </div>
                    <div className="text-center py-5">
                      <button type="submit" className="btn btn-primary btn-block" onClick={handleSignup}>Sign In</button>

                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0 login_background">
          <div className="row container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 p-4">
              <h3 className="fw-700 c-white">
                Very good works are waiting for you Login Now!!!
              </h3>
            </div>
            <div className="col-md-6">
              <img src={loginbanner} alt="" style={{ width: '100%' }} />

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>;
};
