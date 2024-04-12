let divContent = document.querySelector(".content");
const url = "https://mervy.github.io/my_apis/api_programming-languages.json";

fetch(url).then((resDados) => {
  resDados.json().then((datas) => {
    // console.log(datas);
    datas.map((item)=>{
        divContent.innerHTML += `
        <div class="card">
        <div class="card-header">
          <img src="${item.logo}" alt="" height="90">
          <h2>${item.name}</h2>
         <small><strong>[${item.year_creation}]</strong></small>
        
        </div>
        <div class="description">
          <p><strong>${item.creator}</strong></p>
          <p>${item.company}</p>
          <p>${item.description}</p>
          <p>${item.uses}</p>
          <p>${item.tools_frameworks}</p>
          <p>${item.website}</p>
        </div>        
        `
    })

  });
});
