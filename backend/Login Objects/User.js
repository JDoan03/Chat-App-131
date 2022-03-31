/**
 * User is a generic object class that other sub classes
 * inherit from. This object has getters and setters, a
 * login method, and a upload method. All field values are 
 * private.
 * @author Jason Yu
 */
class User{
    //private variables
    #username;
    #password;
    #key; //will generate a random encryption key for user

    /**
     * Regular Constructor for the User object. 
     * @param {*} username 
     * @param {*} password 
     */
    constructor(username, password){
        this.#username = username;
        this.#password = password;
        //key = //will be a randomly generated decryption key
    }

    /**
     * Getter for the username field value.
     */
    get UserName(){
        return this.#username;
    }

    /**
     * Getter for the password field value.
     */
    get Password(){
        return this.#password;
    }

    /**
     * Getter for the key field value.
     */
    get key(){
        return this.#key;
    }

    /**
     * Setter for the username field value.
     */
    set UserName(username){
        this.#username = username;
    }

    /**
     * Setter for the password field value.
     */
    set password(password){
        this.#password = password;
    }

    
    /**
     * method will change in the future after creating encryption/decryption of passwords.
     * @param {*} user 
     * @param {*} pass 
     * @returns 
     */
    Login(user,pass){
        return (username == user && password == pass) ? true : false;
    }

    /**
     * will upload user's data to database, need to add password encryption and decryption.
     */
    Upload(){
        
    }
}