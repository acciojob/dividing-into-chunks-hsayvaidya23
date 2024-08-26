const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	return arr.reduce((res, curr) => {
		const lChunk = res[res.length-1];
		if(!lChunk || lChunk.reduce((sum, item) => sum + item, 0) + curr > n){
			res.push([curr]);
		}else {
			lChunk.push(curr);
		}
		return res;
	}, [])
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
