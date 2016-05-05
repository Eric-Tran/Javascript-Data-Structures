//Stack.js
//LIFO Structure 
var Stack = (function() {
	function Stack() {
		this.dataStore = {};
		this.top = -1;
	}
	Stack.prototype.push = function(item) {
		this.top++;
		this.dataStore[this.top] = item;
	}
	Stack.prototype.pop = function() {
		this.top--;
	}
	Stack.prototype.display = function() {
		for(var i = 0; i<=this.top; i++) {
			console.log(this.dataStore[i]);
		}
	}
	return Stack;
})();
module.exports = Stack;
