'use strict';
// console.log('hello')
const sun = document.querySelector('.sun');
const moon  = document.querySelector('.moon')
const doc = document.getElementsByTagName('body')[0]

const userTheme = localStorage.getItem("theme")

const iconToggle = () => {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
}

const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme)){
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme","dark");
        moon.classList.add('hidden');
        return;
    }else{
        sun.classList.add('hidden')
    }
}


const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")){
        // console.log('contains dark make white')
        // console.log('moon')

       
        document.documentElement.classList.remove("dark")
        const d  = document.documentElement
        // console.log(d)
        localStorage.setItem("theme","light");
        iconToggle();
        return;
    }else{
        // console.log('contains white make dark')
        // console.log('sun')
  
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme",'dark')
          const d  = document.documentElement
        // console.log(d)
    iconToggle();
    }
}

//call theme switch on click
sun.addEventListener('click',function() {
    themeSwitch();
    
})
moon.addEventListener('click',function() {
    themeSwitch();

})
themeCheck();



// const tagBtn = document.querySelectorAll('.tag-btn')
// console.log('click')
// tagBtn.forEach((elem) => 
// {
//     elem.addEventListener('click',function(){
//     elem.classList.add('border-t-4' ,'border-indigo-500')
//         console.log('done')
//     })
// })
const toggler = document.querySelectorAll(".toggle");
const sidebar = document.querySelector(".sidebar-container");
const searchToggle = document.querySelector(".search-toggle");
const sidebarSearch = document.querySelector(".sidebar-search");
const foc_elem = document.querySelector(".focus");

toggler.forEach((elem) => {
  elem.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });
});
searchToggle.addEventListener("click", () => {
  foc_elem.focus();
  sidebar.classList.toggle("hidden");
});

//Comment logic 

const replyBtn = document.querySelectorAll(".reply-btn");
const cancelBtn = document.querySelectorAll(".cancel-btn");
const allReplies = document.querySelectorAll(".view-reply");
const allRepliesBox = document.querySelector(".all-replies-box");

const replyBox = document.querySelectorAll(".reply-form");

replyBtn.forEach(function (elem) {
  elem.addEventListener("click", function () {
    // this.parentElement.lastElementChild.classList.remove('hidden')
    this.nextElementSibling.firstElementChild.classList.remove("hidden");
    elem.classList.add("hidden");
    cancelBtn.forEach(function (elem1) {
      elem1.classList.remove("hidden");
    });
  });
});

cancelBtn.forEach(function (elem3) {
  elem3.addEventListener("click", function () {
    // this.parentElement.lastElementChild.classList.add('hidden')
    elem3.classList.add("hidden");
    this.classList.add("hidden");
    replyBox.forEach(function (elem4) {
      elem4.classList.add("hidden");
      replyBtn.forEach(function (elem) {
        elem.classList.remove("hidden");
      });
    });

    //this.parentElement.firstElementChild.classList.remove('hidden')

    //Reply btn
    this.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.classList.remove(
      "hidden"
    );
  });
});
allReplies.forEach(function (elem) {
  elem.addEventListener("click", function () {
    console.log(elem.nextElementSibling);
    elem.nextElementSibling.classList.toggle("hidden");
  });
});


//Smooth scrolling behaviour
//Index page
// let anchor = document.querySelector(".scroll-anchor");

function scrollerfromto(from,to){
  document.querySelector(`.${from}`).addEventListener('click',function(){
    document.querySelector(`.${to}`).scrollIntoView({ behavior: 'smooth', block: 'start'});
  })
}

scrollerfromto('scroll-activate-btn','scroll-anchor');
