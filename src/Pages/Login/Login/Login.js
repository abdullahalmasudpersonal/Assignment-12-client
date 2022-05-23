import React from 'react';
import './Login.css';
import loginImg from '../../../img/loginImg/istockphoto-108622864-612x612_1_-removebg-preview.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='login'>
            <div className='login-dev'>
                <div>
                    <img width='350px' height='180px' src={loginImg} alt='' />
                </div>

                <h2 className='login-hd'>Login</h2>

                <form className='login-form'>
                    <input className='login-input' type='email' placeholder=' Email' autocomplete="off" required></input>
                    <input className='login-input' type='password' placeholder=' Password' required autocomplete="off"></input>
                    <input type='submit' className='login-input input-submit' value='Login' />
                </form>

                <p className='forgot-btn'>Forgot Password</p>

                <div className='login-or mb-2 mt-2'>
                    <hr /> <p className='ml-1 mr-1' style={{color:'blue'}}>OR</p> <hr />
                </div>

                <div>
                    <SocialLogin />
                </div>

                <div className='user mt-4'>
                    <p style={{ textAlign: 'center' }}>New to Af Electronics Ltd? <Link to='/signup' style={{ textDecoration: 'none' }}>
                    <span>SignUp</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;