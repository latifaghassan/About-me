'user strict';

let UserName = prompt("Provide your name please?");
alert("Welcome " + UserName + " to \"About me\" website ");

let score = 0;
function favbet(){ 
let q1 = prompt(' Do you think i like cats? ');
q1 = q1.toLocaleLowerCase();

if (q1 === 'yes' || q1 === 'y') {
    alert(' Yes actually that is right');
    score++;
} else if (q1 === 'no' || q1 === 'n') {
    alert(' Actually i do like them ');
} else {
    alert(' Please answer with yes or no! ');
}
}

favbet();


function favFood(){
let q2 = prompt(' Do i like sea food? ');
q2 = q2.toLocaleLowerCase();
if (q2 === 'yes' || q2 === 'y') {
    alert('Actually no ');
} else if (q2 === 'no' || q2 === 'n') {
    alert(' yes its full NO when its related to sea food ');
    score++;
} else {
    alert(' Please answer with yes or no! ');
}
}

favFood();

function favSeasson(){
let q3 = prompt(' Do i like summer season?');
q3 = q3.toLocaleLowerCase();
if (q3 === 'yes' || q3 === 'y') {
    alert('NO IT IS THE WORST SEASON! ');
} else if (q3 === 'no' || q3 === 'n') {
    alert(' That is right ! ');
    score++;
} else {
    alert(' Please answer with yes or no! ');
}
}

favSeasson();

function favMovies(){
let q4 = prompt('Do i like watching horror movies?  ');
q4 = q4.toLocaleLowerCase();
if (q4 === 'yes' || q4 === 'y') {
    alert('yes right! it is my first choice everytime ');
    score++;
} else if (q4 === 'no' || q4 === 'n') {
    alert('Actually i do like horror movies  ');
} else {
    alert(' Please answer with yes or no! ');
}
}
favMovies();



function phone(){
let q5 = prompt(' Do i prefer phone calls? ');
q5 = q5.toLocaleLowerCase();
if (q5 === 'yes' || q5 === 'y') {
    alert('No i prefer texting more ');
} else if (q5 === 'no'|| q5 === 'n') {
    alert('That is right ! it is nervousing me ');
    score++;
} else {
    alert(' Please answer with yes or no! ');
}
}
phone();

function num(){
let q6 = prompt(' please choose a number from 0-10');
q6 = parseInt(q6);
console.log(typeof q6);

for (let i = 0; i <= 3; i++) {
    if (q6 == 5) {
        alert('that is correct')
        score++;
        break;
    } else if (q6 <= 6) {
        alert('too low');
        
        
    } else if (q6 >= 8) {
        alert('too high')
        
    }
    if(i===3){
    alert('the correct answer is 5');
    break;
    }
    

    q6 = prompt('please try again');

}

}
num();


function days(){
let q7 = prompt(' can you guess my favourite day? ')

let day = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (let i = 0; i <= 5; i++) {
    if (q7 == day[0]) {
        alert(' That is right!')
        score++;
        break;
    } else if (q7 == day[6]) {
        alert(' That is right!')
        score++;
        break;
    } else {
        q7 = prompt('please try again');
    }
}
}
days();



alert(' The correct answer is : ' + day[0] + ' and ' + day[6])

alert('your final score is: ' + score + ' out 7');

alert("Nice to met you ( " + UserName + " ) feel free to discover my page ")


