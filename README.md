## Website Performance Optimization portfolio project

To see the production version of this project view the gh-pages link * <a href="http://renniesb.github.io/frontend-nanodegree-mobile-portfolio/production">mobile portfolio optimization- production version</a>
the developement version is located in my master branch. * <a href="https://github.com/Renniesb/frontend-nanodegree-mobile-portfolio">mobile portfolio optimization- master branch </a>


## index.html optimizations

In order to optimize the speed of this page I shrinked and compressed the pizzeria image using the program <a href="http://luci.criosweb.ro/riot/">Riot</a> a free image optimization program. I also compressed the profile pic image. I looked at the critical path and differed javascript deployment till the end of the document. I also took the necessary latin styles from the google style sheets and placed them in style.css. I then difered the deployment of the style.css stylesheet in a javascript statement at the end of the document.

## main.js optimizations

In the updatePositions() function on line 527 I made the following changes-

1. I moved out the calculation that was constant in the for loop.This calculation was the scrollTop/1250. I instead used the window.scrollY value that is stored in the lastScrollValue variable collected in the onScroll() function on line 510. I divided this value by 1250 and placed that inside the phaseNumber variable outside the for loop. 

2. I stored the items.length value in the itemsLength variable as a parameter in the for loop to avoid recalculating it as I am iterating the items array.  

3. I moved the items array out of the updatePositions function since it does not need to be created every time the function is called. I declared the items array on line 506 and then created it once in the onDocumentLoad function within a statement that sets the value of that array(on line 576). 


4. I used the style property translateX() instead of .basicLeft(line 541) in order to avoid browser re-layouts that take time. In order for the browser to utilize this property I had to put the element on its own layer in the css file using a style trick on the .mover class.


Other changes-

I used the requestAnimationFrame method to decouple the scroll event from the updatePositions() function on line 520. Surrounding this line are helper functions and statements designed to prevent stacking of the requestAnimationFunction and to collect the latest scroll values. I incorporated the requestAnimationFrame() to insure a smoother animation. 

I made changes to the changePizzaSizes Function, I took the selectPizzas array out of the function and the dx and newwidth variables out. I chose to reference the first element of selectPizzas array since all elements in that array have the same width value.  

I decreased the number of pizzas to the amount that are visible by the user.

##minification 

I used the build tool gulp.js in order to minify my javascript and some image files. I saved these files within the production folder. This folder contains the complete production version of the project.

##References

See <a href="https://github.com/Renniesb/frontend-nanodegree-mobile-portfolio/edit/master/references.txt">references.txt</a> for a list of my references



