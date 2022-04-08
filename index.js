function info(arr, old_index, new_index) {
   
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]); // arr.splice(2 , 0, arr.splice(0, 1)[0])
    return arr; // for testing
};
// returns [2, 3, 1]
console.log(info([1, 2, 3], 0, 2));  // 2 3 1 za new_index = 2 ;   ako new_index = 3