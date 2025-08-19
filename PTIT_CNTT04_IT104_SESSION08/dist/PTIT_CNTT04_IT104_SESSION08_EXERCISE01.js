var weekDays;
(function (weekDays) {
    weekDays["monday"] = "Th\u1EE9 Hai";
    weekDays["tuesday"] = "Th\u1EE9 Ba";
    weekDays["wednesday"] = "Th\u1EE9 T\u01B0";
    weekDays["thursday"] = "Th\u1EE9 N\u0103m";
    weekDays["friday"] = "Th\u1EE9 S\u00E1u";
    weekDays["saturday"] = "Th\u1EE9 B\u1EA3y";
    weekDays["sunday"] = "Ch\u1EE7 Nh\u1EADt";
})(weekDays || (weekDays = {}));
Object.values(weekDays).forEach(day => console.log(day));
