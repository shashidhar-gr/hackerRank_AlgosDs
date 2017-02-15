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
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var numOfPos = numOfZeros = numOfNegs = 0;
    for(var i = 0; i < n; i++) {
        if(arr[i] === 0) {
            numOfZeros++;
        }
        else if(arr[i] < 0) {
            numOfNegs++;
        }
        else {
            numOfPos++;
        }
    }

    console.log(numOfPos/n);
    console.log(numOfNegs/n);
    console.log(numOfZeros/n);
}
