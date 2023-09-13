const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")

btn.forEach(function (i){
    i.addEventListener('click',function(e){
        if(e.target.id==='grey'){
            body.style.backgroundColor = '#36454f';
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor = '#0e5270';
        }
        if(e.target.id==='brown'){
            body.style.backgroundColor = '#483c32';
        }
        if(e.target.id==='teal'){
            body.style.backgroundColor = '#008080';
        }
    });
});