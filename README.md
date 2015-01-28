## Website Performance Optimization portfolio project

To see the production version of this project view the gh-pages link * <a href="http://renniesb.github.io/frontend-nanodegree-mobile-portfolio/">mobile portfolio optimization- production version</a>
the developement version is located in my master branch. * <a href="https://github.com/Renniesb/frontend-nanodegree-mobile-portfolio">mobile portfolio optimiztion- master branch </a>


## index.html optimizations

In order to optimize this page I shrinked and compressed the pizzeria image. I also compressed the profile pic image. I looked at the critical path and differed javascript deployment till the end of the document. I also took the necessary latin styles from the google style sheets and placed them in style.css. I then difered the deployment of the style.css stylesheet in a javascript statement at the end of the document.

## pizza.html optimizations

In order to optimize this page I made changes to the main.js file. My changes were made to the updatePositions() function on line 527. I moved out the calculation that was constant in the for loop.This calculation was the scrollTop/1250. I instead used the window.scrollY value that is stored in the lastScrollValue variable collected in the onScroll() function on line 510. I divided this value by 1250 and placed that variable outside the for loop. I also moved the items array out of the updatePositions function since it does not need to be created every time the function is called. I declared the items array on line 506 and then created it once in the onDocumentLoad function within a statement that sets the value of that array(on line 576). I made changes to the changePizzaSizes Function, I took the selectPizzas array out of the function and the dx and newwidth variables out. I chose to reference the first element of selectPizzas array since all elements in that array have the same width value.  I also decreased the number of pizzas to the amount that are visible by the user.

