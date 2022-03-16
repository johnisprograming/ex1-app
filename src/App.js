import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  // 배열 반환 = useState(초기값);
  let [number, setNumber] = useState(0);

  // [+] 버튼 클릭했을 호출되는 함수
  // number 값을 1 증가하는 일 수행
  const onAdd = () => {
    // state 값을 변경할 때는 반드시 setter를 사용해야 함 : setNumber()
    setNumber(number + 1);
  }

  return (
    <div className="App">
      App 입니다 : {number} &nbsp;
      {/* onClick={함수명} */}
      <button onClick={onAdd}>+</button>

      <Header number={number}></Header>
      <Content onAdd={onAdd}></Content>
    </div>
  );
}

export default App;