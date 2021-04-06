'user strict';

let UserName = prompt("Provide your name please?");
alert("Welcome " + UserName + " to \"About me\" website ");

let score = 0;

let q1 = prompt(' Do you think i like cats? ');
q1 = q1.toLocaleLowerCase();
if (q1 === 'yes' || q1 === 'y') {
    // console.log("Yes actually that is right");
    alert(' Yes actually that is right');
    score++;
} else if (q1 === 'no' || q1 === 'n') {
    // console.log("Actually i do like them");
    alert(' Actually i do like them ');
} else {
    // Please answer with yes or no!");
    alert(' Please answer with yes or no! ');
}

let q2 = prompt(' Do i like sea food? ');
q2 = q2.toLocaleLowerCase();
if (q2 === 'yes' || q1 === 'y') {
    // console.log("Actually no");
    alert('Actually no ');
} else if (q2 === 'no' || q1 === 'n') {
    // console.log("yes its full NO when its related to sea food ");
    alert(' yes its full NO when its related to sea food ');
    score++;
} else {
    // console.log("Please answer with yes or no!");
    alert(' Please answer with yes or no! ');
}

let q3 = prompt(' Do i like summer season?');
q3 = q3.toLocaleLowerCase();
if (q3 === 'yes' || q1 === 'y') {
    // console.log("NO IT IS THE WORST SEASON!");
    alert('NO IT IS THE WORST SEASON! ');
} else if (q3 === 'no' || q1 === 'n') {
    // console.log("That is right !");
    alert(' That is right ! ');
    score++;
} else {
    // console.log("Please answer with yes or no!");
    alert(' Please answer with yes or no! ');
}

let q4 = prompt('Do i like watching horror movies?  ');
q4 = q4.toLocaleLowerCase();
if (q4 === 'yes' || q1 === 'y') {
    // console.log("yes right! it is my first choice everytime");
    alert('yes right! it is my first choice everytime ');
    score++;
} else if (q4 === 'no' || q1 === 'n') {
    // console.log("Actually i do like horror movies");
    alert('Actually i do like horror movies  ');
} else {
    // console.log("Please answer with yes or no!");
    alert(' Please answer with yes or no! ');
}


let q5 = prompt(' Do i prefer phone calls? ');
q5 = q5.toLocaleLowerCase();
if (q5 === 'yes' || q1 === 'y') {
    // console.log("No i prefer texting more");
    alert('No i prefer texting more ');
} else if (q5 === 'no') {
    // console.log("That is right ! it is nervousing me ");
    alert('That is right ! it is nervousing me ');
    score++;
} else {
    // console.log("Please answer with yes or no!");
    alert(' Please answer with yes or no! ');
}

let q6 = prompt(' please choose a number from 0-10');
q6 = parseInt(q6);
console.log(typeof q6);

for (let i = 0; i <= 5; i++) {
    if (q6 == 5) {
        // console.log("that is correct");
        alert('that is correct')
        score++;
        break;
    } else if (q6 <= 6) {
        // console.log("too low");
        alert('too low');
        q6 = prompt(' please try again');
    } else if (q6 >= 8) {
        // console.log("too high");
        alert('too high')
        q6 = prompt('please try again');
    }

}
alert('the correct answer is 5');




let q7 = prompt(' can you guess my favourite day? ')

let day = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (let i = 0; i <= 5; i++) {
    if (q7 == day[0]) {
        // console.log("That is right!");
        alert(' That is right!')
        score++;
        break;
    } else if (q7 == day[6]) {
        // console.log("That is right!");
        alert(' That is right!')
        score++;
        break;
    } else {
        q7 = prompt('please try again');
    }
}

alert(' The correct answer is : ' + day[0] + ' and ' + day[6])

alert('your final score is: ' + score + ' out 7');

alert("Nice to met you ( " + UserName + " ) feel free to discover my page ")



