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
            <a class="p-2 text-dark text-decoration-none">${value.category_name}</a>
        `;
        getCatagoriesData.appendChild(headDiv)
    }
}

loadHeaderData()