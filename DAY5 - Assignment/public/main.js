const updateBtn = document.getElementById('updatebtn');
const deleteBtn = document.getElementById('deletebtn');

updateBtn.addEventListener('click',()=>{

    id = document.getElementById('updateId');
    item = document.getElementById('updateItem');

    const payload = {
        method: 'put',
        headers: {'content-type':'application/json'},
        body:JSON.stringify({id:id.value, item:item.value})
    }

    fetch('/updateTodo',payload)
    .then(result=>{
        if(result.ok) {
            return result.json()
        }
    })
    .then(response=>{
        window.location.reload();
    })
    .catch(error => console.log(error));
})

deleteBtn.addEventListener('click',()=>{
    const deleteid = document.getElementById('deleteId').value;
    console.log(deleteid);
    const payload = {
        method: 'delete',
        headers: {'content-type':'application/json'},
        body:JSON.stringify({id:deleteid})
    }
    fetch('/deleteTodo',payload)
    .then(result=>{
        if(result.ok) {
            return result.json()
        }
    })
    .then(response=>{
        if(response === 'delete op failed')
            console.log(response);
        else
        window.location.reload();
    })
    .catch(error => console.log(error));
})