import { hash, compare } from 'bcryptjs';

export default class Auth {
    async encodePassword(password) {
        return await hash(password, 10, (err, hash) => {
            if(err) {
                console.error(err.message);
                return `An error has occured during sign up process: ${err.message}`;
            }
            return hash;
        });
    }
}



// bcrypt.compare(psd, '$2b$10$UxWLThzfjT8nYlZH1iHrcuIZ0Xr2V6hKcLYW/F6PXwfTyUMOa15Wy', (err, result) => {
//     console.log(result);
// })