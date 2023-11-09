const sendBtn = document.getElementById("sendBtn");
const display = document.getElementById("main");
const input = document.getElementById("typer");

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