# Week 4 - Shrek, Paper, Scissors!

This week's challenge was to create a timed functioning trivia game that meets the following acceptance criteria:

- GIVEN I am taking a code quiz
- WHEN I click the Start button
    - THEN a timer starts and I am presented with a question
- WHEN I answer a question
    - THEN I am presented with another question
- WHEN I answer a question incorrectly
    - THEN time is subtracted from the clock
- WHEN all questions are answered or the timer reaches 0
    - THEN the game is over
- WHEN the game is over
    - THEN I can save my initials and score

## The Game

My project "takes liberties" with the trivia aspect of the project, my game instead tasks the player with providing the correct answer to a rock, paper, scissors challenge.

While I believe my project still satisfies the acceptance criteria, it's lacking in polish and usability, a brief explainer is included below to compensate.

## How to Play

This is a relatively simple rock, paper, scissors game following the regular triangular rules, ie. paper beats rock which beats scissors which beats paper but with a slight twist, you're presented with the opponents move immediately and must respond correctly within 5 seconds. Answering correctly within the first 2 will begin a combo that gives an exponential score multiplier until a cap is reached.

The game ends at 10 rounds unless you have a combo active, in which case the game will run extra rounds until you lose your combo state by answering slowly or incorrectly.

* Please note that I didn't have time to make this scalable to different screen sizes, it is definitely best viewed at 1080p or close to it.
* Second note - I had big plans for filling this page with more Shrek, images, sound clips for round feedback, but alas my vision will not be realized in time.

## Links

[Deployed Game](https://charlestietjen.github.io/Trilogy-HW-Week-4-Trivia-Game/ "Shrek, Paper, Scissors!")

![ProjectSS](project-SS.png?raw=true)