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
            <label htmlFor='login' className='credential'>Email / login
            <input type='email' name='login' className='email'></input>
            </label>
            <label htmlFor='password' className='credential'>Password
            <input type='password' name='passwiord' className='password'></input>
            </label>
            <label>
                <img className='password_eye' src='./imgs/preview-show-interface-icon-free-vector.jpg'/>
                <input type='checkbox' onChange={showPassword}></input>
            </label>
            <input type="submit" value="Sign up" className='login_buttons' onClick={createUser}></input>
        </form>
    </>);
}

function showPassword() {
    const pswdForm = document.getElementsByClassName('password')[0];
    const pswdEye = document.getElementsByClassName('password_eye')[0];
    pswdForm.type = pswdForm.type == 'text' ? 'password' : 'text';
    if(pswdEye.getAttribute('src') == './imgs/preview-show-interface-icon-free-vector.jpg') {
        pswdEye.setAttribute('src', './imgs/121656219-hidden-from-view-eye-crossed-out-line-art-vector-icon-for-apps-and-websites.jpg');
    } else {
        pswdEye.setAttribute('src', './imgs/preview-show-interface-icon-free-vector.jpg');
    }
}

function renderWithSignUp() {
    root.render(<SignUp />);
}

function createUser(event) {
    event.preventDefault();
    const email = document.getElementsByClassName('email')[0].value;
    const password = document.getElementsByClassName('password')[0].value;
    // pass validation
    if(!email.match(/.+\@.+\..+/g)) {
        alert('Invalid email');
        throw new Error('Invalid email value');
    }
    if(!password.match(/[A-Z]+/g)) {
        alert('Password must contain upper case letters');
        throw new Error('Password must contain upper case letters');
    }
    if(!password.match(/[a-z]+/g)) {
        alert('Password must contain lower case letters');
        throw new Error('Password must contain lower case letters');
    }
    if(!password.match(/[0-9]+/g)) {
        alert('Password must contain numbers');
        throw new Error('Password must contain numbers');
    }
    if(password.length < 9) {
        alert('Password must contain at least nine symbols');
        throw new Error('Password must contain at least nine symbols');
    }
    const result = new Auth().signUp(email, password);
    console.log(result);
    if(result) {
        root.render(<SignUpWelcomePage/>);
    }
}

function SignUpWelcomePage() {
    return (<>
        <p>You've successfuly signed up</p>
    </>);
}

root.render(<LoginPage />);