import ReactDOM from 'react-dom/client';
import React from 'react';
import Auth from './auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

function LoginPage() {
    return (<>
        <div id="welcome_widget">
            <img src="./imgs/lambda.png" />
            <p id="moto">New era of communication</p>
            <div id='login_form'>
                <div className='login_buttons' onClick={renderWithSignUp}>
                    <p>SignUp</p>
                </div>
                <div className='login_buttons'>
                    <p>LogIn</p>
                </div>
            </div>
        </div>
    </>);
}

function SignUp() {
    return (<>
        <form id="sign_up_form">
            <label for='login' className='credential'>Email / login
            <input type='email' name='login' className='email'></input>
            </label>
            <label for='password' className='credential'>Password
            <input type='password' name='passwiord' className='password'></input>
            </label>
            <input type='checkbox' onChange={showPassword}></input>
            <input type="submit" value="Sign up" className='login_buttons'></input>
        </form>
    </>);
}

function showPassword() {
    const pswdForm = document.getElementsByClassName('password')[0];
    pswdForm.type = pswdForm.type == 'text' ? 'password' : 'text';
}

function renderWithSignUp() {
    root.render(<SignUp />);
}

root.render(<LoginPage />);