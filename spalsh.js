const text = document.getElementById("text");
const body = document.querySelector("body");

function textChange() {
    text.innerText = "터치하여 챗봇과 대화 시작하기"
    body.addEventListener('touchend', () => next());
    body.addEventListener('click', () => next());
}

function next() {
    text.innerText = "당신을 맞이하기 위해 레드카펫을 까는 중..."
    setTimeout(() => text.innerText = "준비 완료! 곧 챗봇과 만납니다!", 2000);
    setTimeout(() => location.replace("./index.html"), 4500)
}
setTimeout(textChange, 5500);