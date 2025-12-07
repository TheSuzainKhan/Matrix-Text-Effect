// const para =document.querySelector('p')
// const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// const text =para.innerText;

// let transition=0;
// para.addEventListener('mouseenter', ()=> {

//     setInterval(()=> {

//         const str = text.split("").map((char, index)=> {

//             if(index<transition) {
//                 return char;
//             }
//             return characters.split('')[Math.floor(Math.random()*53)]
//         }).join("")

//         transition+=0.40;

//           para.innerText =str;
//     },30)
// })


const para = document.querySelector("p")
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let transition=0;
para.addEventListener('mouseenter', ()=> {

    function randomText() {
        const str= text.split("").map((char, index)=> { 

            if(index<transition) {
                return char
            }
            return characters.split("")[Math.floor(Math.random()*53)]
        }).join("")
        transition+=0.40;
        para.innerText=str
    }
    
    setInterval(randomText, 30)
})