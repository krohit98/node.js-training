const retrieveButton = document.querySelector('#retrieve-button')
const updateButton = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')

retrieveButton.addEventListener('click',()=>{
    fetch('/getEmp')
    .then(response=>{
        if(response.ok)
            window.location.replace(response.url);
    })
    .catch(error=>{
        console.log(error);
    })
})

updateButton.addEventListener('click', () => {
    //hit the update end point
    updateName = document.getElementById('updateName')
    updateNameTo = document.getElementById('updateNameTo')
    const payload = {
        method: 'put',
        headers: {'content-type':'application/json'},
        body:JSON.stringify({updateName:updateName.value, updateNameTo:updateNameTo.value})
    }
    fetch('/updateEmp',payload)
    .then(result=>{
        if(result.ok) {
            return result.json()
        }
    })
    .then(response=>{
        window.location.reload();
    })
    .catch(error => console.log(error));
    
    updateName.value="";
    updateNameTo.value="";

})

deleteButton.addEventListener("click", () => {
    //hit the delete end point
    deleteName = document.getElementById('deleteName').value
    const payload = {
        method: 'delete',
        headers: {'content-type':'application/json'},
        body:JSON.stringify({name:deleteName,})
    }
    fetch('/deleteEmp',payload)
    .then(result=>{
        if(result.ok) {
            alert('employee deleted!')
            return result.json()
        }
    })
    .then(response=>{
        if(response === 'delete op failed')
        console.log(response);
    })
    .catch(error => console.log(error));
    deleteName.value="";
});