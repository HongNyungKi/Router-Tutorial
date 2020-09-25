import React,{useEffect} from 'react';

function History({history}){
    const goBackFn = ()=>{
        history.goback();
    }
    const goHomeFn = ()=>{
        history.push('/');
    }
    useEffect(
            ()=>{
                console.log(history);
                const unblock = history.block('정말 떠나시겠습니까?');
                return () => { unblock() }
            },[history]
        )
    return (
        <div>
            <button onClick={goBackFn}>뒤로가기</button>
            <button onClick={goHomeFn}>홈으로가기</button>
        </div>
    )
}

export default History;