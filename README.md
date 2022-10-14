![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Rock, Paper, Scissors, Lizard
The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The game was originally created by Sam Kass with Karen Bryla. The winner is the one who defeats the others. In a tie, the process is repeated until a winner is found.

![game_page](https://github.com/KhanRana/lizard_spock_expansion/blob/main/assets/images/readme-report/game-page.png)

## Features
In this section, different parts of the website are breifly shown with and describe with images.

### Navigation Bar 
Featured on all three pages, the full responsive navigation bar includes links to the Logo, Home page, About Us, Gallery, Membership page and is identical in each page to allow for easy navigation.

![players]()


### The banner imager
The banner includes a photograph with text overlay to with a motivation quotation to keep training to get the results that they want.
This section introduces the user to the club website with beautiful smily animation to grab their attention by welcoming them.
![landing_image](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/banner.png)

### Motivation/reason section
The club motivation/reasons section will allow the user to see the benefits of boxing, as well as the benefits of exercise.
This should encourage the user to consider running as their form of exercise.
![motivation](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/reasons.png?raw=true)


### Group Class times
This section will allow the user to see exactly when the meetups will happen, where they will be located and how long the run will be in kilometers.
This section will be updated as these times change to keep the user up to date.
![class_times](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/class_times.png)

##About Us
This section describes clubs ambition and who they are motivating others to get fit and strong.
![about_us_page](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/about.png)

## Gallery
The gallery will provide the user with supporting photos and videos to see them in training. 
This section is valuable to the user as they will be able to easily identify the types of events the organisation puts together.
![gallery_page](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/gallery.png)

## The Membership Page
This page will allow the user to get signed up to Love Running to start their running journey with the community. 
The user will be able specify if they would like to take part in road, trail or both types of running. The user will 
be asked to submit their full name, email address, age and reasons for joining the club.
![membership_page](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/membership.png)

## Features Left to Implement
Further details such as address & telephone number can be added to the footer if the website goes to a club owner.
There is always room for improvement, and there is number of other feature that can be added: the one eature I did 
have was fighter or list of ameature fighter on the website.

## Testing
The project is responsive to different screen sizes including mobile and tablets.

### Validator Testing
- HTML
No errors were returned when passing through the official W3C validator
- CSS
No errors were found when passing through the official (Jigsaw) validator
![index_valid](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/index_pass.png)
![gallery_valid](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/gallery_validated.png)
![about_valid](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/about_pass.png)
![member_valid](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/membership_validated.png)
![css_valid](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/css_validated.png)

The website membership form is also validated for type.
[type_valid](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/type_check.png)

Finally, the website is also tested by the light house and returned oustanding results.
![light_house_report](https://github.com/KhanRana/community_boxing_club/blob/main/assets/media/lighthouse_report.png)

- Fixed Bugs
There was an error when submitting the membership.html. It turns out we cannot 'required' to a drop down select. 
When the 'required' was removed from the select, html returned no errors.
Footer was moving up the screen on about.html in mobile and tablet view. I have fixed is by sticking it and moving it to the bottom using '100vh'.
Previous small screen bug fix created issue for larger screen use, which now has been fixed by using body 100vh and positioning footer relatively.

## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab and Pages
From the build and deploymet > from a source > deployment from a branch, main , root > save.
Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - ![](https://khanrana.github.io/community_boxing_club/)

## Credits
- Content
The text for the Home page was taken from healthline.come
Instructions on how to implement form validation on the Membership Form was taught in the program
The icons in the footer were taken from Font Awesome
The website is inpired by various tutorials and websites, including but not limited to the code institute.

- Media
All photos are taken from open source website [UpSplash](https://unsplash.com/images).
All videos are taken from open source website [Pexels](https://www.pexels.com/videos/)