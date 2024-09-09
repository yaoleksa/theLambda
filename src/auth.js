import { hashSync, compareSync } from 'bcryptjs';

export default class Auth {

    // hash plain password
    encodePassword(password) {
        return hashSync(password, 10, (err, hash) => {
            if(err) {
                console.error(err.message);
                return `An error has occured during sign up process: ${err.message}`;
            }
            return hash;
        });
    }

    // compare plain password with hash
    comparePasswords(password, hash) {
        return compareSync(password, hash, (err, result) => {
            if(err) {
                console.error(err.message);
            }
            return result;
        })
    }
}



// bcrypt.compare(psd, '$2b$10$UxWLThzfjT8nYlZH1iHrcuIZ0Xr2V6hKcLYW/F6PXwfTyUMOa15Wy', (err, result) => {
//     console.log(result);
// })