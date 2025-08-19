interface Student {
    name: string;
    age: number;
    email: string;
}
let student1: Student ={
    name:"Nguyen Thi Kim Le",
    age: 22,
    email: "nhokndcjscjszd@gmail.com"
};
function printInfo(student1: Student): void {
    console.log(`Ten toi la ${student1.name}, toi ${student1.age} tuoi va email cua toi la ${student1.email}`);
}
printInfo(student1);