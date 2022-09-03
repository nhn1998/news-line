const loadCatagorie =() =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data =>displayCatagories(data.data.news_category))
}
const displayCatagories = (catagorys) =>{
    console.log(catagorys)
    const newsContainer = document.getElementById('news-container')
    for(const catagory of catagorys){
        console.log(catagory)
        const newsDiv = document.createElement('div')
        newsDiv.innerHTML = `
            <button onclick="" class ="text-decorate-none">${catagory.category_name}</button>
        `;
        newsContainer.appendChild(newsDiv)
    }
}
const newsLoad =()=>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}
const displayNews = newses=>{
     console.log(newses)
     const detailsContainer = document.getElementById('details-container')
     for (const news of newses){
        console.log(news)
        const Div = document.createElement('div');
        Div.classList.add('col')
        Div.innerHTML = `
        <div class="card">
              <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">${news.details.slice(0,200)}...</p>
              </div>
              <div class="d-flex">
              <div class="d-inline-flex p-2">
              <img class="img-size" src="${news.author.img}">
              ${news.author.name}
              </div>
              
              <div class="d-inline-flex p-2">
              <i class="fa-sharp fa-solid fa-eye ms-5"></i>
              <p class="fw-bold ms-3">${news.total_view}
              </div>
              
              <div class="d-inline-flex p-2">
              <div class ="ms-5 btn btn-primary">Details<div>
              </div>
              
              </div>
            </div>
        `;
        detailsContainer.appendChild(Div)
     }
}
newsLoad()
loadCatagorie();