import React from 'react'
import "./index.css"



const Index = () => {
 

    return(
        <div className='main'>
           <h1> Project (Personal) </h1>
            <div className='list'>
                
                1. React + Mock-adapter + Typescript  
                <div className='dsc'>
                1. 로그인  (id: userid1, password: password1) 
                    <div className='dtl'>- fake-data +  mock-adapter 로 구현</div>
                </div>
                <div className='dsc'>
                2. 문의 리스트 
                    <div className='dtl'>- fake-data +  mock-adapter 로 검색, select 기능 구현  </div>
                </div>
                <div className='dsc'>
                <a href='https://lmhmsk.github.io/mock-adapter/' >자세히 보기</a>  
                </div>
               
            </div>
            <div className='list'>
                
            2. React + Redux + Styled-components + Typescript + Node.js 
                <div className='dsc'>
                1. 로그인  (back-end 준비 중) 
                    <div className='dtl'>- 로그인 및 token 발행 </div>
                </div>
                <div className='dsc'>
                2. 회원가입 (준비 중)
                <div className='dtl'>- 정규 체크, 중복 체크 등 </div>
                </div>
                <div className='dsc'>
                3. 페이지네이션 
                <div className='dtl'>- JSONPlacheholder 사용하여 구현 </div>
                </div>
                <div className='dsc'>
                4. 무한 스크롤 
                <div className='dtl'> - kakao 도서 검색</div>
                </div>
                <div className='dsc'>
                5. 폼 추가 (진행 중)
                <div className='dtl'> - redux 사용하여 구현 </div>
                </div>
                <div className='dsc'> 
                컴포넌트  
                <div className='dtl'> 1. Modal </div>
                <div className='dtl'> 2. loading </div>
                </div>
                
                <div className='dsc'>
                <a href='https://lmhmsk.github.io/client-server/' >자세히 보기</a>  
                </div>
            </div>

        </div>
    )
}

export default Index