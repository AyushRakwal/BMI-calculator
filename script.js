const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const h =parseInt(document.querySelector('#height').value);
    const w =parseInt(document.querySelector('#weight').value);

    const result= document.querySelector('#results');

    if(h==='' || h<0 || isNaN(h)){
        result.innerHTML = `Please enter a valid height ${h}`
    }
    else if (w==='' || w<0 || isNaN(w)){
        result.innerHTML = `Please enter a valid weight ${w}`
    }

    else{
        const bmi = (w / ((h*w) / 10000)).toFixed(2);
        result.innerHTML =`<span>CALCULATED BMI:${bmi}</span>`
    }
    
})