// IMPORT MODULES under test here:
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

// test scissors
test('it should return scissors if 3 is thrown', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// test paper
test('it should return paper if 2 is thrown', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//test rock
test('it should return rock if 1 is thrown', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



// let userWin = false;
// let userDraw = false;
// function texIwin(userWin, compChoice){
//     if (userGuess === compChoice ) userDraw = true;
// }
