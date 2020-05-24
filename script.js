let button = document.getElementById("enter");
let input = document.getElementById("userinput");
// let ul = document.querySelector("#myList");
let todo_list = document.querySelector('#myList');
let deleteButtonsList = document.querySelector('#deleteBtnList');
let deleteButtonsList_children = deleteButtonsList.children;

let todo_list_children = todo_list.children;


// converted the original HTML list to JS
let items = ['Python', 'SQL', 'JavaScript', 'Leaflet', 'D3', 'React']


// function to create list items when text is passed in
function createListItem (text) {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(text));
	todo_list.appendChild(li);
	return li;
}


for (let i=0; i < items.length; i++) {
	createListItem(items[i]);
	//console.log(li_items)
	console.log("Created item " + items[i])
}

// for each child under the parent, add an event listener to toggle the "done" class on click

for (let i = 0; i < todo_list_children.length; i++){
	todo_list_children[i].addEventListener("click", function () {
		this.classList.toggle("done");
	})
};


function createListButton () {
	// let li = document.createElement("li");
	let button = document.createElement('button');
	button.textContent = 'Delete';
	button.addEventListener("click", function () {
		for (let i = 0, len = deleteButtonsList.children.length; i < len; i++){
			(function(index){
				deleteButtonsList.children[i].onclick = function(){
					// alert(index);
					this.remove()
					// deleteButtonsList_children[index].remove();
					todo_list_children[index].remove();
					// console.log(deleteButtonsList_children[index])
				}
			})(i);
		}
	})
	// li.appendChild(button);
	// deleteBtnList.appendChild(li)
	deleteBtnList.appendChild(button);
	return button;
}

// Using the length of items, create respective delete buttons
for (let i=0; i < items.length; i++) {
	createListButton();
}


//returns user's length of the input
function inputLength() {
	return input.value.length;
}

// create a list lement
function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", function () {
				this.classList.toggle("done");
			});
	todo_list.appendChild(li);
	input.value = "";
}


// adds to the list after user clicks the enter button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		deleteButtonsList.appendChild(createListButton());
	}
}

// alternative: adds to the list after user presses enter
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		deleteButtonsList.appendChild(createListButton());
	}
}


// event listeners
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);