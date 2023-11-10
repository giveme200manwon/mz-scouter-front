const addOn = document.getElementById("addOn");
const scoreText = document.getElementById("scoreText");
const MZillust = document.getElementById("human");
const namer = document.getElementById("name");
const wrapper = document.getElementById("wrapper");

const dict = JSON.parse(localStorage.getItem("totalScore"));

const feedBackStrings = []
let feedBackCount = 0;

var feedbacker;
var standard = 100;
var lowStandard = 0;
var greeter;

function result(data) {
    var Rscore = 0;
    var totalNum = 0;

    data.chatting.forEach((chatting) =>
        chatting.contents.forEach((indexes) => {
            Rscore += indexes.score;
            totalNum += 1;
        }))
        //Rscore += Number(chatting.score));
    Rscore /= totalNum
    if (Rscore > 75) {
        MZillust.src = "./PowerMZ.png";
        namer.innerText = "슈퍼파워 MZ!";
    } else if (Rscore > 50) {
        MZillust.src = "./WeakMZ.png";
        namer.innerText = "흔하지는 않은 MZ 회사원!"
    } else if (Rscore > 25) {
        MZillust.src = "./WeakNOIN.png";
        namer.innerText = "조금만 노력하면 멋진 MZ가 될 사람!";
    } else {
        MZillust.src = "./PowerNOIN.png";
        namer.innerText = "노력...해야겠죠...?";
    }
    scoreText.innerText = `당신의 MZ 점수는 ${Math.round(Rscore)}점 이네요!`;
    giveFeedBack(data);
}

function giveFeedBack(data) {
    var feedbacking = data.chatting[0].contents[0].feedback;
    data.chatting.forEach((chat) => chat.contents.forEach((chatt) => judge(chatt)))
    console.log(feedbacker);
    if (feedbacking == 0) {
        addOn.innerHTML += `<div>
                            <p>가장 MZ하지 않았던 채팅은 이것이예요!</p>
                            <p>-> ${feedbacker}</p>
                            <p>소량의 비속어나 은어는 더 MZ스럽게 만들어 줄거예요! 하지만 남용은 안돼요!</p>
                        </div>`
    } else if (feedbacking == 1) {
        addOn.innerHTML += `<div>
                            <p>가장 MZ하지 않았던 채팅은 이것이예요!</p>
                            <p>-> ${feedbacker}</p>
                            <p>MZ하려면 이런 말들 대신 신조어나 줄임말, 밈을 섞어 써 보세요!</p>
                        </div>`
    } else if (feedbacking == 2) {
        addOn.innerHTML += `<div>
                            <p>가장 MZ하지 않았던 채팅은 이것이예요!</p>
                            <p>-> ${feedbacker}</p>
                            <p>이런 종결어미는 MZ하지 않아요! 일단 음슴체부터 시작해볼까요?</p>
                        </div>`
    } else if (feedbacking == 3) {
        addOn.innerHTML += `<div>
                            <p>가장 MZ하지 않았던 채팅은 이것이예요!</p>
                            <p>-> ${feedbacker}</p>
                            <p>MZ해 보이려면 일부러 자음이나 모음만 써보세요! 효과가 좋답니다!</p>
                        </div>`
    } else if (feedbacking == 4) {
        addOn.innerHTML += `<div>
                            <p>가장 MZ하지 않았던 채팅은 이것이예요!</p>
                            <p>-> ${feedbacker}</p>
                            <p>'^^'이나 '~'같은 기호는 좋지 않아요! 아예 붙이지 않고 '?' 이나 '!' 를 쓰는건 어떨까요?</p>
                        </div>`
    } else if (feedbacking == 5) {
        addOn.innerHTML += `<div>
                            <p>가장 MZ하지 않았던 채팅은 이것이예요!</p>
                            <p>-> ${feedbacker}</p>
                            <p>장문은 좋지 않아요! 세줄 이상 넘어가면 읽지 않을 지도 몰라요!</p>
                        </div>`
    }
    addOn.innerHTML += `<div>
                            <p>가장 MZ했던 채팅은 이것이예요!</p>
                            <p>-> ${greeter}</p>
                            <p>우와, 정말 MZ한데요?</p>
                        </div>`

    addOn.innerHTML += `<div style="height: 50px; padding-top: 20px; font-size: 30px; text-align: center;" onclick="next('./index.html')">다시하기</div>
    <div style="height: 50px; padding-top: 20px; font-size: 30px; text-align: center;" onclick="next('./mzWiki.html')">MZ위키 보기</div>`
}

function next(string) {
    location.href = string;
}

function judge(chat) {
    if (chat.score < standard) {
        standard = chat.score;
        feedbacker = chat.texts;
    }
    if (chat.score > lowStandard) {
        lowStandard = chat.score;
        greeter = chat.texts;
    }
}

result(dict);