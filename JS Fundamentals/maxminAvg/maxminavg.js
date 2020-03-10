// arrOne= [1, -2, 9, 4]
function maxminAvg(arr){
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];
	for( var i = 1; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
		if (arr[i] > max){
			max = arr[i];
		}
		sum = sum + arr[i];
	}
	var avg = sum/arr.length;
	console.log("The minimum is ", min);
	console.log("The maximum is ", max);
	console.log("The Average is ", avg);
}
maxminAvg([1, -2, 9, 4]);