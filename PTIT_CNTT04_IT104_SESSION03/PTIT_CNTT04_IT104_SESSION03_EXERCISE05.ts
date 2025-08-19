let firstName: string = "nguyễn thị";
let lastName: string = "kim lệ";

function upperCase(str: string): string {
  return str.split(" ").map(word =>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");  
}

firstName = upperCase(firstName);
lastName = upperCase(lastName);

let fullName: string = `${firstName} ${lastName}`;

console.log(fullName);
