//ES6
//CLASS || BLUEPRINT
class Training{
    //CONSTRUCTOR
    constructor(trainingName,trainingDuration,trainingStatus)
    {
        this.trainingName=trainingName;
        this.trainingDuration=this.trainingDuration;
        this.trainingStatus=this.trainingStatus;
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
