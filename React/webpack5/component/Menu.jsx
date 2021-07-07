import React,{Component} from 'react'
import '../css/menu.css'


class Menu extends Component{
    render(){
        return(
            <>
            <div id="menu">
                <h1>상담신청</h1>
                <ul>
                    <li>상담게시판</li>
                    <li>지원하기</li>
                    <li>자주묻는질문</li>
                </ul>

            </div>
            </>
        )
    }
}

export default Menu