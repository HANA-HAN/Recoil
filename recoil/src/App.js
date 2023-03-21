import './App.css';
import React from 'react';
import{
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

const textState=atom({
  key:"textState",
  default:""
});

const charCountState = selector({
  key:"charCountState",
  get:({get})=>{
    const text = get(textState);
    return text;
  }
})

function TextInput(){
  const [text, setText]=useRecoilState(textState);

  const onChange = (event) =>{
    setText(event.target.value);
  }

  return(
    <div>
      <input type="text" value={text} onChange={onChange}/>
      <br />
      ECHO: {text}
    </div>
  );
}

function CharacterCount(){
  const digit = useRecoilValue(charCountState);

  return <>add 10: { Number.parseInt(digit)+10}</>;
}

function CharacterCounter(){
  return(
    <div>
      <TextInput/>
      <CharacterCount/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <div className='App'>
          <h1>Hello GCU-Kakao</h1>
          <h2>ADD TEN</h2>
          <CharacterCounter />
        </div>
      </RecoilRoot>
    </div>
  );
}

export default App;
