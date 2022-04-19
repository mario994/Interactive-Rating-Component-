
const form = document.querySelector('form');
const points = document.querySelectorAll('.points');
const card =document.querySelector('.card-container');
const score = document.querySelector('.score');
let currentScore; //User selected value

form.addEventListener('submit', e => {
    e.preventDefault(); //avoid to reload the page

    if(currentScore){
        //if currentScore has a value 
        //exchange classes
        form.classList.add('hidden');
        card.classList.remove('hidden');
        //and display currentScore Value
        score.innerHTML = currentScore;

    } else {
        //otherwise display an alert
        alert('Please choose a value');
    }
});

//iterate every radio button
points.forEach((point, i, arr) => {
    //Add an event for every radio button 
    point.addEventListener('click', (e) => {
        //if var currentScore has the same value that the radio button
        if (currentScore === +e.target.textContent) { 
            //reset it to null
            currentScore = null;
        } else {
            //otherwise set it 
            currentScore = +e.target.textContent;
        }
        //First remove every selectedBtn class  
        arr.forEach(element => {
            element.classList.remove('selectedBtn');
        });
        //Second set the selectedBtn class when user's click 
        point.classList.toggle('selectedBtn');
    });
});


