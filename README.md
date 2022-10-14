![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Rock, Paper, Scissors, Lizard
The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The game was originally created by Sam Kass with Karen Bryla. The winner is the one who defeats the others. In a tie, the process is repeated until a winner is found.

![game_page](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/game-page.png)

## Features
In this section, different parts of the website are breifly shown with and describe with images.

### Players 
There are two players involved: a person (referred as You) and a Non Player Character (NPC). Both have images of the chosen option, and will keep chaning if a different option is selected. 

![players](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/players.png)

![rock](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/rock.jpeg)
![rock](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/paper.jpeg)
![rock](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/scissors.jpeg)
![rock](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/lizard.jpeg)
![rock](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/spock.jpeg)


### Player Choice Area
The player has the option to choose from five options; Rock, Paper, Scissors, Lizard and Spock.The buttons are interactive and will be highlighted when hovered over.  
![select option](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/choice-button.png)

### The Score Area
This section shows the score of both player fof the game and the user have the option to play as long they wish without the need of to restart the game.
![scores](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/game-score.png)


### Winner
This section shows the overall winner of the game based on the games won. It will also show which choice wins each round. For Example, rock beate scissors, paper beats rock, and Lizard beats Spock.
![winner](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/winner.png)

### Footer
The footer shows the rules of the game and would stay on the page at all time should a player want to read or cofirm.
![rules of the game](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/footer-rules.png)

## Features Left to Implement
Further details such as adding a loop to terminate the game early or asking user how many games would they want to play could be added to further improve the game. 

## Testing
The project is responsive to different screen sizes including mobile and tablets.

### Validator Testing
- JavaScript
No errors were returned when passing through the official JSHint validator
![javascript file](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/javascriptReport.png)
- HTML
No errors were returned when passing through the official W3C validator
- CSS
No errors were found when passing through the official (Jigsaw) validator
![index_valid](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/html-validation.png)

![css_valid](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/css_validator.png)

Finally, the website is also tested by the light house and returned oustanding results.
![light_house_report](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/lighthouse_report.png)

- Fixed Bugs
There was an error when calling functions choice by the id. It turns out we cannot use this. I changed the id and added data-type attribute which fixed the issue. 
Previous small screen bug fix created issue for larger screen use, which now has been fixed by using media queries for footer and winner-annouce section.

## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab and Pages
From the build and deploymet > from a source > deployment from a branch, main , root > save.
Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - ![](https://khanrana.github.io/community_boxing_club/)

## Credits
- Content
The rules of the game were take from the internet blog
The icons in the player choice were taken from Font Awesome
The website is inpired by the Big Bang Theory series
All code has been written by myself; however, some inspiration have been from number of website. 
including but not limited to the code institute.

- Media
All photos are taken from open source website [Free Icon library](https://icon-library.com/icon/spock-icon-5.html).
