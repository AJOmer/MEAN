function binarySearch(val, arr) {
    var low  = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (val < arr[mid]) {
            high = mid - 1;
        }
        else if (val > arr[mid]) {
            low = mid + 1;
        }
        else {
            return "Value of "+ mid + " in array";
        }
    }
    return "Value not in array";
}
var array1 = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200];
console.log(binarySearch(90, array1));