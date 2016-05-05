//Queue
//FIFO Structure

function Queue() {
	this._oldestIndex = 1;
	this._newestIndex = 1;
	this._storage = {};
}

//Find Size of a queue
Queue.prototype.size = function() {
	return this._newestIndex - this.oldest.Index;
}

//Adding/Enqueue (data)
Queue.prototype.enqueue = function(data) {
	this._storage[this._newestIndex] = data;
	this._newestIndex++;
}

//Removing/Dequeue
Queue.prototype.dequeue = function() {
	var oldestIndex = this._oldestIndex,
		newestIndex = this._newestIndex,
		deletedData;

	if (oldestIndex !== newestIndex) {
		deletedData = this._storage[oldestIndex];
		delete this._storage[oldestIndex];
		this._oldestIndex++;

		return deletedData;
	}
}