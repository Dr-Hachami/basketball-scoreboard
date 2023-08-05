Score Keeper Web App
This is a simple web app for keeping track of scores for two teams: Home and Guest. You can use this app for various games or activities that require scorekeeping.

Prerequisites
To use this app, you need a web browser with JavaScript enabled.

Getting Started
Clone or download the repository to your local machine.
Open the index.html file in your web browser.
Usage
The web app will display two scorecards, one for Home and one for Guest.
To increase the score for Home or Guest, click on the corresponding "+1", "+2", or "+3" buttons.
To reset both scores to zero, click the "Reset" button.
Technologies Used
HTML
CSS
JavaScript
Dependencies
This app uses the following external resources:

Normalize.css: A CSS file to normalize the default styles across different browsers.
Cursed Timer ULiL: A font from CDNFonts for displaying the score numbers.
File Structure
index.html: The main HTML file that contains the structure of the web app.
index.css: The CSS file that styles the web app layout and elements.
index.js: The JavaScript file that handles the scorekeeping functionality.
CSS Styles
The index.css file contains styles for the layout and appearance of the web app. It defines the following styles:

.container-head: Styles the container for the scorecards.
button: Styles the reset button.
.container: Styles the container for the scorecards and buttons.
.record: Styles the score display area for each team.
.card: Styles the scorecard container.
h3: Styles the headings for each scorecard.
span: Styles the score increment buttons.
JavaScript Functionality
The index.js file contains JavaScript functions for updating and resetting the scores. The functions include:

reset(): Resets both Home and Guest scores to zero.
addOneHome(): Adds 1 to the Home score.
addOneGuest(): Adds 1 to the Guest score.
addTwoHome(): Adds 2 to the Home score.
addTwoGuest(): Adds 2 to the Guest score.
addThreeHome(): Adds 3 to the Home score.
addThreeGuest(): Adds 3 to the Guest score.
License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit. Refer to the LICENSE file for more information.

Acknowledgments
Normalize.css: A project by Nicolas Gallagher and Jonathan Neal for providing a consistent look and feel across browsers.
CDNFonts: A free font library that provides access to various fonts for web development.
Enjoy using the Score Keeper web app! If you encounter any issues or have suggestions for improvements, feel free to contribute to the project.