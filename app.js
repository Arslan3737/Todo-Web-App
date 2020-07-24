

var list = document.getElementById("list")


function addTodo(){
    var todo_item = document.getElementById("todo-item");

    //create li tag with text
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)

    // create delete button
    var delBtn = document.createElement("button");
   // var delTxt = document.createTextNode("DELETE")
    
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
   // delBtn.appendChild(delTxt)


     // create edit button
     var editBtn = document.createElement("button");
    // var editTxt = document.createTextNode("EDIT")
     editBtn.setAttribute("class","btnn")
    // editBtn.appendChild(editTxt)
     editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(liText)
    list.appendChild(li)
    li.appendChild(delBtn)
    li.appendChild(editBtn)
    todo_item.value = ""
   
}

function deleteItem(e){
   e.parentNode.remove()
}

function editItem(f){
    var val  =  f.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edited value", val)
    f.parentNode.firstChild.nodeValue = editValue; 
    }

function deleteAll(){
    list.innerHTML = "";
}

