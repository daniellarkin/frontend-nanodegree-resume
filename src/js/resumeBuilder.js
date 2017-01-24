var name = "Daniel Larkin";
var formattedName = HTMLheaderName.replace("%data%",name);

var role = "Front End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
