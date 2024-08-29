import { hash, compare } from 'bcryptjs';
import DBcomunication from './db';

export default class Auth {
    connection = new DBcomunication();
    signUp(email, password) {
        hash(password, 10, (err, hash) => {
            if(err) {
                console.error(`An error has occured during sign up process: ${err.message}`);
            }
            this.connection.signUp(email, hash);
        });
    }
}



// bcrypt.compare(psd, '$2b$10$UxWLThzfjT8nYlZH1iHrcuIZ0Xr2V6hKcLYW/F6PXwfTyUMOa15Wy', (err, result) => {
//     console.log(result);
// })