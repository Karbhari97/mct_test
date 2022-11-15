function dropdown() {
    var droplistref = document.getElementById("droplist");
    droplistref.style.display = "block";
    var playstoreref = document.getElementsByClassName("playstore");
    playstoreref.style.display = "block";
    playstoreref.style.marginLeft = "80px";


}

function hidedrop() {
    var droplistref = document.getElementById("droplist");
    droplistref.style.display = "none";

}


function getdata() {




    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=0b6ed8f544e940cba88472692c5cfb8e`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
            <div style="padding:20px ;">
            <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
            </div>
                        <div style="padding:20px ;margin-top:10px">
                        <h5>${element["title"]}</h5>
                        <h6>${element["description"]}</h6>
                        <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                        <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                     
                        
                        </div>
                        </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




}













function getbusinessdata() {



    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0b6ed8f544e940cba88472692c5cfb8e`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
                <div style="padding:20px ;">
                <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
                </div>
                            <div style="padding:20px ;margin-top:10px">
                            <h5>${element["title"]}</h5>
                            <h6>${element["description"]}</h6>
                            <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                            <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                         
                            
                            </div>
                            </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




}




function getEntairtenmentdata() {



    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0b6ed8f544e940cba88472692c5cfb8e`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
                    <div style="padding:20px ;">
                    <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
                    </div>
                                <div style="padding:20px ;margin-top:10px">
                                <h5>${element["title"]}</h5>
                                <h6>${element["description"]}</h6>
                                <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                                <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                             
                                
                                </div>
                                </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




}


function getGenraldata() {



    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=0b6ed8f544e940cba88472692c5cfb8e`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
                    <div style="padding:20px ;">
                    <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
                    </div>
                                <div style="padding:20px ;margin-top:10px">
                                <h5>${element["title"]}</h5>
                                <h6>${element["description"]}</h6>
                                <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                                <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                             
                                
                                </div>
                                </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




}



function getHelthdata() {



    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0b6ed8f544e940cba88472692c5cfb8e`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
                    <div style="padding:20px ;">
                    <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
                    </div>
                                <div style="padding:20px ;margin-top:10px">
                                <h5>${element["title"]}</h5>
                                <h6>${element["description"]}</h6>
                                <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                                <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                             
                                
                                </div>
                                </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




}




function getSciencedata() {



    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=0b6ed8f544e940cba88472692c5cfb8e`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
                    <div style="padding:20px ;">
                    <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
                    </div>
                                <div style="padding:20px ;margin-top:10px">
                                <h5>${element["title"]}</h5>
                                <h6>${element["description"]}</h6>
                                <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                                <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                             
                                
                                </div>
                                </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




}




function getSportsdata() {



    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0b6ed8f544e940cba88472692c5cfb8e
    `, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
                    <div style="padding:20px ;">
                    <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
                    </div>
                                <div style="padding:20px ;margin-top:10px">
                                <h5>${element["title"]}</h5>
                                <h6>${element["description"]}</h6>
                                <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                                <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                             
                                
                                </div>
                                </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




}


function getTechnologydata() {



    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0b6ed8f544e940cba88472692c5cfb8e
    `, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
                    <div style="padding:20px ;">
                    <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
                    </div>
                                <div style="padding:20px ;margin-top:10px">
                                <h5>${element["title"]}</h5>
                                <h6>${element["description"]}</h6>
                                <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                                <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                             
                                
                                </div>
                                </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()

}


function getSportsdata() {



    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0b6ed8f544e940cba88472692c5cfb8e
    `, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
                    <div style="padding:20px ;">
                    <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
                    </div>
                                <div style="padding:20px ;margin-top:10px">
                                <h5>${element["title"]}</h5>
                                <h6>${element["description"]}</h6>
                                <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                                <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                             
                                
                                </div>
                                </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




}


function loadmore() {



    let newsAccordion = document.getElementById('newscontainer');
    newsAccordion.style.display = "block"


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0b6ed8f544e940cba88472692c5cfb8e
    `, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = "";
            articles.forEach(function (element, index) {

                let news = ` <div style="display:flex ; margin:30px 20px 30px 20px ; box-shadow:0px 0px 10px grey; width:850px">
                    <div style="padding:20px ;">
                    <img src="${element["urlToImage"]}" height="250px"  width="250px"  >
                    </div>
                                <div style="padding:20px ;margin-top:10px">
                                <h5>${element["title"]}</h5>
                                <h6>${element["description"]}</h6>
                                <p style="margin-top:20px">publishedAt :-${element["publishedAt"]}</p>
                                <a style="text-decoration:none; color:grey;" href="${element["url"]}">Read More...</a>
                             
                                
                                </div>
                                </div>`
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




}













