const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const res = document.querySelector('#results')

    if(height === '' || height <= 0 || isNaN(height)){
        res.innerHTML = "please give a valid height"
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        res.innerHTML = "please give a valid weight"
    } else {
       const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if (bmi < 18.6) res.innerHTML = `<span>${bmi} <br/> Under Weight </span>`
        if (bmi > 18.6 && bmi < 24.9 ) res.innerHTML = `<span>${bmi} <br/> Normal Weight </span>`
        if (bmi > 24.9) res.innerHTML = `<span>${bmi} <br/> Over Weight </span>`
    }
});

