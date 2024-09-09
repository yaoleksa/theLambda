import { hash, compare } from 'bcryptjs';
import DBcomunication from './db';

export default class Auth {
    connection = new DBcomunication();
    signUp(email, password, setFunc) {
        hash(password, 10, (err, hash) => {
            if(err) {
                console.error(err.message);
                return `An error has occured during sign up process: ${err.message}`;
            }
            this.connection.signUp(hash, email).then(code => { console.log(code); })
        });
    }
}



// bcrypt.compare(psd, '$2b$10$UxWLThzfjT8nYlZH1iHrcuIZ0Xr2V6hKcLYW/F6PXwfTyUMOa15Wy', (err, result) => {
//     console.log(result);
// })