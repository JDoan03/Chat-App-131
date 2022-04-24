/**
 * The Teacher class is a sub class of the User class.
 * Teacher objects inherit all of the Users methods while
 * also having the ability to create Student objects and 
 * having the ability to reset their own password. 
 * @author Jason Yu
 */
class Teacher extends User{
    #first;
    #last;
    #email;
    #phone;
    
    /**
     * Regular Constructor for the Teacher object. 
     * @param {*} username 
     * @param {*} password 
     * @param {*} first 
     * @param {*} last 
     * @param {*} email 
     * @param {*} phone 
     */
    constructor(username, password, first, last, email, phone){
        super(username, password);
        this.#first = first;
        this.#last = last;
        this.#email = email;
        this.#phone = phone;
    }
    /**
     * The CreateStudent method will allow the Teacher user to create student 
     * users.
     * @param {*} user 
     * @param {*} pass 
     * @param {*} first 
     * @param {*} last 
     */
    CreateStudent(user, pass, first, last){
        const student = new Student(user, pass, first, last);
    }
    
    /**
     * The Teacher object has the ability to reset their own password.
     * @param {*} newPass 
     */
    ResetPassword(newPass){
        super.setPassword = newPass;
    }
}