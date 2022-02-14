const input = document.querySelector(".input");
const saveBtn = document.querySelector(".save-btn");
const delBtn = document.querySelector(".del-btn");
const rePlayList = document.querySelector(".rePlay-list");

let pianoArr = [];

const run = (x) => {
    let audio = new Audio(`piano/${x}.wav`);
    audio.play();
    input.value += x+",";
}

const emptyText = () => input.value = "";

delBtn.addEventListener("click", emptyText);

saveBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.classList.add("animate__fadeInDown", "animate__animated")
    const ptext = document.createElement("p")
    const text = document.createTextNode(input.value);
    ptext.appendChild(text);

    const replayBtn = document.createElement("button");
    const replayBtnText= document.createTextNode("Replay");
    replayBtn.appendChild(replayBtnText);

    const deleteButton = document.createElement("button");
    const deleteButtonText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteButtonText);
    li.append(ptext, replayBtn, deleteButton);

    rePlayList.appendChild(li);   
    emptyText();

    replayBtn.addEventListener("click", () => {
        emptyText();
        let result = ptext.innerText.split(",");
        result.pop();
        const playing = ((arr, delay=500) => {
            let x = delay;
            arr.map(eachKey => {
                setTimeout(() => {
                    run(eachKey);
                }, x);      
                x += delay;
            })          
        })
        playing(result);
    })

    deleteButton.addEventListener("click", () => {
        li.remove();
        emptyText();
    })
    
})



