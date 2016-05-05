
//How to create a Binary Search Tree

//Create a node and Binary Search Tree Constructor
function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

function BinarySearchTree() {
	this.root = null;
}

//BST Methods

//Inserting a new node
BinarySearchTree.prototype.push = function(val) {

	//If there are no nodes, set root to new node
	if(!this.root) {
		this.root = new Node(val);
		return;
	}

	//If there are nodes
	var currentNode = root;
	var newNode = new Node(val);

	//Check if value of node is less than current node
	while (currentNode) {
		if (val < currentNode.value) {
			if (!currentNode.left) {
				currentNode.left = newNode;
				break;
			} else {
				currentNode = currentNode.left;
			}
		} else {
			if (!currentNode.right) {
				currentNode.right = newNode;
				break;
			} else {
				currentNode = currentNode.right;
			}
		}
	}
}


//Traversal of nodes in order
function inOrder(node) {
	if (node) {
		inOrder(node.left);
		console.log(node.value);
		inOrder(node.right);
	}
}

//Finding min value
function minNode(node) {
	if (!node) {
		return 0;
	}
	if (node.left) {
		return minNode(node.left);
	}
	return node.value;
}

//Finding max value
function maxNode(node) {
	if (!node) {
		return 0;
	}
	if (node.right) {
		return maxNode(node.right);
	}
	return node.value;
}

//Check if it is a Binary Search Tree
var previousNodeValue;
function isBST() {
	if (root === null) {
		return true;
	}

	//Verify and recourse left
	if (!isBST(root.left)) {
		return false;
	}

	//Verify the current node
	if (previousNode !== null && root.value <= previousNodeValue) {
		return false;
	}

	//Update previousNodeValue
	console.log("Current Node : ", root.value);
	previousNodeValue = root.value;

	//Verify and recourse right
	if (!isBST(root.right)) {
		return false;
	}
	return true;
}

//Check height of BST
function height(node) {
	if (!node) {
		return 0;
	}
	var leftHeight = height(node.left);
	var rightHeight = height(node.right);

	return Math.max(leftHeight, rightHeight) + 1;  
}