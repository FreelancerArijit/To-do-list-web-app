console.log("hello world");

const button = document.querySelector(".action-button");
const form = document.querySelector(".task-form");
const submit = document.querySelector(".submit");
const list = document.querySelector(".list");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const date = document.querySelector(".date");
const clear = document.querySelector(".clear");
const done = document.querySelector(".done");
const remove = document.querySelector(".remove");


button.addEventListener("click", () => {
    console.log("Button clicked!");

    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }    

});

submit.addEventListener("click", (e) => {
    console.log("Submit clicked");
    if(title.value === "" || description.value === "" || date.value === "") {
        alert("Please fill in all fields");
        return;
    }
    e.preventDefault();

    let div1 = document.createElement("div");
    div1.classList.add("task-card");
    list.appendChild(div1);

    let div2 = document.createElement("div");
    div2.classList.add("task-card-heading");
    div2.innerHTML = `<h3>${title.value}</h3><p> Deadline:   ${ date.value}</p>`;
    div1.appendChild(div2);


    let div3 = document.createElement("div");
    div3.classList.add("task-card-description");
    div3.innerHTML = `<p>${description.value}</p>`;
    div1.appendChild(div3);

    let div4 = document.createElement("div");
    div4.classList.add("task-card-button");
    div1.appendChild(div4);

    let button1 = document.createElement("button");
    button1.setAttribute("type", "button"); 
    button1.classList.add("done");
    button1.innerText = "Done";
    div4.appendChild(button1);
    
//    button1.addEventListener("click", () => {
//         console.log("Done clicked");
//        button1.innerHTML = "Completed";
//        button1.style.backgrundColor = "green";
//     });

    let button2 = document.createElement("button");
    button2.classList.add("remove");
    button2.innerText = "Remove";

    div4.appendChild(button2);

    saveData();



})

clear.addEventListener("click", () => {

    console.log("Clear clicked");
    title.value = "";
    description.value = "";
    date.value = "";



});


function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();



list.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("done")) {
        const taskCard = e.target.closest(".task-card");
        if (taskCard) {
            taskCard.style.opacity = "0.5";
            console.log("Done clicked");
            e.target.disabled = true; 
        }
    }
    saveData();
});

list.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("remove")) {
        const taskCard = e.target.closest(".task-card");
        if (taskCard) {
            taskCard.remove();
            console.log("Remove clicked");
            saveData(); 
        }
    }
});
