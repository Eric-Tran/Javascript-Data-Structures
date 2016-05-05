//Singly Linked List

	// Node
		// data - stores a value
		// next - points to the next node in the List

	//SinglyList
		// _length - retrieves the number of nodes in a list.
		// head - assigns a node as the head of a list.
		// add(value) - adds a node to a list.
		// searchNodeAt(position) - searches for a node a n-postion on our list.
		// remove(position) - removes a node from a list.

//Implementation of a Singly-Linked List.
	//First define constructors for Node and SinglyList
	//Each node must store data and point to another node.

function Node(data) {
	this.data = data;
	this.next = null;
}

function SinglyList() {
	this.head = null;
	this._length = 0;
}

//SLL Methods 
	//Adding a node
SinglyList.prototype.add = function(value) {
	var node = new Node(value);
	var currentNode = this.head;

	//check if the list is empty
	if (!currentNode) {
		this.head = node;
		this._length++;

		return node;
	}

	//if list is not empty, traverse to the end
	while (currentNode.next) {
		currentNode = currentNode.next;
	}
	currentNode.next = node;
	this._length++;

	return node;
}

	//Search for node at a position
SinglyList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head,
		length = this._length,
		count = 0,
		message = {failure: 'non-existent node in this list'};

	//check if position is valid
	if (length === 0 || position < 1 || position > length) {
		throw new Error(message.failure);
	}

	//if the position is valid
	while (count < position) {
		currentNode = currentNode.next;
		count++;
	}
	return currentNode;
}

	//Remove node at a position
SinglyList.prototype.remove = function(position) {
	var currentNode = this.head,
		length = this._length,
		count = 2,
		message: {failure: 'Failure: non-existent node in this list.'},
		beforeNodeToDelete = null,
		nodeToDelete = null,
		deletedNode = null;

	//check for invalid position
	if (position < 0 || position > length) {
		throw new Error(message.failure);
	}

	//if the first node is being removed
	if (position === 1) {
		this.head = currentNode.next;
		deletedNode = currentNode;
		currentNode = null;
		this._length--;

		return deletedNode;
	}

	//All other nodes removed
	while (count < position) {
		currentNode = currentNode.next;
		beforeNodeToDelete = currentNode;
		nodeToDelete = currentNode.next;
		count++;
	}

	beforeNodeToDelete.next = noteToDelete.next;
	deletedNode = nodeToDelete;
	nodeToDelete = null;
	this._length--;

	return deletedNode;
}



