enum Role {ADMIN,READ_ONLY,AUTHOR}

const person 
//  :{person_name: string, 
//    age: number,
//    hobbies:string[],
//    role:[number,string]
//  } 
= 
{
  person_name:'ashish',
  age:30,
  hobbies:["walking", "learning"],
  role:Role.ADMIN  //tuple
};



let favActivity:string[];
console.log(person.person_name+ " is " + person.age + " years old");

//person.role.push('admin');

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN){

console.log("current role is "+person.role[1]);
}