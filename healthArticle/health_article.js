var xhr = new XMLHttpRequest();

var url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() { 
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}

var urlHealth = './health.json';

var xhr2 = new XMLHttpRequest();

xhr2.open('GET', urlHealth, true);

xhr2.responseType = 'json';

xhr2.send();

xhr2.onload = function() { 
    var health = xhr2.response;
    console.log(health);
    var healthData = `<h2>${health.name}</h2> <h3>${health.place}</h3>`;
    
    document.getElementById('health').innerHTML = healthData;
}