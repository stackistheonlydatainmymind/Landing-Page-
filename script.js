let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });


let container = document.getElementById("container")
let arr = [
    {
        icon : '<i class="fa-solid fa-newspaper"></i>',
        heading : "NEWS FEED",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ratione."
    },
    {
        icon : '<i class="fa-solid fa-compass"></i>',
        heading : "INCOMING EVENTS",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ratione."
    },
    {
        icon : '<i class="fa-solid fa-briefcase"></i>',
        heading : "JOB OPPURTUNITIES",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ratione."
    }
];

function createBox(){
    arr.forEach((value,index)=>{
        let box = document.createElement("div")
        box.setAttribute("class", "box");
        let iconDiv = document.createElement("div")
        iconDiv.innerHTML= value.icon
        iconDiv.setAttribute("class", "icon-1")
        box.append(iconDiv)
        let div = document.createElement("h3")
        div.innerText = value.heading
        box.append(div)
        let para = document.createElement("p")
        para.innerText = value.description
        box.append(para)
        container.append(box)
    })
}
createBox();


