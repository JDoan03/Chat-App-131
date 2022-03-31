/**
 * The student class is a sub class of the User class.
 * The Student object does not have any unqiue methods 
 * and will be overseen by a Teacher user.
 * @author Jason Yu
 */
class Student extends User{
    #first;
    #last;
    
    /**
     * Regular Constructor for the Student object.
     * @param {*} username 
     * @param {*} password 
     * @param {*} first 
     * @param {*} last 
     */
    constructor(username, password, first, last){
        super(username, password);
        this.#first = first;
        this.#last = last;
    }
}