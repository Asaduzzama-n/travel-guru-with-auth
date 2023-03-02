import React, { useContext, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import google from '../../images/icons/google.png'
import './Register.css'

const Register = () => {

    const {createUserWithEmail,verifyUser} = useContext(AuthContext);
    const [error,setError] = useState('');

    const handleRegisterForm = (event) =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const c_password = form.c_password.value;

        if(password !== c_password){
            setError("password doesn't match");
            return;
        }

        createUserWithEmail(email,password)
        .then(userCredential =>{
            const user = userCredential.user;
            handleVerify();
            console.log(user);
        })
        .catch(error=>{
            console.error(error.message);
            setError(error);
        })


    }

    const handleVerify =( )=>{
        verifyUser()
        .then(result => {

        })
        .catch(error=>{console.error(error.message)})
    }


    return (
        <div className='container'>
            <div className='login-form-container'>
                <div className='form-container'>
                    <form onSubmit={handleRegisterForm}>
                        <Row>
                            <h2>Create an account</h2>
                        </Row>
                        <Row >
                            <Col>
                                <input className='input-style' type="text" id='name' name='name' placeholder='Name' required />
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <input className='input-style' type="email" id='email' name='email' placeholder='Email' required />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input className='input-style' type="password" id='password' name='password' placeholder='Password' required />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input className='input-style' type="password" id='c_password' name='c_password' placeholder='Confirm password' required />
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col>
                                <button type='submit' className='login-button'>Register</button>
                            </Col>
                        </Row>
                        <Row className='mt-3 text-center'>
                            <Col>
                                <p>Already have an account?<Link to={'/login'}>Login</Link></p>
                            </Col>
                        </Row>
                    </form>
                </div>

                <div>
                    <div className='d-flex justify-content-around align-items-center mt-3'>
                        <div className='line'></div>
                        <div>Or</div>
                        <div className='line'></div>
                    </div>

                    <div className='mt-3'>
                        <button className='google-button'> <img src={google} height="25px" className='mx-4' alt="" /> Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;