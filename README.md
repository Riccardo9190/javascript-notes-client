# JavaScript Notes

A responsive note app inspired in 'Evernote'. 

The user create an account with an authentication token generated by 'JWT' and a hashed password generated by 'bcrypt'. The user can also update 
the email and password by the same process.

About the notes, there are several ways to edit and autosave. There is also a filter that searches for the desired note.

#### <em><strong>Note: Maybe the live version doesn't work correctly due to a destabilization of Heroku when calling the api, so I'll leave the steps to run locally and also some project images.</strong></em>

<!-- Simple todo-list application built with Node.js, Express and MongoDB. -->

### Technologies Used:

- React 
- Bulma
- SCSS
- Axios

### To run locally (Needs the download of [JavaScript Notes API](https://github.com/Riccardo9190/javascript-notes-api))

- Clone this repository with ```git clone https://github.com/Riccardo9190/javascript-notes-client.git```

- Access the app folder with ```cd javascript_notes```

- Install all dependencies with ```npm install```

- Create a file named '.env' on the root of the project with ```touch .env```

- Set the environment variable for API with ```echo "REACT_APP_BASE_API=http://localhost:3001" > .env```

- Run your app with ```npm start``` 

### Live version

You can check the live version here: https://js-notes-clnt.herokuapp.com/

<em><strong>Remember that the live version maybe have some Heroku problems</strong></em>

<hr/>

## Project Images

### Desktop

#### - Home screen
<img src="https://github.com/Riccardo9190/javascript-notes-client/blob/master/images/desktop/home_desktop.png" /> 

<hr/>

#### - Register screen
<img src="https://github.com/Riccardo9190/javascript-notes-client/blob/master/images/desktop/register_desktop.png" />ㅤ
