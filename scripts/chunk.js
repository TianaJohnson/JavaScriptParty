const chunkArray = (arr, len) => {
    // initiate chunked array 
    const chunkedArr = [];

    //loop though array
    arr.forEach(val => {
        // Get last element
        const last = chunkedArr[chunkedArr.length - 1];

        // Check if last and if last length is equal to the chunk length
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }

    });

    return chunkedArr;
};

module.exports = chunkArray;