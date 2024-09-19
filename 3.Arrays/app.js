var person = {
    person_name: 'ashish',
    age: 30,
    hobbies: ["walking", "learning"],
    role: [2, "author"] //tuple
};
var favActivity;
console.log(person.person_name + " is " + person.age + " years old");
person.role.push('admin');
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log("current role is " + person.role[1]);
