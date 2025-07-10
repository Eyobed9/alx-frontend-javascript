/// <reference path="subjects/Teacher.ts"/>
/// <reference path="subjects/Subject.ts"/>
/// <reference path="subjects/Cpp.ts"/>
/// <reference path="subjects/React.ts"/>
/// <reference path="subjects/Java.ts"/>

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
	firstName: "Helen",
	lastName: "GoodMan",
	experienceTeachingC: 10,
};

// Testing cpp
cpp.setTeacher(cTeacher);
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Testing java
java.setTeacher(cTeacher);
console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Testing react
react.setTeacher(cTeacher);
console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
