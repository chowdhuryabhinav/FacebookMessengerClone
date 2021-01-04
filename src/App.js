import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from 'react';
import { Button, InputLabel,Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const[input,setInput] = useState('');
  const [messages,setMessages] = useState([{username: 'abhinav', message: 'Hey guys'}, {username:'swagat',message:'Whats up!'}]);
  const[username,setUsername] = useState('');

  useEffect(()=>{
      db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
        setMessages(snapshot.docs.map(doc => ({id:doc.id ,message :doc.data()})))
      })
  },[])

  useEffect(()=>{
     setUsername(prompt('Enter your name'));

  },[])

  console.log(input);
  console.log(messages);

  const sendMessage = (event)=>{
        event.preventDefault();
        // setMessages([...messages,{username:username, text:input}]);
        db.collection('messages').add({
          message: input,
          username: username,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
        }

  return (
    <div className="App">
      <br/>
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"/>
      <h1>Hello Programmers 🚀
      </h1>
  <h1>Welcome {username}</h1>
      
      <form className="app_form"> 
      <FormControl>
         <InputLabel>Enter a message...</InputLabel>
         <Input value={input} onChange={event => setInput(event.target.value)}/>
         <IconButton disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
           <SendIcon/>
         </IconButton>
         
  
</FormControl>
     
      </form>

     <FlipMove>
      {
        messages.map(({id,message})=>(
        <Message key={id} username={username} message={message}/>
        ))
      }
      </FlipMove>

    </div>
  );
}

export default App;
