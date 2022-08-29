const navLists = document.querySelector(".nav-lists");
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navLists.classList.toggle("active")
})



document.querySelectorAll(".nav-links").forEach(n => n.addEventListener('click',()=>{
    console.log(n);
    hamburger.classList.remove("active");
    navLists.classList.remove("active");
}))


let array2 = ['uwakmfon','utibeima','godswill','prosper','delight','bright']
array2.forEach((item,index)=>{
    console.log(`welcome ${item}`)
})


