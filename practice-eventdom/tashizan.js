function tashizan() {

let l = document.querySelector('input[name="left"]');
left = l.value;
let r = document.querySelector('input[name="right"]'); 
right = r.value;
let n = Number(right);
let n1 =Number(left); 

kotae = n+n1;
let span = document.querySelector('span#answer');
span.textContent = kotae;
}

let b1 = document.querySelector('button#calc');
b1.addEventListener('click',tashizan);
