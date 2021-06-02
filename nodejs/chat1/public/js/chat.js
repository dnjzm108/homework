const chatBtn = document.querySelector('#chatBtn');
const chatRoom = document.querySelector('#chatRoom');
let socket = io();
let flag = undefined;

chatBtn.addEventListener('click', () => {
    switch (flag) {
        case true:
            //열린상태에서 다시 눌를때 -> 닫히는기능할때
            flag = false;
            chatRoom.style.display = 'none';
            break;
        case false:
            //처음 제외하고 다시 열릴때
            flag = true;
            chatBtn.innerHTML = '채팅';
            chatBtn.dataset.value = 0;
            chatRoom.style.display = 'block';
            break;
        case undefined:
            //처음으로 이버튼을 누를때
            flag = true;
            getChatRoom();
            break;
    }
})

async function getChatRoom() {
    let url = 'http://localhost:3000/chat';
    let options = { method: 'GET' }
    let response = await fetch(url, options)
    let result = await response.text();
    if (isJson(result)) {
        //로그인 처리가 잘 안됬을때
        let json = JSON.parse(result);
        if (json.result == false) alert(json.msg)
        return
    } else {
        //로그인 처리가 잘되었을때
        chatRoom.innerHTML = result;
        socketChat();
    }
}

function socketChat() {
    socket.on('connect', () => { })

    socket.on('msg', data => {
        chatBtn.dataset.value = parseInt(chatBtn.dataset.value) + 1;
        //dataset
        if (flag == false) {
            chatBtn.innerHTML = `채팅<span style="color:red; padding:2px;">${chatBtn.dataset.value}</span>`
        }
        addCard(data,'you')
    })
}
socket.on('user',data=>{
    console.log(data);
})
function send() {
    const msg = document.querySelector('#msg');
    console.log(msg.value);
    socket.emit('send', msg.value);
    addCard(msg.value,'my')
}
function addCard(text, type) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const chat = document.querySelector('#chat');

    span.innerHTML = text;
    span.classList.add(type);
    div.append(span);
    chat.appendChild(div)

}
function isJson(str) {
    try {
        let json = JSON.parse(str);
        return (typeof json == 'object')
    } catch (e) {
        return false;
    }
}