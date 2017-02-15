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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);
    arrayRotate(a, k);
    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        console.log(a[m]);
    }
}

function arrayRotate(a, n) {
	var i = 0;

	while(i < n) {
		var length = a.length;
		var lastItem = a[length-1];
		
		for(var j = length-2; j >= 0; j--) 
			a[j+1] = a[j];

		a[j+1] = lastItem;
		i++;
	}
}

(function (){
    var myArray = [1, 2, 3];
    console.log(myArray);
    var k = 2;
    myArray.reverse();
    console.log(myArray);
    var firstPart = myArray.slice(0, k);
    console.log("Fp: "+firstPart);
    firstPart.reverse();
    console.log("Fp rev: "+firstPart);
    var secondPart = myArray.slice(k, myArray.length);
    console.log("Sp: "+secondPart);
    secondPart.reverse();
    console.log("Sp rev: "+secondPart);
    var finalArray = firstPart.concat(secondPart);
    console.log(finalArray);
})()
