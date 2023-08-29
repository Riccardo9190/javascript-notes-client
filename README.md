# Javascript Notes

A responsive note app inspired in 'Evernote'. 

The user create an account with an authentication token generated by 'JWT' and a hashed password generated by 'bcrypt'. The user can also update 
the email and password by the same process.

About the notes, there are several ways to edit and autosave. There is also a filter that searches for the desired note.

### Technologies Used:

- React 
- Bulma
- [rbx](https://dfee.github.io/rbx/)
- SCSS
- Axios

### To Run Locally (Needs the download of [JavaScript Notes API](https://github.com/Riccardo9190/javascript-notes-api))

- Clone this repository with ```git clone https://github.com/Riccardo9190/javascript-notes-client.git```

- Access the app folder with ```cd javascript-notes-client```

- Install all dependencies with ```npm install```

- Set the environment variable for API:

```shell
echo "REACT_APP_BASE_API=http://localhost:3001" > .env
```

- Run your app with ```npm start``` 

### Live Version

~~You can check the live version here: https://js-notes-clnt.herokuapp.com/~~

Update: Heroku server disabled.

<hr/>

## Project Images

### - Home screen
<img src="https://github.com/Riccardo9190/javascript-notes-client/blob/master/public/home.png" /> 

<hr/>

### - Register screen
<img src="https://github.com/Riccardo9190/javascript-notes-client/blob/master/public/register.png" />ㅤ

<hr/>

### - Login screen 
<img src="https://github.com/Riccardo9190/javascript-notes-client/blob/master/public/login.png" />

<hr/>

### - Note screen 
<img src="https://github.com/Riccardo9190/javascript-notes-client/blob/master/public/note.png" />ㅤ

<hr/>

### - Notes screen 
<img src="https://github.com/Riccardo9190/javascript-notes-client/blob/master/public/notes.png" />

<hr/>

### - User edit screen 
<img src="https://github.com/Riccardo9190/javascript-notes-client/blob/master/public/users_edit.png" />ㅤㅤㅤㅤ
