const url = "/api/programming-languages/v1/api_programming-languages.json";
let divContent = document.querySelector(".content");

const languages = fetch(url).then((resDados) => {
  resDados.json().then((datas) => {
    datas.languages.map((item) => {
      divContent.innerHTML += `         
          <div class="card">
            <div class="card-header">
              <img src="${item.logo}" alt="" height="90">
              <h2>${item.name}</h2>
              <strong><small>[${item.year_creation}]</small></strong>            
            </div>
            <div class="description">
              <p><strong>${item.creator}</strong></p>
              <p>${item.company}</p>
              <p>${item.description}</p>
              <p>${item.uses}</p>
              <p>${item.tools_frameworks}</p>
              <p>${item.website}</p>
            </div>
          </div>                  
          `;
    });
  });
});

export default languages;
