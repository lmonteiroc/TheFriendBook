import { useState, seEffect } from "react";


import { remove} from './botao';
import './App.css';
import { adicionaNomeComSobrenome} from './botao';
//import { remove } from './botao';
import './index.css';

function App() {
  const [text, setText] = useState("");
  const [postText, setPostText] = useState([]);
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)

  function adicionar() {
    const addText = (text);
    const post = [...postText, addText];

    setPostText(post);
    setCount(count + 1)
   
    
  }


function nar() {
  console.log(like +1)
      setLike(like + 1)

  }



  return (
    
    <div >
      <h1> The Friendsbook</h1>
      <textarea
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite um nome"
      />

      <button onClick={adicionar}>Adicionar</button>

      <br />
      
      <div id="notification">
      <p>Your friend, Harry, just shared a post!</p>
      <button onClick={remove}>Remove alert</button>
      </div>
{console.log(remove)}
      <div id="new">
      <b><span id="count"></span></b> {count} post(s)!
      </div>
      <div class="post">
        <p>You wanna see why DOM manipulation and Dynamic webpages is interesting?
        Let me tell you a trick. This trick will work on any website. Open the
        console tab. Type "<b>document.body.contentEditable =
          'true';</b>". Voila! You can now edit the webpage text that you are
        in! </p>
        {like } <button onClick={()=>nar()}>Like</button>
      <button>Comment</button>
       </div>
      {postText.map((item) => (
       <div class="post">
        <p key={item} >{item}</p>
        {like } <button onClick={()=>nar()}>Like</button>
      <button>Comment</button>
      </div>   
      ))
      }

    
    </div>
  );
}

export default App;
