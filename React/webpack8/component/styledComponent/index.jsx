import React from 'react'
import styled from 'styled-components'

const ButtonStyle = {
    "background": "black",
    "border": "none",
    "color": "#ffff",
    "padding": "7px 14px"
}

const Button = styled.button`
    background:#000;
    boder:none;
    color:#fff;
    padding: 7px 14px;
`
const ButtonHover = styled(Button)`
    background : #007bff;
    :hover{
        background:#0069d9
    }
`
const Index = () => {
    const inputRef = React.useRef()
    const handleClick = () =>{
        console.log(inputRef.current)
        inputRef.current.focus()
        inputRef.current.style.height = "100px"
    }
    return (
        <>
            <div>
                <input type="text" ref={inputRef} />
                <button
                 style={ButtonStyle}
                 onClick={handleClick}
                 >
                    Hello??
                </button>
                <Button onClick={()=>{handleClick()}}>
                    adsfsdfsdf
                </Button>
                <ButtonHover onClick={()=>{handleClick()}}>호버 버튼</ButtonHover>
            </div>
        </>
    )
}

export default Index