// JSON objects
let homeView = {
  img: "assets/images/taylor_hooker.jpg",
  alt: "Photo of Taylor Hooker",
  bio_name: "Taylor Hooker, M.S., CTRS, NBC-HWC",
  title: "2023 Entrepreneur in Residence",
  job: "Health Systems Specialist",
  office: "VHA Office of Health Equity",
  project: "Empowering Innovation in Recreation Therapy",
  bio: "Taylor Hooker is a certified Recreation Therapist and Health Coach serving as a Health Systems Specialist for Veterans Healthcare Administration (VHA) Office of Health Equity in VA Central Office (VACO). Taylor is a 4th-year doctoral student whose studies center on nonpharmacological approaches to Veterans' lifelong health and wellness. Empowering Innovation in Recreation Therapy supports the formation of an integrative research, mentorship, evidence-based practice and dissemination program beginning at a regional, and eventually national, footprint to support the advancement of RT service provision at VHA. Through partnership with academic allies, various VHA medical centers and VACO program offices, this robust quality improvement project will lead to improved patient care, clinician & client satisfaction and increased evidence-based practice."
};

let willView = {
  img: "https://ca.slack-edge.com/T02EBFK0DRN-U056K07DFFY-797e0c0c21af-192",
  alt: "Photo of Taylor Hooker",
  bio_name: "Will Elder",
  title: "2023 Entrepreneur in Residence",
  job: "Health Systems Specialist",
  office: "VHA Office of Health Equity",
  project: "Empowering Innovation in Recreation Therapy",
  bio: "Taylor Hooker is a certified Recreation Therapist and Health Coach serving as a Health Systems Specialist for Veterans Healthcare Administration (VHA) Office of Health Equity in VA Central Office (VACO). Taylor is a 4th-year doctoral student whose studies center on nonpharmacological approaches to Veterans' lifelong health and wellness. Empowering Innovation in Recreation Therapy supports the formation of an integrative research, mentorship, evidence-based practice and dissemination program beginning at a regional, and eventually national, footprint to support the advancement of RT service provision at VHA. Through partnership with academic allies, various VHA medical centers and VACO program offices, this robust quality improvement project will lead to improved patient care, clinician & client satisfaction and increased evidence-based practice."
};

let jimView = {
  img: "https://ca.slack-edge.com/T02EBFK0DRN-U049YSAQSJ1-g734f0e766a3-192",
  alt: "Photo of Taylor Hooker",
  bio_name: "Jim Strommer",
  title: "2023 Entrepreneur in Residence",
  job: "Health Systems Specialist",
  office: "VHA Office of Health Equity",
  project: "Empowering Innovation in Recreation Therapy",
  bio: "Taylor Hooker is a certified Recreation Therapist and Health Coach serving as a Health Systems Specialist for Veterans Healthcare Administration (VHA) Office of Health Equity in VA Central Office (VACO). Taylor is a 4th-year doctoral student whose studies center on nonpharmacological approaches to Veterans' lifelong health and wellness. Empowering Innovation in Recreation Therapy supports the formation of an integrative research, mentorship, evidence-based practice and dissemination program beginning at a regional, and eventually national, footprint to support the advancement of RT service provision at VHA. Through partnership with academic allies, various VHA medical centers and VACO program offices, this robust quality improvement project will lead to improved patient care, clinician & client satisfaction and increased evidence-based practice."
};


// Output variables
var tab;
var bio_name;
var job;
var office;
var project;
var title;
var img;
var alt;


// Output logic
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

} else {

  tab = Mustache.render("{{bio_name}}", homeView);
  img = Mustache.render("{{{img}}}", homeView);
  alt = Mustache.render("{{alt}}", homeView);
  bio_name = Mustache.render("{{bio_name}}", homeView);
  title = Mustache.render("{{title}}", homeView);
  job = Mustache.render("{{job}}", homeView);
  office = Mustache.render("{{office}}", homeView);
  project = Mustache.render("Project: {{project}}", homeView);
  bio = Mustache.render("{{{bio}}}", homeView);

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