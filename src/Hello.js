import React from 'react'; // react를 가져온다.

//컴포넌트
//컴포넌트 생성방법
//1 함수(여기서 해본다)
//2 클래스

//컴포넌트 생성
function HelloWorld({name, color, isSpecial}) {
    return ( 
    <div style={{color : color}}>
        <b>{isSpecial ? '스페셜하다.' : '스페셜하지않다.'}</b>
        안녕하세요 {name}
    </div> //-> jsx
    );
}

HelloWorld.defaultProps = {
    name: 'NoName',
    color: 'black'
};

export default HelloWorld;