import Kelas from "./kelas"

class Bootcamp {     
    constructor(Name) {
        this._name = Name         
        this._classes = []
    }

    get Name(){
        return this._name;
    }

    set Name(Name){
        this._name = Name 
    }

    get classes(){
        return this._classes
    }

    createClass(NameClass, level, instructor){
        let newClass = new Kelas(NameClass, level, instructor)
        this._classes.push(newClass)
    }

    register(kelas, newStud){
        let findClass = this._classes.find((clas) => clas.NameClass == kelas)
        findClass.addStudent(newStud)
    }
    
}


export default Bootcamp;