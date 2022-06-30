function longestSubarray(arr) {
    // Write your code here
    let subarr = [];
    var max = 0;
    arr.forEach((value, index) => {
        subarr = [value];
        let j = index + 1;
        while (j < arr.length && Math.abs(value - arr[j]) < 2) {
            if (!subarr.includes(arr[j])) {
                if(subarr.length < 2){
                    subarr.push(arr[j]);
                } else {
                    break;    
                }
                
            }
            j++;
        }
        max = Math.max(max, j - index);
    })
    return max;
}

function longestSubarray(arr){
    let max = 0;
    var i = 0, j = 1;

    var set = [];
    while (i<arr.length -1){
        while(j<arr.length && Math.abs(arr[i] - arr[j]) < 2){
            if(!set.includes(arr[j])){
                if(set.length == 2){
                    break;
                } else {
                    set.push(arr[j]);
                }
            }
            // console.log(i,arr[i],j,arr[j]);
            j++;
        }

        max = Math.max(max, j-i);

        i++;
        j = i +1;

        console.log({set});
        set = [];
    }
    console.log({max});

}

let array = [5,1,2,3,4,5];

longestSubarray(array);