const burgerBtn = document.getElementById('burger-btn')
const burgerMenu = document.getElementById('burger-menu')

const schedule = document.getElementById('schedule')
const universityIcon = document.getElementById('university-icon')
const constructionIcon = document.getElementById('construction-icon')
const itIcon = document.getElementById('it-icon')

const universityItemList = document.getElementById('university-item-list')
const constructionItemList = document.getElementById('construction-item-list')
const itItemList = document.getElementById('it-item-list')


burgerBtn.addEventListener('click', ()=> {
  burgerMenu.classList.toggle('hidden-nav')
})


// schedule.addEventListener('mousemove', (e)=> {
//   if (e.target === itIcon) itItemList.classList.add('active')
//   if (e.target === universityIcon) universityItemList.classList.add('active');
//   if (e.target === constructionIcon) constructionItemList.classList.add('active');
  
// })

// list.addEventListener('mousemove', (e)=> {

//   if (e.target === itItemList) itIcon.classList.add('active')
//   if (e.target === universityItemList) universityIcon.classList.add('active');
//   if (e.target === constructionItemList) constructionIcon.classList.add('active');

// })

// schedule.childNodes.forEach( (el)=> {
//   el.addEventListener('mouseleave', (e)=> {

//     if (e.target === itIcon.parentNode) itItemList.classList.remove('active');
//     if (e.target === universityIcon) universityItemList.classList.remove('active');
//     if (e.target === constructionIcon) constructionItemList.classList.remove('active');
  
//   })
// })

list.childNodes.forEach( (el)=> {
  el.addEventListener('mouseleave', (e)=> {
  
    if (e.target === itItemList) itIcon.classList.remove('active')
    if (e.target === universityItemList) universityIcon.classList.remove('active');
    if (e.target === constructionItemList) constructionIcon.classList.remove('active');

  });
})

console.log(`

`)
const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});