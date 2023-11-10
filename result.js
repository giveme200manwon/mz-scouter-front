const addOn = document.getElementById("addOn");
const scoreText = document.getElementById("scoreText");
const MZillust = document.getElementById("human");
const namer = document.getElementById("name");

const dict = JSON.parse(localStorage.getItem("totalScore"));

const feedBackStrings = []
let feedBackCount = 0;

function result(data) {
    var Rscore = 0;

    data.rawChatting.forEach((chatting) =>
        chatting.contents.forEach((indexes) => 
            Rscore += indexes.score))
        //Rscore += Number(chatting.score));
    if (Rscore > 8) {
        MZillust.src = "./PowerMZ.png";
        namer.innerText = "슈퍼파워 MZ!";
    }
    scoreText.innerText = `당신의 MZ 점수는 ${Rscore}점 이네요!`;
    giveFeedBack(data);
}

function giveFeedBack(data) {
    data.rawChatting.forEach((chatting) =>
        chatting.contents.forEach((indexes) => 
            feedBackStrings.push(indexes.texts)));
    for (i = 0; i < feedBackStrings.length; i++) {
        addOn.innerHTML += `<div>
                                <p>${feedBackStrings[i]}라고 하는 것 보다는</p>
                                <p>200만원을 달라고 하는 건 어때요?</p>
                            </div>`
    }
}

result(dict);