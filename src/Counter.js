import React , {useState}  from 'react';

function Counter() {

    const [number, setNumber] = useState(0); //useState 는 배열을 반환 첫번째 원소를 number에 할당, 두번쨰원소를 setNumber에 할당
                                             // useState의 인자는 초기값.

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }


    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;