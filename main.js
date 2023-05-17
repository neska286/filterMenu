import { menu } from "./data.js";

const sectionCenter = document.querySelector('.section-center')
const filterBtns = document.querySelectorAll('.filter-btn')
// console.log(filterBtns);

window.addEventListener('DOMContentLoaded',(eo)=>{
    displayMenuItems(menu)
    const categories = menu.filter((value, index, array) => array.indexOf(value) === index);
    console.log('categories',categories)
})

const displayMenuItems = (menu)=>{
    let displayMenu =  menu.map(item=>( `
    <article class="menu-item">
            <img src=${item.img} alt="menu item" class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article> 
    `
    ))
    // console.log(displayMenu.join(''))
    sectionCenter.innerHTML = displayMenu.join('')
}

filterBtns.forEach(btn => {
btn.addEventListener('click',(e)=>{
    // console.log('btn',e.currentTarget.dataset.id)
    const category = e.currentTarget.dataset.id
    let categoryMenu = menu.filter((item)=>{
        if(item.category === category){
            return item
        }
    })
    if(category == "all"){
        displayMenuItems(menu)
    }else {
        displayMenuItems(categoryMenu)
    }
    removeActiveClasses()
    btn.classList.add('active')
    
    
})
});

const removeActiveClasses = ()=> {
  filterBtns.forEach(btn => {
      btn.classList.remove('active')
  })
}