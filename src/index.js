import Auth from './auth';

const btn = document.createElement('button');
btn.innerText = 'Click me';
btn.addEventListener('click', () => {
    auth = new Auth();
    auth.signUp('doom@org.com', 'xxx');
});

document.getElementById('root').appendChild(btn);