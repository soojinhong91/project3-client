# Project3-New South Waves

This is the final project completed as part of a Software Engineer Immersive course at GA Sydney. The purpose of this project was to build a web application from scratch, using MERN stack.

'New South Waves' is a web application where you can book surfing product as well as some beach product you would need.

[Play Demo Here](https://newsouthwaves.netlify.app)

[Check out server](https://github.com/soojinhong91/project3-server)

## Technologies

- MERN (MongoDB, Express, React, Node)
- Bootstrap
- Cloudinary
- Netlify, Heroku

## Latest React Features:

### Hooks & Context for authenticated user

`import { useHistory } from "react-router-dom";`

- **Hooks**: Allow to do additional things inside functional components, such as `useState`

`import React, { useContext } from "react";`

- **Context**: Share 'global' state within a many different components in a tree. This can be done with `props`, but using context makes code much easier and cleaner especially when the structure is deeply nested.

1. Create a Context to share state between components
   `createContext`: set initial value as null

1. Wrap components with provider
   `UserContext.Provider`: direct parent component where to grab the state from & pass the `userData, setUserData` value from parent component to children component

## To-do list:

- **Refactoring**: Beach/Board/Gear categories are repeated.
- **My Cart**: Using Redux
