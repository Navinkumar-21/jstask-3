//objects in js
//1.A JavaScript object is a collection of named values and the structure is like key and value pairs 
const student ={
    name:"Navin",
    Age:"22",
    Rollno:"24",
    batch:"cse",
    batch:"cse123"
}
console.log(student);

const myCar = {
    Company: 'ford',
    Model: 'mustang',
    Year:1989
};
console.log("company Name : "+myCar.Company);
console.log("year : "+myCar.Year);
console.log(myCar);
myCar["color"] = "Red"
console.log( myCar);
const students ={
    name:"Navin",
    Age:22,
    course:"cse",
    contact:885223211
}
console.log(Object.keys(students));

const Student = {
    firstName: 'john',
    
    lastName:'doe',
    
    profession: 'software Engineer',
    
    skills: ["java","js"," NodeJS"," mongo DB", "ReactJs"]
 };
 console.log("full name : "+Student.firstName+Student.lastName)
 console.log("two skills : "+Student.skills[0]+","+Student.skills[1]);
 console.log(Object.keys(Student).length);
//  console.log(Object.keys(skills).length);
console.log(Object.keys(Student));
console.log(Object.values(Student));
const student1=Object.create(Student);
student1.firstName='navin';
student1.lastName='kumar';
student1.profession='information technology';
student1.skill=["C++","python","c","java"]
console.log(student1);


const std1 = {};
const std = Object.create(std1);
std["firatName"]="Navin";
console.log(std)













               