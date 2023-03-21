import './App.css';
import React from 'react';
import{
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

const oButton =[
  "+",
  "-",
  "*",
  "/",
];

const num1State =atom({
  key: "num1State",
  default:""
});

const num2State =atom({
  key: "num2State",
  default:""
});

const num1useState= selector({
  key:"num1useState",
  get:({get})=>{
    const num1= get(num1State);

    return num1;
  },
});

const num2useState = selector({
  key:"num2useState",
  get: ({get}) =>{
    const num2 = get(num2State);

    return num2;
  },
});

function NumInput(){
  const [num1, setNum1]= useRecoilState(num1State);
  const [num2, setNum2] =useRecoilState(num2State);
  const onChange1=(event)=>{
    setNum1(event.target.value);
  }
  const onChange2=(event)=>{
    setNum2(event.target.value);
  }

  return(
   <div><h2>
    Number1 <input type="number" id="num1" value={num1} onChange={onChange1}/><br/>
    Number2 <input type="number" id="num2" value={num2} onChange={onChange2}/><br/>
    </h2>
    <hr/>
    Echo:{num1}, {num2}
   </div>
  );
}


function Plus(){
  const plus1 = useRecoilValue(num1useState);
  const plus2 = useRecoilValue(num2useState);
  const presult= Number.parseInt(plus1)+Number.parseInt(plus2);

  return presult;

}

function Minus(){
  const minus1 = useRecoilValue(num1useState);
  const minus2 = useRecoilValue(num2useState);

  return <>{Number.parseInt(minus1)-Number.parseInt(minus2)}</>;
}

function Multiply(){
  const multiply1 = useRecoilValue(num1useState);
  const multiply2 = useRecoilValue(num2useState);

  return <>{multiply1*multiply2}</>;
}

function Divide(){
  const divide1 = useRecoilValue(num1useState);
  const divide2 = useRecoilValue(num2useState);

  return <>{divide1/divide2}</>;
}

function Operation(){
  return(
    <div>
      <button >+</button><br/>
      <button>-</button><br/>
      <button>*</button><br/>
      <button>/</button>
    </div>
  )
}

function App(){

  return(
    <RecoilRoot>
      <div className='App'>
      <h1>GCU CALCULATOR</h1>
      <NumInput/>
      <div> <h3>Operator&nbsp;&nbsp;&nbsp;Result</h3>
      <Operation/>
      </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
