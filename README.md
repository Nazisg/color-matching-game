# Color Matching Game

## Overview

This is a simple color-matching game built using HTML, SCSS, and JavaScript. The game allows players to test their color-matching skills within a given time frame. Players must match the displayed color with one of the colored boxes to earn points.

## Game Flow

1. **Game Initialization**:
   - When the page loads, the user selects the desired game duration from a dropdown menu (1, 3, or 5 minutes).

2. **Starting the Game**:
   - Clicking the "Start" button initiates the game.
   
3. **Gameplay**:
   - The timer starts counting down from the selected duration.
   - Players must quickly identify and click on the colored box that matches the displayed RGB color value.
   - Successful matches earn players points, and a success message is displayed.
   - Failed attempts trigger a fail message.

4. **Ending the Game**:
   - When the timer reaches zero, the game ends.
   - The player's final score is displayed.
   - Players have the option to play again by clicking the "Play again" button.

## How to Play

1. Select your preferred game duration (1, 3, or 5 minutes) from the dropdown menu.
2. Click the "Start" button to begin the game.
3. Identify and click the colored box that matches the displayed RGB color.
4. Earn points for successful matches.
5. Continue playing until the timer runs out.
6. After the game ends, view your final score and consider playing again!

## Development

- This game is built using HTML, SCSS, JavaScript, and the jQuery library.
- The game logic, including random color generation and scoring, is implemented in JavaScript.
- Styling is done using SCSS.
- jQuery is used for DOM manipulation.

## How to Run

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Select a game duration and click "Start" to play the game.

