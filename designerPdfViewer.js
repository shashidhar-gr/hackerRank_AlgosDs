process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    
    var hashMap = createHashMap("abcdefghijklmnopqrstuvwxyz", h);

	var width = word.length * 1;
	var height = maxHeight(word, hashMap);

	var area = width * height;

	console.log(area);
}

function createHashMap(word, heights) {
	word = word.split('');

	var hashMap = {};
	
	for(var i = 0; i < word.length; i++) {
		hashMap[word[i]] = heights[i];
	}

	return hashMap;
}

function maxHeight(myWord, hashMap) {
	myWord = myWord.split('');
	var maxHeight = 0;
	for(var i = 0; i < myWord.length; i++) {
	
		var height = hashMap[ myWord[i] ];
		
		if(height > maxHeight) {
			maxHeight = height;
		}
	}
	return maxHeight;
}

console.log(parseInt('a'));