import React, {useRef, useState} from 'react';
import HelloWorld from './Hello.js';
import './App.css';
import Wrapper from './Wrapper.js';
import Counter from './Counter.js';
import InputsSample from './InputSample.js';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';

function App() {                     //이함수가 -> html형태로 바뀌어서 public 폴더의 index.html의 id가 root 인 태그안에 삽입되는것
    const [inputs, setInputs] = useState({
      username: '',
      email: '',
    });

    const {username, email} = inputs;

    const onChange = (e) => {
      const {name, value} = e.target;
      setInputs({
        ...inputs,
        [name]: value
      })
    }

    const [users, setUsers] = useState([
      {
          id: 1,
          username: 'NakRakDo1',
          email: 'kyunghun96@gmail.com',
          active: true,
      },
      {
          id: 2,
          username: 'NakRakDo2',
          email: 'kyunghun96@gmail.com',
          active: false
      },
      {
          id: 3,
          username: 'NakRakDo3',
          email: 'kyunghun96@gmail.com',
          active: false
      }
  ]);

  //useRef로 상태관리
  const nextId = useRef(4);

  const onCreate = () => {
    // users 배열에 user 추가하기
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]); //불변성 유지: 기존값복사후 추가
    //setUsers(users.concat(user)); //불변성 유지: 기존값복사후 추가(concat 함수 사용)
    //
    setInputs({
      username: '',
      email: '',
    });
    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    //setUsers(users.map( user => user.id === id ? {...user, active: !user.active} : user));
    setUsers(users.map(function(user) {
      return user.id === id ? {...user, active: !user.active} : user;
    }))
  };

  return (                                                                                      //jsx내부에서 자바스크립트 변수 사용 : 중괄호로 묶어서 사용한다. 
    <Wrapper>
      <HelloWorld name="react" color="red" isSpecial={true} />
      <HelloWorld />  {/* defaultProps 가 적용된다.*/}
      <Counter />
      <InputsSample />
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </Wrapper>
  );
}

export default App;
