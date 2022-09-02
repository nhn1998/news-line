const loadHeaderData = () =>{
    url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
    .then(res => res.json())
    .then(data =>displayHeaderData(data.data.news_category))
    .catch(error => console.log(error))
}
const displayHeaderData = (values)=>{
    console.log(values)
    const getCatagoriesData = document.getElementById('head-container');
    for(const value of values){
        const headDiv = document.createElement('div')
        headDiv.innerHTML= `
            <a onclick= "displayNews()" class="p-2 text-dark text-decoration-none">${value.category_name}</a>
        `;
        getCatagoriesData.appendChild(headDiv)
    }
}
const loadNews = () =>{
    fetch('https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a')
    .then(res => res.json())
    .then(data =>displayNews(data.data[0]))
    .catch(error =>console.log(error))
}
const displayNews =(news)=>{
    console.log(news)
}


loadHeaderData()