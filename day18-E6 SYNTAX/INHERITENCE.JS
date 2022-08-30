//ES6
//CLASS || BLUEPRINT
class Training{
    //CONSTRUCTOR
    constructor(A,B,C="online")
    {
        this.trainingName=A;
        this.trainingDuration=B;
        this.trainingStatus=C;
    }
    //MEMBER FUNCTION
    displayDetails()
    {
        return `Training Name:${this.trainingName}\n Training Duartion: ${this. 
        traingDuration}\n Training Status: ${this.trainingStatus}`;
    }
    
}
//OBJECTS CREATION
let IngenuityGaming=new Training("DEVELOPMENT BASICS",120,"OFFLINE");
let DELL=new Training("DEVELOPMENT BASICS",120,"OFFLINE");
//METHOD CALLING
console.log(IngenuityGaming.displayDetails());
console.log(DELL.displayDetails());

class InCampus extends Trsaining
{
    constructor(a,b,c,d)
    {
        super(a,b,c);
        this.rollno=d;
    }
    //functrion overridng
    displayDetails()
    {
        console.log(`RollNo:$(this.rollno)`);
        super.displayDetails();
    }
}
let stu1=new InCampus("fluter",40,"online",1011);
stu1.displayDetails();