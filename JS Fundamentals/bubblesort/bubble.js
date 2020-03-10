function bubbleSort(arr){
	for(var i = 0; i < arr.length; i++){
		for(var x = 0; x < (arr.length-i-1); x++){
			if(arr[x] > arr[x+1]){
				var temp = arr[x];
				arr[x] = arr[x+1];
				arr[x+1] = temp;
			}
		}
	}
	return arr;
}
var z = [4,22,41,2, 66, 18, 1]

console.log(bubbleSort(z));




function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

O(n)

function findNth(arr, n){
    console.log(arr[n]);
}
 O(1)


function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}
O(log n)

function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}

O(N^2)
