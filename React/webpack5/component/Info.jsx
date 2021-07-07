import React, { Component } from 'react'
import '../css/info.css'

class Info extends Component {
    render() {
        return (
            <>
                <div id="info">
                    <h3>상담정보</h3>
                    <ul>
                        <li>
                            <span>이름*</span>
                            <input type="text" />
                        </li>
                        <li>
                            <span>성별*</span>
                            <input type="radio" />남
                            <input type="radio" />여
                        </li>
                        <li>
                            <span>나이*</span>
                            <input type="text" />세
                        </li>
                        <li>
                            <span>이메일*</span>
                            <input type="text" />@
                            <input type="text" />
                            <section></section>
                        </li>
                        <li>
                            <span>전회번호*</span>
                            <input type="text" />-
                            <input type="text" />-
                            <input type="text" />
                        </li>
                        <li>
                            <span id="test">상담내용</span>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </li>
                        <p>
                            <a href="#">상담신청하기</a>
                            <a href="#">취소</a>
                        </p>
                    </ul>

                </div>

            </>
        )
    }
}

export default Info