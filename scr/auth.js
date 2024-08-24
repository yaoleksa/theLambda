const bcrypt = require('bcrypt');
const psd = 'nopassword';

bcrypt.hash(psd, 10, (err, hash) => {
    console.log(hash);
});

bcrypt.compare(psd, '$2b$10$UxWLThzfjT8nYlZH1iHrcuIZ0Xr2V6hKcLYW/F6PXwfTyUMOa15Wy', (err, result) => {
    console.log(result);
})