const sendBtn = document.getElementById("sendBtn");
const display = document.getElementById("main");
const input = document.getElementById("typer");

let chatBotCount = 0;
let chatBotHiCount = 0;
const chatBotQuestion = ["아주 멋진 웃음인데? 이제 본격적으로 시작해볼까? 채팅을 다 했다면 지금처럼 다음 버튼을 누르면 다음 질문으로 넘어갈거야! 그럼 바로 첫 번째 질문!", 
                        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
                        "그 쪽도 홍박사님을 아세요?", 
                        "There's nothing holdin' me back"];
const chatBotSayHi = ["안녕!", "지금부터 간단한 모의 채팅을 해볼거야.", 
                        "긴장하지 말고 평소 메신저로 대화하는 것 처럼 채팅해주면 돼!", 
                        "그럼, 시작하기 전에 한번 웃어볼까? 평소 친구들이나 동료들이랑 대화할 때 웃는 것 처럼 웃어봐!", 
                        "다 웃었으면 다음 버튼을 눌러줘!"];

function chat() {
    if (input.value != "") {
    display.innerHTML += `<div style = "display: flex; 
                                        width: fit-content;
                                        max-width: 69%;
                                        background: linear-gradient(-120deg,#483d8b, #bd8aff);
                                        padding-left: 12px;
                                        padding-right: 13.5px; 
                                        padding-top: 5px;
                                        padding-bottom: 6px;
                                        border-radius: 17.5px; 
                                        color: white; 
                                        margin-left: auto;
                                        margin-right: 10px;
                                        margin-bottom: 8px;
                                        font-size: 22px;
                                        word-break: break-all;">
                                        ${input.value}
                                        </div>`;
    input.value = "";
}
}

function chatBotFirstTalk() {
    display.innerHTML += `<div style = "display: flex; 
                                        width: fit-content;
                                        max-width: 69%;
                                        background: #e8e8e8;
                                        padding-left: 12px;
                                        padding-right: 13.5px; 
                                        padding-top: 5px;
                                        padding-bottom: 6px;
                                        border-radius: 17.5px; 
                                        color: black; 
                                        margin-left: 10px;
                                        margin-right: auto;
                                        margin-bottom: 8px;
                                        font-size: 22px;
                                        word-break: break-all;">
                                        ${chatBotSayHi[chatBotHiCount]}
                                        </div>`;
    chatBotHiCount += 1;
}

function deunLock() {
    input.placeholder = "챗 봇이 입력 중...";
    input.disabled = true;
    if (chatBotCount != 0) {
        display.innerHTML += `<div style = "display: flex; 
        width: fit-content;
        max-width: 69%;
        background: #e8e8e8;
        padding-left: 12px;
        padding-right: 13.5px; 
        padding-top: 5px;
        padding-bottom: 6px;
        border-radius: 17.5px; 
        color: black; 
        margin-left: 10px;
        margin-right: auto;
        margin-bottom: 8px;
        font-size: 22px;
        word-break: break-all;">
        등록 중...
        </div>`;


        setTimeout(NextQ, 2000);
    } else {
        chatBotNextTalk();
    }
   
}

function NextQ() {
    display.innerHTML += `<div style = "display: flex; 
                                        width: fit-content;
                                        max-width: 69%;
                                        background: #e8e8e8;
                                        padding-left: 12px;
                                        padding-right: 13.5px; 
                                        padding-top: 5px;
                                        padding-bottom: 6px;
                                        border-radius: 17.5px; 
                                        color: black; 
                                        margin-left: 10px;
                                        margin-right: auto;
                                        margin-bottom: 8px;
                                        font-size: 22px;
                                        word-break: break-all;">
                                        등록 완료! 그럼 다음 질문으로 넘어갈게!
                                        </div>`;
    setTimeout(chatBotNextTalk, 2000);
}

function chatBotNextTalk() {
    display.innerHTML += `<div style = "display: flex; 
                                        width: fit-content;
                                        max-width: 69%;
                                        background: #e8e8e8;
                                        padding-left: 12px;
                                        padding-right: 13.5px; 
                                        padding-top: 5px;
                                        padding-bottom: 6px;
                                        border-radius: 17.5px; 
                                        color: black; 
                                        margin-left: 10px;
                                        margin-right: auto;
                                        margin-bottom: 8px;
                                        font-size: 22px;
                                        word-break: break-all;">
                                        ${chatBotQuestion[chatBotCount]}
                                        </div>`;
    chatBotCount += 1;
    if (chatBotCount == 1) {
        setTimeout(chatBotNextTalk, 1000);
    } else {
        input.placeholder = "여기에 할 말을 적어봐!";
        input.disabled = false;
    }
}

setTimeout(chatBotFirstTalk, 1000);
setTimeout(chatBotFirstTalk, 2000);
setTimeout(chatBotFirstTalk, 4000);
setTimeout(chatBotFirstTalk, 6000);