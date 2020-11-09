import React from 'react';

// user Component
function User({user, onRemove, onToggle}) {
    return (
        <div>
            <b 
            style={{
                color: user.active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => {onToggle(user.id)}}
            >{user.username}</b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

//user ComponentList 
function UserList({ users, onRemove, onToggle }) {
    
    // 배열의 내장함수를 사용해 배열요소들을 컴포넌트화하여 요소로 리턴할 배열에 집어넣고 리턴한다. 
    //리턴 될때는 요소를 표현 
    // <User user={user} key={user.id}/>
    // <User user={user} key={user.id}/>
    // <User user={user} key={user.id}/> 이렇게 div 내부에 들어간
    return (
        <div>
            {
                users.map(
                    function(user) {
                        return (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />);
                    }
                )
            }
        </div>
    )
}

export default UserList;