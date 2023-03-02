import React, { useContext, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import google from '../../images/icons/google.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const {userLoginWithEmail,setLoading} = useContext(AuthContext);
    const [error,setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLoginFormSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        userLoginWithEmail(email,password)
        .then(userCredential => {
            const user = userCredential.user;
            // navigate('/');
            if(user.emailVerified){
                navigate(from,{replace:true});
            }else{
                toast.error("PLEASE VERIFY YOU EMAIL");
            }
            // console.log(user);
        })
        .catch(error=>{
            setError(error.message);
        })
        .finally(()=>setLoading(false))
        
    }
    return (
        <div className='container'>
            <div className='login-form-container'>
                <form onSubmit={handleLoginFormSubmit}>
                    <Row>
                        <h1>Login</h1>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                            <input className='input-style' type="email" id='email' name='email' placeholder='Email' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input className='input-style' type="password" id='password' name='password' placeholder='Password' required />
                        </Col>
                    </Row>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                        </div>
                        <div>
                            <Link>Forgot Password</Link>
                        </div>
                    </div>
                    <Row className='mt-2'>
                        <Col>
                            <button type='submit' className='login-button'>Login</button>
                        </Col>
                    </Row>
                    <Row className='mt-3 text-center'>
                        <Col>
                            <p>Dont't have an account?<Link to={'/register'}>Create an account</Link></p>
                        </Col>
                    </Row>
                </form>

                <div className='d-flex justify-content-around align-items-center'>
                    <div className='line'></div>
                    <div>Or</div>
                    <div className='line'></div>
                </div>

                <div className='mt-3'>
                    <button className='google-button'> <img src={google} height="25px" className='mx-4' alt="" /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;