# rock-paper-scissors
*The Odin Project JS Fundamentals Project

**My attempt at a simple Rock, Paper, Scissors game using the console.

For those unaware of the game:
- There are two players
- Both will choose one of the three options (rock, paper, or scissors) and display their choice simultaneously
- rock beats scissors, paper beats rock, scissors beats paper
- If both players choose the same option, it is a draw

At this stage, it is only meant to be played using the **browser's console**. 

Next thing to do is:
~~1. fix win, loose, tie results so that each round distributes victory counter appropriately.~~
~~2. allow player input (case in-sensitive)~~
~~3. consider using more helper functions~~


**Update**

So I've revisited the project after completing the DOM lesson. 
- I've created a *very* basic UI.
- Made a visual scoreboard to keep track of each player's win count
- Added buttons for each of the player choices (rock,paper,scissors)
- When player or computer reaches 5 wins, buttons are replaced by "play again" button
- play again button resets the game

Some slight bugs are:
- Upon loading the site, scores do not display 0s (not that big of a deal since the 0s appear upon clicking play again button)
- results log for each round disappear after new button is clicked (maybe this is ideal for a cleaner interface)
- javascript file is a mess (not really a bug but its the opposite of 'clean code')

It's not the prettiest game in the world but I never intended to make Dark Souls. Perhaps I will return to make the code more readable and efficient. 
Things such as remove repeated code, better organization, and useful comments(if any at all). 

I could also add graphics, animations, sound fx, a color palette, prettier fonts..... etc. It can go on forever, but I should move on. I doubt this will be
a portfolio project and I've feel as though I've already gained a lot of experience from completing this project. And without looking at any one else's completed code.