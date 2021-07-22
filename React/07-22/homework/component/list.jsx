import React from 'react'


const List = () => {

    return (
        <>
            <ul>
                <li key={k}>
                    <span onClick={() => cisibleContent(k)}>
                        {state.visible === k
                            ? <input
                                type="text"
                                value={content}
                                onKeyDown={visibleEnter}
                                onChange={visibleChange}
                                data-key={k}
                            />
                            : v
                        }
                    </span>
                    <button onClick={() => handleClick(k)}>X</button>
                </li>
            </ul>
        </>
    )
}



export default List