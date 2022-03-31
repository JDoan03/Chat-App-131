class Student extends User{
    #first;
    #last;
    
    constructor(username, password, first, last){
        super(username, password);
        this.#first = first;
        this.#last = last;
    }
}