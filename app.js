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

document.addEventListener("keyup", (e) => {

    switch (e.key) {
        case 'a':
            run('C3');
            break;

        case 'w':
            run('Db3');
            break;

        case 's':
            run('D3');
            break;

        case 'e':
            run('Eb3');
            break;

        case 'd':
            run('E3');
            break;

        case 'f':
            run('F3');
            break;

        case 'r':
            run('Gb3');
            break;

        case 'g':
            run('G3');
            break;

        case 'y':
            run('Ab3');
            break;

        case 'h':
            run('A2');
            break;

        case 'u':
            run('BB3');
            break;

        case 'j':
            run('B2');
            break;    

        case 'k':
            run('C3');
            break;

        case 'o':
            run('Db3');
            break;

        case 'l':
            run('D3');
            break;

        case 'p':
            run('Eb3');
            break;

        case ';':
            run('E3');
            break;   

        default:
            console.log('no key found');
            break;
    }
})



