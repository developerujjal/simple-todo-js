// let count = 0;

document.getElementById("btn-addTask").addEventListener("click", function(){
/*  let textInputFieldElement = document.getElementById("text-field");
    let textInputFieldValue = textInputFieldElement.value;
    
    document.getElementById("text-field").value = "";

    let newElement = document.createElement("tr");
    newElement.innerHTML = `
    
    <td>${count += 1}</td>
    <td>${textInputFieldValue}</td>
    <td>
    <button id="btn-done" class="button-done done-button">DONE</button>
    <button class="button-delete button-done done-delete">DELETE</button>
    </td>
    
    ` 
*/



    let inputTextValue =  inputValue("text-field");  // call the input function for InputTextValue;
    let createNewElement = createElement(); // Call the Create function for newElement Value


    let selectTableBodyElement = document.getElementById("tbody");
  
    document.getElementById("text-field").value = "";

    if(inputTextValue.length > 0){
        selectTableBodyElement.appendChild(createNewElement)
    }




/* 
   // Done Button from <td>

    let btns = document.querySelectorAll(".done-button");
    for(let btn of btns){
        btn.addEventListener("click", function(e){
            let selectLocation = e.target.parentElement.parentElement;
            
            // Add underline class to Number and Description columns
            selectLocation.querySelector('td:nth-child(1)').classList.add('underline');
            selectLocation.querySelector('td:nth-child(2)').classList.add('underline');
        })
    }



    //Delete Button from <td>

    let deleteBtns = document.querySelectorAll(".done-delete");
    for(let deleteBtn of deleteBtns){
        deleteBtn.addEventListener("click", function(e){
            let row = e.target.parentElement.parentElement;

            // row.querySelector("td:nth-child(1)");
            // row.querySelector("td:nth-child(2)");

            // row.classList.add("class", "display")

            row.remove();

        })
    } 
        
*/

        doneButton(".done-button");

        deleteBtn(".done-delete");

})





// Clear All Button

document.getElementById("btn-clearAll").addEventListener("click", function(){
   let tableTrElements = document.querySelectorAll("#tbody tr");
   for(let tableTrElement of tableTrElements){
    tableTrElement.remove();
   }

})




// keyboard Enter work

document.getElementById("text-field").addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        let inputFieldValue = inputValue("text-field");
        let createNewElement = createElement();
    
        let selectTableBodyElement = document.getElementById("tbody");
      
  
        document.getElementById("text-field").value = "";
    
        if(inputFieldValue.length > 0){
            selectTableBodyElement.appendChild(createNewElement)
        }


        doneButton(".done-button");

        deleteBtn(".done-delete");
    
    }


})