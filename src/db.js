import { createClient } from '@supabase/supabase-js';

export default class DBcomunication {
    // Define constructor with database connection
    constructor() {
        this.supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
        // Auth with a database
        this.supabase.auth.signInWithPassword({
            email: process.env.EMAIL,
            password: process.env.PASSWORD
        }).then(response => {
            this.token = response.data.session.access_token;
            this.refresh_token = response.data.session.refresh_token;
        }).catch(err => {
            if(err) {
                console.error(`Error has occured while authorization process: ${err.message}`);
            }
        })
    }
    // Define method to insert data into database
    async signUp(pswd, email) {
        return await this.supabase.from('users').insert({
            login: email,
            password: pswd
        });
    }

    async LogIn(email) {
        return await this.supabase.from('users').select('password').eq('login', email).limit(1);
    }
}