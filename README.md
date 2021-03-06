
# Recipes R' Us

In this project, I've created a recipe website using React based on a recipe API given to me for a code test.



## Authors

- [@JacksonTBailey](https://github.com/JacksonTBailey)


## Lessons Learned

- How to use ReactRouter to navigate through my website.
- How to handle scroll restoration since React Router Dom V6 doesn't handle default scroll management.
- Furthered my understanding of React, SASS mixins, CSS features like clamp() and pseudo-elements, and overall file management.
- How to use Toggle in JavaScript.
- How to use Fraction.js to easily convert decimals into simple fractions.
## Tools and Technologies Used

- styled components
- SASS
- JavaScript 
- React 
- React Router (v6)
- Fraction.js



## Get Started

Open up your command line and clone this repo:
```
# Clone this repository
$ git clone https://github.com/JacksonTBailey/recipes-r-us.git

# Go into the repository
$ cd recipes-r-us

# Remove current origin repository
$ git remote remove origin

# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
```

Then you can install the project dependencies using npm:
```
# Install dependencies
$ npm install

#Start API server
$npm run start:api

# Start development server
$npm start
```
This will start a development server, the api server, and open the app in your default browser.

The api server is on: 
 ```localhost:3001/recipes``` and ```localhost:3001/specials```

The development server is on ```localhost:3000```

## Creating a Production Build
In your command line, run the following command:
```
# create a production build
$ npm run build
```
This will generate the final build and all the build files will be placed inside the public folder. You can use this folder to deploy the app to netlify.# recipes-r-us-online

