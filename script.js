var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	// Add new list items
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	// Add a delete button to new list items
	var deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "Done";
	li.appendChild(deleteBtn);
	deleteBtn.onclick = deleteItem;
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.code === "Enter") {
		createListElement();
	}
}

// Code for clicking on the list item, it toggles the .done 
// class on and off.

function strikethrough(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

ul.addEventListener("click", strikethrough);

// Code for adding delete buttons next to each existing list 
// item and deleting the item when its corresponding delete button is clicked.

li.forEach(function (li) {
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Done";
    li.appendChild(deleteBtn);
	deleteBtn.onclick = deleteItem;
})

function deleteItem (event) {
	event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);