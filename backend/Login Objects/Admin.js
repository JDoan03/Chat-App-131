class Admin extends User{
    #first;
    #last;
    #email;
    #phone;

    constructor(username, password, first, last, email, phone){
        super(username, password);
        this.#first = first;
        this.#last = last;
        this.#email = email;
        this.#phone = phone;
    }

    CreateTeacher(username, password, first, last, email, phone){
        const teacher = new Teacher(username, password, first, last, email, phone)
    }

    CreateStudent(user, pass, first, last){
        const student = new Student(user, pass, first, last);
    }
    
    ResetPassword(newPass){
        super.setPassword = newPass;
    }

}