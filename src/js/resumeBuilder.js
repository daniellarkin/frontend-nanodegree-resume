var bio = {
    name : "Daniel Larkin",
    role : "Front end Web Developer",
    contacts : {
	mobile  : "+44123456789",
	email   : "daniel.larkin@gmail.com",
	github  : "daniellarkin",
	twitter : "@daniellarkin",
	location:  "Nottingham, UK"
    },
    welcomeMessage : "I skate to where the puck is going to be, not where it has been",
    skills : ['VHDL', 'Verilog', 'ASIC', 'FPGA'],
    biopic : "img/profile_pic.jpg",
    display : function(){
	$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));         
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));         
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
	$("#header").append(HTMLskillsStart);    

	for(var i=0; i < bio.skills.length; i++) {
	    $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));         
	}
    },
    display_footer_contact : function(){    
	$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));         
	$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
    }
};



var education = {
    schools:  [
	{
	    "name": "Dublin City University",
	    "location": "Dublin, Ireland",
	    "degree": "PhD",
	    "majors": ["Electronic Engineering","Low Power design", "FPGA", "Video Compression"],
	    "dates": "1/10/2002-01/03/2007",
	    "url": "http://www.dcu.ie",
	},
	{
	    "name": "National Univiersity of Ireland",
	    "location": "Galway, Ireland",
	    "degree": "Bachelor of Engineering",
	    "majors": ["Electronic Engineering"],
	    "dates": "1/09/1996-30/05/2000",
	    "url": "http://www.nuigalway.ie",
	}
    ],
    onlineCourses: [
	{
	    "title": "Front End Developer Nanodegree",
	    "school": "Udacity",
	    "dates": "01/12/2016-current",
	    "url": "http://www.udacity.com",
	}
    ],
    display : function(){

	$("#education").append(HTMLschoolStart);
	for (var i=0;i<education.schools.length;i++){
	    var formattedSchoolName     = HTMLschoolName.replace("%data%", education.schools[i].name);	
	    var formattedSchoolDegree   = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
	    var formattedSchoolDates    = HTMLschoolDates.replace("%data%", education.schools[i].dates);
	    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);	
	    var formattedSchoolMajor    = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

	    $(".education-entry").append(formattedSchoolName.concat(formattedSchoolDegree));
	    $(".education-entry").append(formattedSchoolDates);
	    $(".education-entry").append(formattedSchoolLocation);
	    $(".education-entry").append(formattedSchoolMajor);	
	}
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for (var i=0;i<education.onlineCourses.length;i++){
	    var formattedOnlineTitle  = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);	
	    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
	    var formattedOnlineDates  = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
	    var formattedOnlineURL    = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

	    $(".education-entry").append(formattedOnlineTitle.concat(formattedOnlineSchool));
	    $(".education-entry").append(formattedOnlineDates);
	    $(".education-entry").append(formattedOnlineURL);
	}
    }
};

work = {
  "jobs" : [
      {
	  employer: "ARM",
	  title: "Director of Hardware Engineering",
	  location: "Loughborough, UK",
	  dates: "May 2016 - Current",
	  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
	  employer: "Apical Ltd",
	  title: "Head of Hardware Engineering",
	  location: "Loughborough, UK",
	  dates: "July 2015 - April 2016",
	  description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
      },
      {
	  employer: "Apical Ltd",
	  title: "Head of Camera Research",
	  location: "Loughborough, UK",
	  dates: "Jan 2014 - June 2015",
	  description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
      },
      {
	  employer: "Apical Ltd",
	  title: "Senior Hardware Engineer",
	  location: "Loughborough, UK",
	  dates: "June 2010 - Dec 2013",
	  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      },
      {
	  employer: "Analog Device",
	  title: "Hardware Engineer",
	  location: "Limerick, Ireland",
	  dates: "Apr 2007 - May 2010",
	  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      }
  ],
    display : function(){
	$("#workExperience").append(HTMLworkStart);
	for (var i=0;i<work.jobs.length;i++){
	    var formattedWorkEmployer    = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);	
	    var formattedWorkTitle       = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	    var formattedWorkDates       = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	    var formattedWorkLocation    = HTMLworkLocation.replace("%data%", work.jobs[i].location);	
	    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	    
	    $(".work-entry").append(formattedWorkEmployer.concat(formattedWorkTitle));
	    $(".work-entry").append(formattedWorkDates);
	    $(".work-entry").append(formattedWorkLocation);
	    $(".work-entry").append(formattedWorkDescription);	
	}
    }
};


projects = {
    "proj" : [
	{
	    "title": "Super-duber Megatron",
	    "dates": "1/1/2000-1/1/2001",
	    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
	    "images": ["img/AdobeStock_32535416_256.jpeg"]	    
	}
    ],
    display : function(){
	$("#projects").append(HTMLprojectStart);
	for (var i=0;i<projects.proj.length;i++){
	    var formattedProjectsTitle       = HTMLprojectTitle.replace("%data%", projects.proj[i].title);
	    var formattedProjectsDates       = HTMLprojectDates.replace("%data%", projects.proj[i].dates);
	    var formattedProjectsDescription = HTMLprojectDescription.replace("%data%", projects.proj[i].description);	
	    var formattedProjectsImage       = HTMLprojectImage.replace("%data%", projects.proj[i].images);

	    $(".project-entry").append(formattedProjectsTitle);
	    $(".project-entry").append(formattedProjectsDates);
	    $(".project-entry").append(formattedProjectsDescription);
	    $(".project-entry").append(formattedProjectsImage);	
	}
    }
};


//-------------------------------------------------------------------------------------------
// Create Resume
//-------------------------------------------------------------------------------------------
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
bio.display_footer_contact();
//-------------------------------------------------------------------------------------------

 
