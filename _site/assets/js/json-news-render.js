var newsData = {

    "data": [
        {
            "id1": "will-elder",
            "img": "https://www.innovation.va.gov/ecosystem/assets/images/IE/news-events/neFellowship-Img53-THooker_DifferencesInDisabilities.jpg",
            "title": "ALO1 Cultural Foundation: COVID-19 Hero Awards",
            "url": "https://covid19heroawards.com/project/taylor-hooker-a-recreation-therapist/",
            "description": "The inaugural 2020 COVID-19 Hero Awards are a small gesture to honor the hard work of everyone fighting this pandemic."
        },
        {
            "id1": "will-elder",
            "id2": "jim-strommer",
            "img": "https://www.innovation.va.gov/ecosystem/assets/images/IE/news-events/neFellowship-Img53-THooker_DifferencesInDisabilities.jpg",
            "title": "ALO2 Cultural Foundation: COVID-19 Hero Awards",
            "url": "https://covid19heroawards.com/project/taylor-hooker-a-recreation-therapist/",
            "description": "The inaugural 2020 COVID-19 Hero Awards are a small gesture to honor the hard work of everyone fighting this pandemic."
        },
        {
            "id1": "will-elder",
            "img": "https://www.innovation.va.gov/ecosystem/assets/images/IE/news-events/neFellowship-Img53-THooker_DifferencesInDisabilities.jpg",
            "title": "ALO3 Cultural Foundation: COVID-19 Hero Awards",
            "url": "https://covid19heroawards.com/project/taylor-hooker-a-recreation-therapist/",
            "description": "The inaugural 2020 COVID-19 Hero Awards are a small gesture to honor the hard work of everyone fighting this pandemic."
        },
        {
            "id1": "ronald-ponferrada",
            "id2": "jim-strommer",
            "img": "https://www.innovation.va.gov/ecosystem/assets/images/IE/news-events/neFellowship-Img59-THooker_COVID19HeroAwards.jpg",
            "title": "ALO2 Cultural Foundation: COVID-19 Hero Awards",
            "url": "https://covid19heroawards.com/project/taylor-hooker-a-recreation-therapist/",
            "description": "The inaugural 2020 COVID-19 Hero Awards are a small gesture to honor the hard work of everyone fighting this pandemic."
        },
        {
            "id1": "jim-strommer",
            "id2": "ronald-ponferrada",
            "img": "https://www.innovation.va.gov/ecosystem/assets/images/IE/news-events/neFellowship-Img52-THooker_30under30.jpg",
            "title": "ALO1 Cultural Foundation: COVID-19 Hero Awards",
            "url": "https://covid19heroawards.com/project/taylor-hooker-a-recreation-therapist/",
            "description": "The inaugural 2020 COVID-19 Hero Awards are a small gesture to honor the hard work of everyone fighting this pandemic."
        },
        {
            "id1": "jim-strommer",
            "id2": "ronald-ponferrada",
            "img": "https://www.innovation.va.gov/ecosystem/assets/images/IE/news-events/neFellowship-Img52-THooker_30under30.jpg",
            "title": "ALO1 Cultural Foundation: COVID-19 Hero Awards",
            "url": "https://covid19heroawards.com/project/taylor-hooker-a-recreation-therapist/",
            "description": "The inaugural 2020 COVID-19 Hero Awards are a small gesture to honor the hard work of everyone fighting this pandemic."
        }                                         
    ]

}


// Render dynamic carousel for all NEWS
newsData.data.forEach(news => $('.news--grid').append("<div class='grid-col-12 tablet:grid-col-4 tablet-lg:grid-col-4 margin-bottom-2'>" + "<a href='" + news.url + "' />" + "<div class='usa-card__container item'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class=''>" + "<img src='" + news.img + "'alt='" + news.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h4>" + news.title + "</h4>" + "<p>" + news.description + "</p>" + "</div>" + "</div>" + "</a>" + "</div>")); 

$(".news--grid div:empty").remove();
$(".news--grid h4:empty").remove();
$(".news--grid p:empty").remove();


// Render dynamic carousel for individual page NEWS | ?user="firstname-lastname"
var newsJsonData = newsData.data;
var newsPageData = {
    data: []
};

for (var i = 0; i < newsJsonData.length; i++) {
    var userIndex1 = newsJsonData[i].id1;
    var userIndex2 = newsJsonData[i].id2;
    if (window.location.href.indexOf(userIndex1) > -1 || window.location.href.indexOf(userIndex2) > -1 ) {
        newsPageData.data.push(newsJsonData[i]); 
        console.log(newsPageData);
    }
}

newsPageData.data.forEach(news => $('.owl-carousel.page-news--grid').append("<div class='grid-col-12 item'>" + "<a href='" + news.url + "' />" + "<div class='usa-card__container item'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class=''>" + "<img src='" + news.img + "'alt='" + news.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h4>" + news.title + "</h4>" + "<p>" + news.description + "</p>" + "</div>" + "</div>" + "</a>" + "</div>")); 

$(".page-news--grid div:empty").remove();
$(".page-news--grid h4:empty").remove();
$(".page-news--grid p:empty").remove();


