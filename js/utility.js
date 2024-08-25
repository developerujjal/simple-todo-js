function inputValue(elementId){
    let textInputFieldElement = document.getElementById(elementId);
    let textInputFieldValue = textInputFieldElement.value;


    return textInputFieldValue;
}



let count = 0;
function createElement(){
    
    let newElement = document.createElement("tr");
    newElement.innerHTML = `
    
    <td>${count += 1}</td>
    <td>${inputValue("text-field")}</td>
    <td>
    <button id="btn-done" class="button-done done-button">DONE</button>
    <button class="button-delete button-done done-delete">DELETE</button>
    </td>
    
    `

    return newElement;
}







   // done button
function doneButton(elementId){
       // done button
       let btns = document.querySelectorAll(elementId);
       for(let btn of btns){
           btn.addEventListener("click", function(e){
               let selectLocation = e.target.parentElement.parentElement;
               
               // Add underline class to Number and Description columns
               selectLocation.querySelector('td:nth-child(1)').classList.add('underline');
               selectLocation.querySelector('td:nth-child(2)').classList.add('underline');

               return selectLocation;
           })
       }
   
}



// Deleted Button
function deleteBtn(elementId){
    let deleteBtns = document.querySelectorAll(elementId);
for(let deleteBtn of deleteBtns){
    deleteBtn.addEventListener("click", function(e){
        let row = e.target.parentElement.parentElement;

        row.remove();

    })
}
}