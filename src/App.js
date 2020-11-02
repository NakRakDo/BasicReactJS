import React from 'react';
import HelloWorld from './Hello.js';
import './App.css';
import Wrapper from './Wrapper.js';
import Counter from './Counter.js';
import InputsSample from './InputSample.js';


function App() {                                                                              //이함수가 -> html형태로 바뀌어서 public 폴더의 index.html의 id가 root 인 태그안에 삽입되는것
  return (                                                                                      //jsx내부에서 자바스크립트 변수 사용 : 중괄호로 묶어서 사용한다. 
    <Wrapper>
      <HelloWorld name="react" color="red" isSpecial={true} />
      <HelloWorld /> {/* defaultProps 가 적용된다. */}
      <Counter />
      <InputsSample />
    </Wrapper>
  );
}

export default App;
