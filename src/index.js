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
                <div className='login_buttons'>
                    <p>SignUp</p>
                </div>
                <div className='login_buttons'>
                    <p>LogIn</p>
                </div>
            </div>
        </div>
    </>);
}

root.render(<LoginPage />);