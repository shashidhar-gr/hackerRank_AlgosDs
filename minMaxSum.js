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
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);

    var min = a;
    var max = a;

    if(b < min) {
		min = b;
	}
	if(c < min) {
		min = c;
	}
	if(d < min) {
		min = d;
	}
	if(e < min) {
		min = e;
	}

	if(b > max) {
		max = b;
	}
	if(c > max) {
		max = c;
	}
	if(d > max) {
		max = d;
	}
	if(e > max) {
		max = e;
	}

	var minSum = (a + b + c + d + e) - max;
	var maxSum = (a + b + c + d + e) - min;

	console.log(minSum+" "+maxSum);
}