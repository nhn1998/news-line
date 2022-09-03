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
              <div class ="ms-5">
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Details
              </button>
              
              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Details about the news</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p>${news.author.name}</p>
                      <p>${news.author.published_date}</p>
                      <p>catagorie id : ${news.category_id}</p>
                      <p>rating:${news.rating.badge} ${news.rating.number}</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              </div>
              
              </div>
            </div>
        `;
        detailsContainer.appendChild(Div)
     }
}
newsLoad()
loadCatagorie();