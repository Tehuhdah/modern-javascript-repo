// 35:00

// Break and Continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  // Without this if statement, 0 gets displayed to the console.
  if (scores[i] === 0) {
    // If the condition above is met, we do not execute
    // the rest of the codeblock, but we continue back at the top of the iteration.
    continue;
  }

  console.log("Your score: ", scores[i]);

  // Without this if statement, all the scores gets displayed to the console.
  if (scores[i] === 100) {
    console.log("Congrats, you got the top score!");
    // If the condition above is met, we stop the iteration and break
    // out of the code block.
    break;
  }
}
