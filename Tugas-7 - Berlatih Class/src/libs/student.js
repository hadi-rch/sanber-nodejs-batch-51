class Student {     
    constructor(Name) {
        this._name = Name         
    }
    get Name(){
        return this._name;
    }

    set Name(inputName){
        this._name = inputName 
    }
}

export default Student;