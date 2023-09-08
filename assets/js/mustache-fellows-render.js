// JSON objects
let ronaldView = {
  id: "ronald-ponferrada",
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
  id: "will-elder",
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
  id: "jim-strommer",
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


// Mustache render logic for individual page views | ?user="firstname-lastname"
var fellowsArray = new Array(ronaldView, willView, jimView);

var tab;
var img;
var alt;
var bio_name;
var title;
var job;
var office;
var project;
var bio;

for (var i = 0; i < fellowsArray.length; i++) {
  var userIndex = fellowsArray[i].id;
  if (window.location.href.indexOf(userIndex) > -1) {

    var objectView = fellowsArray[i];

    tab = Mustache.render("{{bio_name}}", objectView);
    img = Mustache.render("{{{img}}}", objectView);
    alt = Mustache.render("{{alt}}", objectView);
    bio_name = Mustache.render("{{bio_name}}", objectView);
    title = Mustache.render("{{title}}", objectView);
    job = Mustache.render("{{job}}", objectView);
    office = Mustache.render("{{office}}", objectView);
    project = Mustache.render("Project: {{project}}", objectView);
    bio = Mustache.render("{{{bio}}}", objectView);

  }
}


// Append json data to html elements
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
var currentFellowsArray = fellowsArray;
var newCurrentFellowsArray = [];

for (var i = 0; i < currentFellowsArray.length; i++) {
  if (currentFellowsArray[i].fellow_status == "current") {
    newCurrentFellowsArray.push(currentFellowsArray[i]);
    // console.log(newCurrentFellowsArray);
  }
}

var currentData = {
  data: []
};

currentData.data.push(newCurrentFellowsArray);  

currentData.data[0].forEach(current => $('.current--fellows').append("<div class='grid-col-12 tablet:grid-col-3 tablet-lg:grid-col-3'>" + "<a href=/fellow/index.html?user=" + current.id + " />" + "<div class='usa-card__container item'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class=''>" + "<img src='" + current.img + "'alt='" + current.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h4>" + current.title + "</h4>" + "<p>" + current.bio + "</p>" + "</div>" + "</div>" + "</a>" + "</div>")); 


// Render dynamic carousel for ALUMNI fellows
var alumniFellowsArray = fellowsArray;
var newAlumniFellowsArray = [];

for (var i = 0; i < alumniFellowsArray.length; i++) {
  if (alumniFellowsArray[i].fellow_status == "alumni" && alumniFellowsArray[i].fellow_type == "eir") {
    newAlumniFellowsArray.push(alumniFellowsArray[i]);
    // console.log(newAlumniFellowsArray);
  }
}

var alumniData = {
  data: []
};
  
alumniData.data.push(newAlumniFellowsArray);  

alumniData.data[0].forEach(alumni => $('.alumni--fellows').append("<div class='grid-col-12 tablet:grid-col-3 tablet-lg:grid-col-3'>" + "<a href=/fellow/index.html?user=" + alumni.id + " />" + "<div class='usa-card__container item'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class=''>" + "<img src='" + alumni.img + "'alt='" + alumni.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h4>" + alumni.title + "</h4>" + "<p>" + alumni.bio + "</p>" + "</div>" + "</div>" + "</a>" + "</div>")); 


