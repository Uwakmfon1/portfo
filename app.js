// async function fetching(id){
//     let users = await getUSers();
//     // console.log(users)
//     const display = document.getElementById("display");
//     const display2 =document.getElementById("display2");
//     const userFound = users.find(user => user.id == id);
//     console.log(userFound);
//     display.value = userFound.name;    
//     display2.value = userFound.email;
// }


// const select = document.getElementById("select");

// select.addEventListener("change", (e)=>{
//     console.log(e.target.value);
//     fetching(e.target.value);
// })


// // const select = document.getElementById('select');
// // const value = select.options[select.selectedIndex].value;
// // // console.log(value)


// // async function dash(){
// //     const input = document.getElementById("input1").value;
// //     // console.log(input);
// //     if(input.trim()=="uwakmfon"){
// //         setTimeout(()=>{
// //             alert(`welcome ${input}`)
// //         },2000)
// //     }else{
// //         setTimeout(()=>{
// //             alert(`login failed`)
// //         },2000)
// //     }
// // }

async function getUSers(){
    try {
        let res = await fetch( 'https://jsonplaceholder.typicode.com/users/');

        return await res.json();
    }catch (error){
        console.log(error);
    }
}


// fetching value of the json();

async function fetching(id){
    let url = await getUSers();

    const display = document.getElementById("display");
    const display2 = document.getElementById("display2");
    
    const userFound = url.find(user =>user.id == id);
    console.log(userFound)
    display.value = userFound.name;
    display2.value = userFound.email;
}

const select = document.getElementById("select")
select.addEventListener("change",(e)=>{
    fetching(e.target.value);

})



async function renderUsers(){
    let users = await getUSers();
    console.log(users)
    let html ='';
    users.forEach(user =>{
        let htmlSegment = `<div class ="user">
  
        <h2>${user.name}</h2>
        username:<span>${user.username}</span><br>
        website:<span>${user.website}</span>
        </div>`;
        html += htmlSegment;
    })
    let container = document.querySelector(".container");
    container.innerHTML = html;
}
renderUsers();

