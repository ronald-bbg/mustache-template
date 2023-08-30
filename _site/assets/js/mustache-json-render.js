// JSON objects
let ronaldView = {
  id: "ronald-view",
  fellow_type: "sif",
  fellow_status: "current",
  img: "https://ca.slack-edge.com/T02EBFK0DRN-U05DPCV4945-d7f6040af781-72",
  alt: "Photo of Taylor Hooker",
  bio_name: "Ronald Ponferrada",
  title: "2023 Senior Innovation Fellow",
  job: "Health Systems Specialist",
  office: "VHA Office of Health Equity",
  project: "Empowering Innovation in Recreation Therapy",
  bio: "Ronald Ponferrada is a certified Recreation Therapist and Health Coach serving as a Health Systems Specialist for Veterans Healthcare Administration (VHA) Office of Health Equity in VA Central Office (VACO)."
};

let willView = {
  id: "will-view",
  fellow_type: "eir",
  fellow_status: "alumni",
  img: "https://ca.slack-edge.com/T02EBFK0DRN-U056K07DFFY-797e0c0c21af-192",
  alt: "Photo of Taylor Hooker",
  bio_name: "Will Elder",
  title: "2023 Entrepreneur in Residence",
  job: "Health Systems Specialist",
  office: "VHA Office of Health Equity",
  project: "Empowering Innovation in Recreation Therapy",
  bio: "Will Elder is a certified Recreation Therapist and Health Coach serving as a Health Systems Specialist for Veterans Healthcare Administration (VHA) Office of Health Equity in VA Central Office (VACO)."
};

let jimView = {
  id: "jim-view",
  fellow_type: "eir",
  fellow_status: "alumni",
  img: "https://ca.slack-edge.com/T02EBFK0DRN-U049YSAQSJ1-g734f0e766a3-192",
  alt: "Photo of Taylor Hooker",
  bio_name: "Jim Strommer",
  title: "2023 Entrepreneur in Residence",
  job: "Health Systems Specialist",
  office: "VHA Office of Health Equity",
  project: "Empowering Innovation in Recreation Therapy",
  bio: "Jim Strommer is a certified Recreation Therapist and Health Coach serving as a Health Systems Specialist for Veterans Healthcare Administration (VHA) Office of Health Equity in VA Central Office (VACO)."
};


// Output variables
var tab;
var img;
var alt;
var bio_name;
var title;
var job;
var office;
var project;
var bio;


// Output mustache js logic
if (window.location.href.indexOf("will-elder") > -1) {

  tab = Mustache.render("{{bio_name}}", willView);
  img = Mustache.render("{{{img}}}", willView);
  alt = Mustache.render("{{alt}}", willView);
  bio_name = Mustache.render("{{bio_name}}", willView);
  title = Mustache.render("{{title}}", willView);
  job = Mustache.render("{{job}}", willView);
  office = Mustache.render("{{office}}", willView);
  project = Mustache.render("Project: {{project}}", willView);
  bio = Mustache.render("{{{bio}}}", willView);

} else if (window.location.href.indexOf("jim-strommer") > -1) {

  tab = Mustache.render("{{bio_name}}", jimView);
  img = Mustache.render("{{{img}}}", jimView);
  alt = Mustache.render("{{alt}}", jimView);
  bio_name = Mustache.render("{{bio_name}}", jimView);
  title = Mustache.render("{{title}}", jimView);
  job = Mustache.render("{{job}}", jimView);
  office = Mustache.render("{{office}}", jimView);
  project = Mustache.render("Project: {{project}}", jimView);
  bio = Mustache.render("{{{bio}}}", jimView);

} else if (window.location.href.indexOf("ronald-ponferrada") > -1) {

  tab = Mustache.render("{{bio_name}}", ronaldView);
  img = Mustache.render("{{{img}}}", ronaldView);
  alt = Mustache.render("{{alt}}", ronaldView);
  bio_name = Mustache.render("{{bio_name}}", ronaldView);
  title = Mustache.render("{{title}}", ronaldView);
  job = Mustache.render("{{job}}", ronaldView);
  office = Mustache.render("{{office}}", ronaldView);
  project = Mustache.render("Project: {{project}}", ronaldView);
  bio = Mustache.render("{{{bio}}}", ronaldView);

} 


// Render json data dynamically
$('head title').text(tab);
$('.bio-card > img').attr("src", img);
$('.bio-card > img').attr("alt", alt);
$('.bio-card-attributes > h1').text(bio_name);
$('.bio-card-attributes > h3').text(title);
$('.bio-card-attributes > h4.job').text(job);
$('.bio-card-attributes > h4.office').text(office);
$('.bio-card-description > h4.project').text(project);
$('.bio-card-description > p.bio').text(bio);


// Render dynamic carousel for CURRENT fellows
var currentFellowsArray = new Array(willView, jimView, ronaldView);
var newCurrentFellowsArray = [];

for (var i = 0; i < currentFellowsArray.length; i++) {
  if (currentFellowsArray[i].fellow_status == "current") {
    newCurrentFellowsArray.push(currentFellowsArray[i]);
    console.log(newCurrentFellowsArray);
  }
}

var currentData = {
  data: []
};

currentData.data.push(newCurrentFellowsArray);  

currentData.data[0].forEach(current => $('.current--fellows').append("<div class='usa-card__container item grid-col-12 tablet:grid-col-3 tablet-lg:grid-col-3'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class=''>" + "<img src='" + current.img + "'alt='" + current.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h4>" + current.title + "</h4>" + "<p>" + current.bio + "</p>" + "</div>" + "</div>")); 


// Render dynamic carousel for ALUMNI fellows
var alumniFellowsArray = new Array(willView, jimView, ronaldView);
var newAlumniFellowsArray = [];

for (var i = 0; i < alumniFellowsArray.length; i++) {
  if (alumniFellowsArray[i].fellow_status == "alumni" && alumniFellowsArray[i].fellow_type == "eir") {
    newAlumniFellowsArray.push(alumniFellowsArray[i]);
    console.log(newAlumniFellowsArray);
  }
}

var alumniData = {
  data: []
};
  
alumniData.data.push(newAlumniFellowsArray);  

alumniData.data[0].forEach(alumni => $('.alumni--fellows').append("<div class='usa-card__container item grid-col-12 tablet:grid-col-3 tablet-lg:grid-col-3'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class=''>" + "<img src='" + alumni.img + "'alt='" + alumni.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h4>" + alumni.title + "</h4>" + "<p>" + alumni.bio + "</p>" + "</div>" + "</div>")); 