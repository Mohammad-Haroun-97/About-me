'use strict';
function questionA(){
let score=0;

let username=prompt('What is your name ?'); 

alert('Welcome ' + username +' to my profile page, I hope you will enjoy exploring my website ')

}
questionA();


function questionB(){

let question1=prompt('Do you think that I am a good cook  ?')
question1= question1.toLowerCase();

switch (question1) {

        case 'y'  :     
        case 'yes':
            // console.log(question1)
            alert('You are right, I am a good cook');
            score++;
            break;

        case 'no':
        case 'n':
            // console.log(question1)

            alert('Opss, you dont me very well, I am a professional cook ');
            break;

        default:
            // console.log(question1)
            alert('You have to answer yes or no');
            break;

    }
}
questionB();

function questionC() {

}
    let question2=prompt('Am I satisfied with the software code course?')
    question2 = question2.toLowerCase();

    switch (question2) {

            case 'y'  :     
            case 'yes':
                // console.log(question1)
                alert('You are right, I am oversatisfied with this course');
                score++;
                break;

            case 'no':
            case 'n':
                // console.log(question1)

                alert('You are wrong, I am very happy that i signed up this course ');
                break;

            default:
                // console.log(question1)
                alert('You have to answer yes or no');
                break;

        }
questionC();


function questionD(){
        let question3=prompt('Do you think that people call me by my last name?')
        question3 = question3.toUpperCase();

        switch (question3) {            

                case 'Y'  :     
                case 'YES':
                    // console.log(question1)
                    alert('You are right, most people call me Haroun which is it my last name');
                    score++;
                    break;

                case 'NO':
                case 'N':
                    // console.log(question1)

                    alert('Nope, you did not guess it right ');
                    break;

                default:
                    // console.log(question1)
                    alert('You have to answer yes or no');
                    break;

            }
        }
        questionD();

        function questionE(){

        
            let question4=prompt('Do I live in Amman?')
            question4 = question4.toUpperCase();

            switch (question4) {

                    case 'Y'  :     
                    case 'YES':
                        // console.log(question1)
                        alert('You are right, I live in Shafa Badran in Amman');
                        score++;
                        break;

                    case 'NO':
                    case 'N':
                        // console.log(question1)

                        alert('Unfortunately, your answer is wrong ');
                        break;

                    default:
                        // console.log(question1)
                        alert('You have to answer yes or no');
                        break;

                }
            }
            questionE();

            Function questionF(){

            
                let question5=prompt('Do you think that i am a food lover?')
                question5 = question5.toUpperCase();

                switch (question5) {

                        case 'Y'  :     
                        case 'YES':
                            // console.log(question1)
                            alert('For sure, I hope you will my food buddy');
                            score++;
                            break;

                        case 'NO':
                        case 'N':
                            // console.log(question1)

                            alert('you are completely wrong, the most thing that i love is food ');
                            break;

                        default:
                            // console.log(question1)
                            alert('You have to answer yes or no');
                            break;

                    }
                }
                questionF();

                    


function questionG(){



for (let i = 0; i < 4; i++) {
    let input = prompt(" Guess a number between 50 and 100");


    if (input == 77) {

        alert('Correct');
        score++;

        break;

    }
    if (input > 77) {
        alert(' The number that you have written is too high')

    }

    if (input < 77) {
        alert('The number that you have written is too low')

    }

}
}

questionG();



let movies = ['Intersteller', 'Green Mile', 'The pianest', 'Catch me if you can']
let correct = false;

for (let i = 0; i < 6; i++) {
    let question2 = prompt('guess one of my faviroute movies ?')

    for (let j = 0; j < 4; j++) {


        if (question2 == movies[j]) {
            alert('Well done');
            
            correct = true
            score++;
            break;

        }


    }
    // break;
    if (correct) {
        break;
    }
    else { 
        alert('Try again') }

        if(i==5){alert('the right answers are : Intersteller, Green Mile, The pianest , Catch me if you can')}
}


alert(`your score is ${score} out of 7`)

alert('Thank you ' + username +' for playing this game with me ');









