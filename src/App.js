import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  let numRef=useRef()
  return (
    <div className="App">
      <h1> LOOPS</h1>
      <div className="bgContainer">
        <div>
          <button
            onClick={() => {
              let a = 1;
              while (a < 10) {
                console.log(`${a} is smaller than 10 `);
                a++;
              }
            }}
          >
            While-Loop
          </button>
          <div>
            <button
              onClick={() => {
                let a = 0;
                do {
                  console.log(`${a} is smaller than 1`);
                  a--;
                } while (a > -20);
              }}
            >
              Do-While-Loop
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                for (let i = 1; i < 30; i++) {
                  console.log(`i------>${i}`);
                }
              }}
            >
              For-Loop
            </button>
          </div>
          <p>1000 tables except 767,594,673,321,158,97,893. </p>
          <div>
            {" "}
            <button
              onClick={() => {
                for (let i = 1; i < 1001; i++) {
                  if (
                    i == 767 ||
                    i == 594 ||
                    i == 673 ||
                    i == 321 ||
                    i == 158 ||
                    i == 97 ||
                    i == 893
                  ) {
                    continue;
                  }
                  for (let j = 1; j < 11; j++) {
                    console.log(`${i} X ${j} = ${i * j}`);
                  }
                }
              }}
            >
              nested-For-Loop
            </button>
          </div>
          <p>100 multiples except 55,,56,57,58,74,13,21,93,89.</p>
          <div>
            <button
              onClick={() => {
                for (let i = 1; i < 101; i++) {
                  if (
                    i == 55 ||
                    i == 56 ||
                    i == 57 ||
                    i == 74 ||
                    i == 13 ||
                    i == 21 ||
                    i == 89 ||
                    i == 93
                  ) {
                    continue;
                  }
                  let j = 1;
                  while (j < 101) {
                    console.log(`${i} X ${j} = ${i * j}`);
                    j++;
                  }
                }
              }}
            >
              For-While-Loop
            </button>
          </div>
        </div>
      </div>
      <h1>MAKE Your OWN TABLE</h1>
      <div className="bgContainer-2">
<form>
  <div>
    <label>Enter a Number:</label>
    <input type="number" ref={numRef}></input>
  </div>
  <div>
    <button type="button" onClick={()=>{
      let i=Number(numRef.current.value)
      for(let j=1; j<11;j++){
        console.log(`${i} X ${j} = ${i*j}`)
      }
    }}>Click-ME</button>
  </div>
</form>
      </div>
    </div>
  );
}

export default App;
