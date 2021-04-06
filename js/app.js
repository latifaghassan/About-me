'use strict';

let UserName = prompt("Provide your name please?");
alert("Welcome " + UserName + " to \"About me\" website ");

let q1 = prompt(' Do you think i like cats? ');
q1 = q1.toLocaleLowerCase();
if (q1 === 'yes') {
    alert(' Yes actually that is right');
} else if (q1 === 'no') {
alert(' Actually i do like them ');
}else {
alert (' Please answer with yes or no! ');
}

let q2 = prompt(' Do i like sea food? ');
q2 = q2.toLocaleLowerCase();
if (q2 === 'yes') {
    alert('Actually no ');
} else if (q2 === 'no') {
alert(' yes its full NO when its related to sea food ');
}else {
alert (' Please answer with yes or no! ');
}

let q3 = prompt(' Do i like summer season?');
q3 = q3.toLocaleLowerCase();
if (q3 === 'yes') {
    alert('NO IT IS THE WORST SEASON! ');
} else if (q3 === 'no') {
alert(' That is right ! ');
}else {
alert (' Please answer with yes or no! ');
}

let q4 = prompt('Do i like watching horror movies?  ');
q4 = q4.toLocaleLowerCase();
if (q4 === 'yes') {
    alert('yes right! it is my first choice everytime ');
} else if (q4 === 'no') {
alert('Actually i do like horror movies  ');
}else {
alert (' Please answer with yes or no! ');
}


let q5 = prompt(' Do i prefer phone calls? ');
q5 = q5.toLocaleLowerCase();
if (q5 === 'yes') {
    alert('No i prefer texting more ');
} else if (q5 === 'no') {
alert('That is right ! it is nervousing me ');
}else {
alert (' Please answer with yes or no! ');
}



