import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import Env from 'env';

// Enable environmental variables
dotenv.config();

export default class DBcomunication {
    // Define constructor with database connection
    constructor() {
        this.env = new Env();
        // console.log(env);
        // this.supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);
        // // Auth with a database
        // this.supabase.auth.signInWithPassword({
        //     email: env.EMAIL,
        //     password: env.PASSWORD
        // }).then(response => {
        //     this.token = response.data.session.access_token;
        //     this.refresh_token = response.session.refresh_token;
        // }).catch(err => {
        //     if(err) {
        //         console.error(`Error has occured while authorization process: ${err.message}`);
        //     }
        // })
    }
    // Define method to insert data into database
    signUp(pswd, email) {
        this.supabase.from('users').insert({
            login: email,
            password: pswd
        }).then(response => {
            console.log(response);
        })
    }
}