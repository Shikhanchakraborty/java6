class Parents{
    constructor(){
        this.fatherName= "Shibu Chakraborty"
    }
}

class Student extends Parents{
    constructor(name,id){
        super();
        this.name = name;
        this.id = id;
    }
}
const student = new Student("shikhan",13)
console.log(student)