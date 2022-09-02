export default function ImportantMsg()
{
    comsole.log("welcome to my company");
}
export let message="this is module concept";

export let display=(name)=>
{
    return `$(name),welcome to Ingenuity Game !`;
}

export class Employee
{
    constructor(name,id,designation)
    {
        this.name=name;
        this.id=id;
        this.designation=designation;
    }
    dispDetails()
    {
        console.log(
            `Employee name:$(this.name)`
        );
    }
}