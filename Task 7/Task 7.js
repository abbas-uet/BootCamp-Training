var menusInfo = [{
    name: 'Pasta',
    price: 15.99,
    type: 'dinner',
    imgurl: 'pasta.jpg',
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem dolore reiciendis fugiat, facilis quas nemo nam iure vel eos molestiae obcaecati? Ratione, id minima nulla reiciendis accusamus sunt distinctio.'
},
{
    name: 'Pizza',
    price: 69.99,
    type: 'dinner',
    imgurl: 'pizza.jpg',
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem dolore reiciendis fugiat, facilis quas nemo nam iure vel eos molestiae obcaecati? Ratione, id minima nulla reiciendis accusamus sunt distinctio.'
}
    , {
    name: 'Pizza',
    price: 69.99,
    type: 'lunch',
    imgurl: 'pizza.jpg',
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem dolore reiciendis fugiat, facilis quas nemo nam iure vel eos molestiae obcaecati? Ratione, id minima nulla reiciendis accusamus sunt distinctio.'
}, {
    name: 'Juice',
    price: 5.99,
    type: 'shake',
    imgurl: 'juice.jpg',
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem dolore reiciendis fugiat, facilis quas nemo nam iure vel eos molestiae obcaecati? Ratione, id minima nulla reiciendis accusamus sunt distinctio.'
}, {
    name: 'Bread & Toast',
    price: 10,
    type: 'breakfast',
    imgurl: 'panga.jpg',
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem dolore reiciendis fugiat, facilis quas nemo nam iure vel eos molestiae obcaecati? Ratione, id minima nulla reiciendis accusamus sunt distinctio.'
}, {
    name: 'Panga',
    price: 20,
    type: 'shake',
    imgurl: 'shake.jpg',
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem dolore reiciendis fugiat, facilis quas nemo nam iure vel eos molestiae obcaecati? Ratione, id minima nulla reiciendis accusamus sunt distinctio.'
},]

function btnClick(event) {
    let btnText = event.currentTarget.innerHTML;
    filterElements(btnText);
};
function filterElements(type) {
    let arr=type === 'All' ? menusInfo : type === 'Breakfast' ? menusInfo.filter((e) => e.type==='breakfast'):type === 'Lunch' ? menusInfo.filter((e) => e.type==='lunch'): type === 'Shakes' ? menusInfo.filter((e) => e.type==='shake'):type === 'Dinner' ? menusInfo.filter((e) => e.type==='dinner'):menusInfo;
    let box=document.querySelector('#elements');
    box.innerHTML=arr.map(e=>
        `<div class="col-5 mx-4">
        <div class="card mb-3 " style="max-width: 640px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${e.imgurl}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${e.name}</h5>
                  <p class="card-text">${e.description}</p>
                  <h4 class="card-title text-warning">$ ${e.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>`
    ).join();
};
function ready() {
    let box=document.getElementById('elements');
    box.innerHTML=menusInfo.map(e=>
        `<div class="col-5 mx-4">
        <div class="card mb-3 " style="max-width: 740px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${e.imgurl}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${e.name}</h5>
                  <p class="card-text">${e.description}</p>
                  <h4 class="card-title text-warning">$ ${e.price}</h4>
                </div>
              </div>
            </div>
          </div>
          </div>`
    ).join();
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', btnClick)
    });
}

document.addEventListener('DOMContentLoaded', ready)



