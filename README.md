# Flex Module

This is a static, mobile-friendly webpage containing **4 square boxes** with colors red, green, blue, and white. Each square box has a **max-width of 230px** and contains a button that has a click event that changes the color of the other buttons to its color, except for the white box. The white box always remains white and when its button is clicked, it resets the colors of the other buttons to their original colors. The **4 square boxes** are constrained to a container of **980px**.

Flexbox solves problems.

### Install
Install gulp and gulp-sass dependencies from package.json and run Gulp tasks. Load app\index.html into your browser.

    $ npm install


This module requires jQuery for the document traversal, manipulation, and event handling. We are grabbing this asset from a CDN and adding it to the build pipeline. This is accomplished via Gulp as well as compiling the Scss. Scss was chosen for this small task (coding sample) for the use of variables and mixins. (makes things much easier )

    
### Run Tasks

    $ gulp
Runs both Sass and CDN tasks.