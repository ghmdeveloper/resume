var bio = {
	"name": 	"Gustavo Mota",
	"role": 	"Web Developer",
	"contacts":{
		"mobile": 		"999-999-999",
		"email": 		"ghmdeveloper@gmail.com",
		"github": 		"ghmdeveloper",
		"twitter": 		"@ghmdeveloper",
		"location": 	"Minas Gerais"
	},
	"biopic": 				"images/gustavo.jpg",
	"welcomeMessage": 		"Seja bem vindo",
	"skills":
	[
		"HTML",
		"CSS",
		"JavaScript",
	]
}
bio.display = function() {
	var formatedrole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formatedrole);

	var formatedname = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formatedname);

	var formatedpic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formatedpic);

	var formatedwelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formatedwelcomemsg + HTMLskillsStart);

	for (skill in bio.skills){
		var formatedskills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formatedskills);
	};
}
bio.display();

bio.contacts.display = function(){
	var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formatedmobile);

	var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formatedemail);

	var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formatedgithub);

	var formatedtwitter =  HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formatedtwitter);

	var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formatedlocation);

	$("#footerContacts").append(formatedmobile + formatedemail + formatedgithub + formatedtwitter + formatedlocation);
}

bio.contacts.display();

var work = {
	"jobs":
	[{

		"employer": 	"Universidade UNIPAC",
		"title": 		"Técnico em Informatica",
		"location": 	"Minas Gerais, Brasil",
		"inidate": 		"Ago 2008 ",
		"enddate": 		" Atuando",
		"description": 	"Técnico em Informática é o profissional que está apto a realizar configurações de sistemas, a instalar equipamentos e a verificar as causas de falhas na programação de computadores."	

	}]
};

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formatedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formatedtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formatedemployer+formatedtitle);

		var formatedworklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formatedworklocation);

		var formatedworkdate = HTMLworkDates.replace("%data%", work.jobs[job].inidate+"-"+work.jobs[job].enddate);
		$(".work-entry:last").append(formatedworkdate);

		var formatedworkdesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formatedworkdesc);

	}
}
work.display();

var projects = {
	"project":
	[{
		"title" : "Projeto Responsivo",
		"dates" : "2017",
		"description": "Projeto de um portifolio responsivo ensinado no nanodegree front-end",
		"img" : "images/projeto.jpg"
	}]
};

projects.display = function(){
	for(project in projects.project){
		$("#projects").append(HTMLprojectStart);

		var formatedprojtitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		$(".project-entry:last").append(formatedprojtitle);

		var formatedprojdate = HTMLprojectDates.replace("%data%", projects.project[project].dates);
		$(".project-entry:last").append(formatedprojdate);

		var formatedprojdesc = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		$(".project-entry:last").append(formatedprojdesc);

		var formatedprojimg = HTMLprojectImage.replace("%data%", projects.project[project].img);
		$(".project-entry:last").append(formatedprojimg);
	}
}
projects.display()

var education = {
	"schools":
	[{
		"name": "Centro Técnico Somart",
		"location": "Santa Bárbara, Minas Gerais, Brasil",
		"degree": "TEC",
		"date":"Fevereiro 2012 - Março 2014 ",
		"major": "Técnico em Informática",
		"url": "https://http://www.somarti.com/"
	}],

	"online":
	[{
		"title" : "Front End Developer",
		"school" : "UDACITY",
		"date" : "Atuando",
		"url" : "https://www.udacity.com"
	}]
};

education.display = function (){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formatedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formatedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formatedschoolname + formatedschooldegree);

		var formatedschooldate = HTMLschoolDates.replace("%data%", education.schools[school].date);
		$(".education-entry:last").append(formatedschooldate);

		var formatedschoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formatedschoollocation);

		var formatedschoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formatedschoolmajor);

	}
};
education.display();

education.online.display= function() {
	$(".education-entry").append(HTMLonlineClasses);
	for(onlinec in education.online) {
		var formatedonlinetitle = HTMLonlineTitle.replace("%data%", education.online[onlinec].title);
		var formatedonlineschool = HTMLonlineSchool.replace("%data%", education.online[onlinec].school);
		$(".education-entry").append(formatedonlinetitle+formatedonlineschool);

		var formatedonlinedate = HTMLonlineDates.replace("%data%", education.online[onlinec].date);
		$(".education-entry").append(formatedonlinedate);

		var formatedonlineurl = HTMLonlineURL.replace("%data%", education.online[onlinec].url);
		$(".education-entry").append(formatedonlineurl);
	}
};
education.online.display();
$("#mapDiv").append(googleMap);
