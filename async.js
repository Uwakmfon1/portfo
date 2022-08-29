// const posts = [
//     {title:'post one', body:'this is post one'},
//     {title:'post two', body:'this is post two'},
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((item,index)=>{
//             output += `<li>${item.title}</li>`
//         })
//         document.body.innerHTML = output;
//     },1000)
// }
    
// // function createPost(post,callback){
// //     setTimeout(()=>{
// //         posts.push(post);
// //         callback();
// //     },2000)
// // }



// function createPost(post){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         posts.push(post);

//         const error = false;

//         if(!error){
//             resolve();
//         }else{
//             reject('Error:something went wrong');
//         }
//     },2000);
//    })
// }

// createPost({title:'post three',body:'this is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// // getPosts();

// // createPost({title:'post three',body:'this is post three'},getPosts);

// // async await

// // async function init(){
// //    await createPost({title:'post three',body:'this is post three'});

// //    getPosts();
// // }
// // init();


// // async /await/fetch
// // async function fetchUsers(){
// //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
// //     const data = await res.json();
// //     console.log(data);
// //     document.body.innerHTML = data;
// // }

// // fetchUsers();

// // promise.all

// // const promise1 = Promise.resolve("hello world");
// // const promise2  = 10;
// // const promise3 = new Promise((resolve,reject)=>
// //     setTimeout(resolve,2000,'Goodbye'));
// // const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json())
// // .then(value =>console.log(value))
// // // Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));




console.log('uwakmfon is a boy')
function login(email,password,callback){
    setTimeout(()=>{
        console.log("now we have the data");
        callback({userEmail:email});
    },5000);
}

const user = login("uwak@gmail.com",123456,user =>{
    console.log(user);
});
console.log(user);
console.log("finish");