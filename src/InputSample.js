import React, {useState, useRef} from 'react';

// function InputSample() {
//     const [text, setText] = useState('');

//     const onChange = (e) => {
//         setText(e.target.value);
//     }

//     const onReset = () => {
//         setText('');
//     }

//     return (
//         <div>
//             <input onChange={onChange} value={text}/>
//             <button onClick={onReset}>초기화</button>
//             <div>
//                 <b>값 : {text}                    
//                 </b>
//             </div>
//         </div>
//     )
// }
//======================================================다중 인풋(객체)
function InputsSample() {
    //useState로 객체를 초기화하고 사용
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })  

    const nameInput = useRef(); // useRef로 특정 Dom 선택하기
    //비구조할당으로 기존 값 로컬로 저장
    const {name, nickname} = inputs;

    //변화시 변화하는 부분의 name 특성과 vlaue 값을 가져와 기존 inputs 값을 복사후에 변경한다.
    const onChange = (e) => {
        const {name, value} = e.target; //객체상태를 업데이트를 할때는 기존상태를 복사해서 업데이트해줘야한다. ...inputs 가 기존값가져오는 코드
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    }

    return (
        <div>
            <input name="name" onChange={onChange} placeholder="이름" value={name} ref={nameInput}/>
            <input name="nickname" onChange={onChange} placeholder="닉네임" value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {name} ({nickname})                    
                </b>
            </div>
        </div>
    )
}

export default InputsSample;