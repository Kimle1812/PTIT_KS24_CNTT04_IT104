var firstName = "nguyễn thị";
var lastName = "kim lệ";
function upperCase(str) {
    return str.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
}
firstName = upperCase(firstName);
lastName = upperCase(lastName);
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
