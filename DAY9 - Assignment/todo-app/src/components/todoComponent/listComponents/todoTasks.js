const todoTask = document.getElementsByClassName("todoTask");

for(let item of todoTask){
    console.log(item);
    item.addEventListener("click",()=>{
        item.classList.toggle("finished");
    })
}