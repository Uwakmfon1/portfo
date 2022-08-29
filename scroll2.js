

window.addEventListener('scroll',reveal);

function reveal(){
    const reveal = document.getElementById("reveal");
    for(let i=0;i<reveal.length;reveal++){
        let windowHeight = window.innerHeight;
        let revealTop = reveal[i].getBoundingClientRect().top
        let revealPoint = 150
        if(revealTop < (windowHeight  - revealPoint)){
            
        }
    }

}