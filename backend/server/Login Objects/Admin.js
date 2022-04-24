/**
 * The Admin class is a subclass of the User class. 
 * The Admin object will inherit all of the User objects 
 * methods, while also having unique capablities on creating
 * student and teacher objects. Lastly, the Admin object will have
 * the ability to reset passwords. 
 * @author Jason Yu
 */
class Admin extends User{
    #first;
    #last;
    #email;
    #phone;

    /**
     * Regular Constructor for the admin object.  
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
     * The CreateTeacher method will allow the Admin user to create teacher 
     * users. 
     * @param {*} username 
     * @param {*} password 
     * @param {*} first 
     * @param {*} last 
     * @param {*} email 
     * @param {*} phone 
     */
    CreateTeacher(username, password, first, last, email, phone){
        const teacher = new Teacher(username, password, first, last, email, phone)
    }

    /**
     * The CreateStudent method will allow the Admin user to create student 
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
     * The Admin object has the ability to reset their own password. 
     * @param {*} newPass 
     */
    ResetPassword(newPass){
        super.setPassword = newPass;
    }

}