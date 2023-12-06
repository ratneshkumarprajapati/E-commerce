const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    });

}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });

}



// //cart update
// const cart = document.getElementById('lg-bag')
// let cart0 = document.getElementById('update')
// const cart2 = document.getElementById('update').innerHTML
// // const cart1 = document.getElementById('add')
// const value = document.getElementsByClassName('normal')

// // cart0.innerHTML = 3;
// // let a=cart0.innerHTML;



// value.addEventListener("click",()=>{
//     cart0.innerHTML=cart2 +1


// })

// // let myfunction=()=>{
// //     // value.addEventListener('click',()=>{
// //     //     cart0.innerHTML+=cart0.innerHTML;


// //     // })
// //     cart0.innerHTML=4;

// // }


