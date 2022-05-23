import React from 'react';
import './Login.css';
import google from '../../../img/SocialLogin/google-logo3.png';
import github from '../../../img/SocialLogin/github-icon.png';
import facebook from '../../../img/SocialLogin/facebook.png';
import loginImg from '../../../img/loginImg/istockphoto-108622864-612x612_1_-removebg-preview.png';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    if (gUser) {
        console.log(gUser)
    }

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='login'>
            <div className='login-dev'>
                <div>
                    <img width='350px' height='180px' src={loginImg} alt='' />
                </div>
                <h2 className='login-hd'>Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='login-form'>

                    <div className="">
                        <input className='login-input' type='email'
                            placeholder=' Email' autoComplete="off"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className='label ml-12'>
                            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                        </label>
                    </div>

                    <div>
                        <input className='login-input ' type='password'
                            placeholder=' Password' autocomplete="off"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className='label ml-12'>
                            {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}  
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                        </label>
                    </div>

                    <input type='submit' className='login-input input-submit' value='Login' />

                </form>


                <p className='forgot-btn'>Forgot Password</p>

                <div className='login-or mb-2 mt-2'>
                    <hr /> <p className='ml-1 mr-1' style={{ color: 'blue' }}>OR</p> <hr />
                </div>

                <div>
                    <div className='socialLogin'>
                        <img height='40px' width='40px' src={github} alt='' />

                        <img height='40px' width='40px'
                            onClick={() => signInWithGoogle()}
                            src={google} alt='' />

                        <img height='40px' width='40px' src={facebook} alt='' />
                    </div>
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