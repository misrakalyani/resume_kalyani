var bio = {
"name" : "Kalyani Misra",
"role" : "Web Developer",
"contacts" : {
"mobile" : "847-757-3818",
"email" : "kalyani_kiit@yahoo.com",
"github" : "misrakalyani",
"location" : "Mountain View, CA",
},
"welcomeMessage" : "Welcome to my page",
"skills" : [
 "Information security","HTML/CSS","Javascript","Wordpress"
 ],
"bioPic" : "images/me.JPG",
};
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);



$("#header").append(HTMLskillsStart);
 var formattedSkills = "";
 for(var i = 0; i < bio.skills.length; i++){
  formattedSkills += HTMLskills.replace("%data%", bio.skills[i]);
  }
$("#skills").append(formattedSkills);
$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

var education = {
 "schools":[
 {
 "name": "DePaul University",
 "location": "Chicago, IL",
 "degree": "MS",
 "majors": "Information Security",
 "dates": "2007-2009",
 "url": "http://www.depaul.edu/"
 },
 {
 "name": "Kalinga Institute of Industrial Technology",
 "location": "Bhubaneswar, India",
 "degree": "BTech",
 "majors": "Information Technology",
 "dates": "2002-2006",
 "url": "http://www.kiit.ac.in/"
 }

 ],
 "onlineCourses": [
 {
 "title": "Front End Web Development Nanodegree",
 "url" : "https://www.udacity.com/",
 "school": "Udacity",
 "dates": 2014,
 },
 {
 "title": "Programming Foundations with Python",
 "url" : "https://www.udacity.com/",
 "school": "Udacity",
 "dates": 2014,
 }
 ]
};

education.display = function() {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var SchName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchName = SchName.replace("#", education.schools[school].url);
  var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedSchNameDeg = formattedSchName + formattedSchDeg;
  $(".education-entry:last").append(formattedSchNameDeg);
  var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchLoc);
  var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchDates);
  var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
  $(".education-entry:last").append(formattedSchMaj);
 }
$(".education-entry:last").append(HTMLonlineClasses);

 for (Online in education.onlineCourses) {
  var OLTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[Online].title);
  var formattedOLTitle = OLTitle.replace("#", education.onlineCourses[Online].url);
  var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[Online].school);
  var formattedOLSchTitle = formattedOLTitle + formattedOLSchool;
  $(".education-entry:last").append(formattedOLSchTitle);
  var formattedOLDates = HTMLonlineDates.replace("%data%", education.onlineCourses[Online].dates);
  $(".education-entry:last").append(formattedOLDates);
  var formattedOLUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[Online].url);
  $(".education-entry:last").append(formattedOLUrl);
}
}
education.display();


var work = {
 "jobs": [
 {
 "employer": "SpiderOak",
 "location":"Mountain View, CA",
 "title": "Data Privacy Advocate",
 "dates": "Sept 2013-Jul 2014",
 "description": "Author of SpiderOak Privacy Post( https://spideroak.com/privacypost/). Written daily articles on cloud computing and security. Provided response and feedback to the readers comments/questions."

 },
 {
 "employer": "Blue Cross and Blue Shield",
 "location": "Chicago, IL",
 "title": "Application Developer",
 "dates": "Jan 2011-Oct 2011",
 "description": "Developed automated letters for business correspondence using Client Letter Application. Created new letters and updated existing letters using Object Oriented Programming Language. Actively involved in release support- resolving critical bugs in tight timeline, coordinating release meeting with QA and Business Analyst teams, tracking and managing production issues."

},
{
 "employer": "Tutor/Mentor Connection",
 "location": "Chicago, IL",
 "title": "Technology Support Engineer",
 "dates": "Jul 2010-Dec 2010",
 "description": "Used HTML, CSS and MySQL to create online applications. Maintained and upgraded layouts, visual effects and fonts for websites. Implemented website security tool like reCAPTCHA to prevent unauthorized access. "

}

 ]
};

work.display = function() {
for(job in work.jobs) {
 $("#workExperience").append(HTMLworkStart);
 var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
 var formattedEmployerTitle = formattedEmployer + formattedTitle;
 $(".work-entry:last").append(formattedEmployerTitle);
 var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
 $(".work-entry:last").append(formattedLocation);
 var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
 $(".work-entry:last").append(formattedDates);
 var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
 $(".work-entry:last").append(formattedDescription);
}
}
work.display();


var projects = {
 "projects":[
 {
 "title":"Mock up Website",
 "dates": 2014,
 "description":"A design mock up was provided in PDF-file. Used HTML and CSS to replicate the design mockup. Developed a responsive website with images and description. ",
 "images": [
 "images/mock.png"
 ]
 },
 {
 "title":"Interactive Resume",
 "dates": 2014,
 "description":"Developed an interactive resume using JavaScript and jQuery.",
 "images": [
 "images/resume.png"
 ]
 }
 ]
};
projects.display = function() {
for(project in projects.projects) {
 $("#projects").append(HTMLprojectStart);

var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
$(".project-entry:last").append(formattedTitle);
var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
$(".project-entry:last").append(formattedDates);
var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
$(".project-entry:last").append(formattedDescription);
 if (projects.projects[project].images.length > 0) {
 for (image in projects.projects[project].images) {
 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 $(".project-entry:last").append(formattedImage);
 }
 }
 }
 }
 projects.display();




 $("#mapDiv").append(googleMap);
