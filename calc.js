let string = "";
let clr = document.querySelector('.clear');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'C'|| e.target.innerHTML == 'AC' ){
            string = " ";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
})
  
//  Array.from(buttons).forEach((button) => {
//     button.addEventlistener('click', (e)=>{
//         // if(e.target.innerHTML == '='){
//         //     string = eval(string);
//         //     document.querySelector('input').value = string;
//         // }else{
//         //     console.log(e.target);
//         //     string = string + e.target.innerHTML;
//         //     document.querySelector('input').value = string;
//         // }
//     })
// })
