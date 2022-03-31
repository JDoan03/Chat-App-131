class User{
    //private variables
    #username;
    #password;
    #key; //will generate a random encryption key for user

    constructor(username, password){
        this.#username = username;
        this.#password = password;
        //key = //will be a randomly generated decryption key
    }

    //getters
    get UserName(){
        return this.#username;
    }

    get Password(){
        return this.#password;
    }

    get key(){
        return this.#key;
    }

    //setters
    set UserName(username){
        this.#username = username;
    }

    set password(password){
        this.#password = password;
    }

    //method will change in the future after creating encryption/decryption of passwords
    Login(user,pass){
        return (username == user && password == pass) ? true : false;
    }

    Upload(){
        //will upload user's data to database, need to add password encryption and decryption
    }
}