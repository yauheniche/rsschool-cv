const burgerBtn = document.getElementById('burger-btn')
const burgerMenu = document.getElementById('burger-menu')

const schedule = document.getElementById('schedule')
const list = document.getElementById('list')

const universityIcon = document.getElementById('university-icon')
const constructionIcon = document.getElementById('construction-icon')
const learnIcon = document.getElementById('learn-icon')
const workIcon = document.getElementById('work-icon')

const universityItemList = document.getElementById('university-item-list')
const constructionItemList = document.getElementById('construction-item-list')
const learnItemList = document.getElementById('learn-item-list')
const workItemList = document.getElementById('work-item-list')

burgerBtn.addEventListener('click', ()=> {
  burgerMenu.classList.toggle('hidden-nav')
})


schedule.addEventListener('mousemove', (e)=> {
  e.target === workIcon ? workItemList.classList.add('active') :
  e.target === learnIcon ? learnItemList.classList.add('active') :
  e.target === universityIcon ? universityItemList.classList.add('active') :
  e.target === constructionIcon ? constructionItemList.classList.add('active') : false;
})

list.addEventListener('mousemove', (e)=> {
  e.target === workItemList ? workIcon.classList.add('active') :
  e.target === learnItemList ? learnIcon.classList.add('active') :
  e.target === universityItemList ? universityIcon.classList.add('active') :
  e.target === constructionItemList ? constructionIcon.classList.add('active') : false
})

schedule.childNodes.forEach( (el)=> {
  el.addEventListener('mouseleave', (e)=> {
    if (e.target === workIcon) workItemList.classList.remove('active');
    if (e.target === learnIcon) learnItemList.classList.remove('active');
    if (e.target === universityIcon) universityItemList.classList.remove('active');
    if (e.target === constructionIcon) constructionItemList.classList.remove('active');
  })
})

list.childNodes.forEach((el)=> {
  el.addEventListener('mouseleave', (e)=> {
    if (e.target === learnItemList) learnIcon.classList.remove('active');
    if (e.target === workItemList) workIcon.classList.remove('active');
    if (e.target === universityItemList) universityIcon.classList.remove('active');
    if (e.target === constructionItemList) constructionIcon.classList.remove('active');
  });
})        

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

console.log(`
  My estimation 150;

  160(Max points count) - 10 (videopresentation)
`)
