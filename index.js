const sendBtn = document.getElementById("sendBtn");
const display = document.getElementById("nein");
const input = document.getElementById("typer");

let chatBotCount = 0;
let chatBotHiCount = 0;
let chatBotByeCount = 0;
let tempID = 0;
let isEntered = false;

const chatBotQuestion = [["아주 멋진 웃음인데? 이제 본격적으로 시작해볼까? 채팅을 다 했다면 지금처럼 다음 버튼을 누르면 다음 질문으로 넘어갈거야! 그럼 바로 첫 번째 질문!"], 
                        ["10년지기 친한 친구들끼리 여행을 간 상황! 그런데 숙소를 예약하기로 했던 친구가 예약을 잘못 했던걸 방금 알아 많이 실망한 것 같아. 이 친구를 위로하려면 어떻게 할래?",
                        "여러분...",
                        "제가 숙소를 잘못 예약한 것 같습니다...",
                        "이거 어떡하죠...?"],
                        ["친구가 노잼 개그로 채팅방을 얼려버렸어! 그리고 그 얼음을 너가 깨야만 할 것 같아! 이 상황에서 너는 뭐라고 보낼래?",
                        "밤에 성시경이 두 명 있으면 뭔지 앎?",
                        "야간 투 시경",
                        "엌ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"],
                        ["어제 처음 만나서 말까지 놓은 동생에게 다음주에 영화를 보자고 하려고 해! 너는 어떻게 물어볼래?"],
                        ["새로운 직장에 입사 후 첫날인데, 15년지기 이성 친구가 내 상사래! 그런데 첫날이라 그런지 실수도 많이하고 그 상사 친구에게 많이 깨졌어... 퇴근 후에 연락이 와서 답장 하려고 하는데 어떻게 답장할래?",
                        "ㅋㅋㅋ 너가 왜 여기있냐 보자마자 반가워 죽는줄",
                        "그동안 회사에서 심심해서 어떡하나 했는데",
                        "이제 그럴 걱정 없겠다 ㅋㅋㅋㅋㅋ",
                        "아 오늘 뭐라고 했던건 미안해",
                        "회사 일이라 내가 좀 예민했던 것 같네",
                        "이제 잘 해보자구"],
                        ["친구들과 개발 대회를 나간 상황! 대회 기간 초반에는 서먹서먹했지만, 대회를 하면서 진짜 많이 친해졌어! 그리고 수상을 예상하지 않았지만 기적적으로 1등을 했네! 이 사실을 너만 알게 되었을 떄 단톡방에 어떻게 채팅을 보낼래?"],
                        ["친구가 일 기한을 자꾸 넘겨. 한두번은 그러려니 했는데 어제 또 기한을 못 지킬 거 같다고 연락이 왔어. 오늘까지 주겠다고 했는데 지금 저녁 8시거든? 아직까지 아무 연락이 없어! 뭐라고 보낼래?"],
                        ["친구랑 5시에 역 앞에서 만나기로 약속했는데, 도착 10분 전에 친구한테 길이 막혀서 40분 정도 늦을거 같다고 연락이 왔어. 뭐라고 할거야?", 
                        "나 길 막혀서 40분 정도 늦을 듯"],
                        ["당근에서 갖고싶던 물건을 사려고 판매자한테 연락을 보내려고 해. 뭐라고 보낼거야?"],
                        ["정말 친했던 친구랑 3년 만에 연락이 됐어! 길가에서 우연히 마주쳤었나봐. 친구가 반가웠는지 뭐하고 지냈냐고 물어보네? 뭐라고 답할래?", 
                        "아까 길에서 너였지??",
                        "진짜 오랜만이다ㅠㅠ",
                        "요즘 뭐하고 지냈어?"]];
const chatBotSayHi = ["안녕!", "지금부터 간단한 모의 채팅을 해볼거야.", 
                        "긴장하지 말고 평소 메신저로 대화하는 것 처럼 채팅해주면 돼!", 
                        "그럼, 시작하기 전에 한번 웃어볼까? 평소 친구들이나 동료들이랑 대화할 때 웃는 것 처럼 웃어봐!", 
                        "다 웃었으면 다음 버튼을 눌러줘!"];

const chatBotImage = ["./profile1.jpg","./profile2.png","./profile3.png","./profile4.png","./profile5.png","./profile6.png","./profile7.png","./profile8.png","./profile9.png", "./profile10.png"];

const chatBotSayBye = ["등록 완료! 모든 질문이 끝났어!", "곧 분석 결과를 보여줄게!", "분석 중..."];

function chat() {
    if (input.value != "") {
        isEntered = true;
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
                                        word-break: break-all;" class="chatter">
                                        ${input.value}
                                        </div>`;
    input.value = "";
    scroller();
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
    if (isEntered) {
        isEntered = false;
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
        word-break: break-all;" class="chatter">
        등록 중...
        </div>`;

        if (chatBotCount == 10) {
            setTimeout(chatBotEnd, 2000);
        } else {
            setTimeout(NextQ, 2000);
        }
    } else {
        chatBotNextTalk();
    }
    scroller();
    } else {
        input.placeholder = "읽씹은 안돼...";
        setTimeout(() => input.placeholder = "여기에 할 말을 적어봐!", 1000);
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
                                        word-break: break-all;" class="chatter">
                                        등록 완료! 그럼 다음 질문으로 넘어갈게!
                                        </div>`;
    scroller();
    
    setTimeout(chatBotNextTalk, 2000);
}

function chatBotNextTalk() {
    for (i = 0; i < chatBotQuestion[chatBotCount].length; i++) {
        if (i == 1) {
            display.innerHTML += `<div style="display: flex; margin-bottom: -20px; margin-left: 8px;">
                                    <img src="${chatBotImage[chatBotCount]}"
                                    style = "width: 60px;   
                                            heigth: 60px;
                                            border-radius: 25px;"><p style="margin-top: 0px; margin-left: 4px;">친구</p></div>
                                <div style = "display: flex; 
                                            width: fit-content;
                                            max-width: calc(69% - 60px);
                                            background: #e8e8e8;
                                            padding-left: 12px;
                                            padding-right: 13.5px; 
                                            padding-top: 5px;
                                            padding-bottom: 6px;
                                            border-radius: 17.5px; 
                                            color: black; 
                                            margin-left: 70px;
                                            margin-right: auto;
                                            margin-bottom: 8px;
                                            font-size: 22px;
                                            word-break: break-all;" class="chatter">
                                            ${chatBotQuestion[chatBotCount][i]}
                                            </div>`
        } else if (i > 1) {
            display.innerHTML += `<div style = "display: flex; 
                                                width: fit-content;
                                                max-width: calc(69% - 60px);
                                                background: #e8e8e8;
                                                padding-left: 12px;
                                                padding-right: 13.5px; 
                                                padding-top: 5px;
                                                padding-bottom: 6px;
                                                border-radius: 17.5px; 
                                                color: black; 
                                                margin-left: 70px;
                                                margin-right: auto;
                                                margin-bottom: 8px;
                                                font-size: 22px;
                                                word-break: break-all;" class="chatter">
                                                ${chatBotQuestion[chatBotCount][i]}
                                                </div>`
        } 
        
        else {
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
                                                word-break: break-all;" class="chatter">
                                                ${chatBotQuestion[chatBotCount][i]}
                                                </div>`
        }
    }
    chatBotCount += 1;
    if (chatBotCount == 1) {
        setTimeout(chatBotNextTalk, 2000);
    } else {
        input.placeholder = "여기에 할 말을 적어봐!";
        input.disabled = false;
    }
    scroller();
}

function chatBotEnd() {
    if (chatBotByeCount == 3) {
        return 0;
    } else {
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
                                            word-break: break-all;" class="chatter">
                                            ${chatBotSayBye[chatBotByeCount]}
                                            </div>`
    }
    chatBotByeCount += 1;
    scroller();
    setTimeout(chatBotEnd, 2000);
}

function scroller() {
    // console.log(display.scrollHeight);
    // display.scrollTop = display.scrollHeight;
    setTimeout(() => display.scrollTop = display.scrollHeight, 10);
}

setTimeout(chatBotFirstTalk, 1000);
setTimeout(chatBotFirstTalk, 2000);
setTimeout(chatBotFirstTalk, 4000);
setTimeout(chatBotFirstTalk, 6000);