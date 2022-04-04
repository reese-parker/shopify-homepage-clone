# Shopify Homepage Clone

[Use the app here](https://reese-parker.github.io/shopify-homepage-clone/)


## Description

This project is designed to be a clone of Shopify's homepage (April 2022).

## Build process and Design

* My aim for this project was to replicate the original page with the challenge of styling components to look as close to the original as possible, without copying code. The result is not a pixel-perfect clone but offers my approach to how I would achieve the look. I used a browser inspector for colour values and SVG icons, all other code is my interpretation of the existing design.
* The app is built with React and styled using CSS Modules. Third party libraries are used for motion effects.
* Mobile, tablet and desktop views are designed to reflect breakpoints similar to the original homepage.
* Custom hooks are used to manage state toggling and modal menus.


## How it works


* Components are built with a mobile-first approach and have a 1100px min-width breakpoint for desktop view. Several components feature an additional breakpoint at 750px for tablet views.
* The navbar includes a mobile menu. Transitions for menus are achieved with react-transition-group; state for opening the menu is managed with a custom hook to toggle boolean values, and another hook is used to listen for clicks outside of menu elements to handle closing. 
* Responsiveness is achieved with both flexbox and grids throughout the different components.
* The majority of links and buttons are styled divs to replicate the originals without the intended functionality.
* Images and logos are copies and screenshots taken directly from Shopify's website. The SVGs are copied from the original using a browser inspector.
* The footer component contains a link to the top of the page. The scrolling effect is handled with react-scroll.

## Future Features

* Review code for opportunities with semantic HTML and accessibility, such as divs styled to replicate buttons.

## Acknowledgements

* This project is not intended for use outside of demonstrating personal ability to build a page based on an existing design.



## Installation

* Clone the repo by opening terminal and typing

```bash
$ git clone https://github.com/reese-parker/shopify-homepage-clone.git
```

* Navigate to the new folder by typing into terminal:
```bash
$ cd shopify-homepage-clone
```

* Install the required dependencies by typing into terminal:
```bash
$ npm install
```
* Run the project by typing into terminal:
```bash
$ npm start
```