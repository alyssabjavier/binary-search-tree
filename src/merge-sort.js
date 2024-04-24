function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        const midpoint = Math.floor(array.length / 2);
        const firstHalf = array.slice(0, midpoint);
        const secondHalf = array.slice(midpoint);

        const sortedFirstHalf = mergeSort(firstHalf);
        const sortedSecondHalf = mergeSort(secondHalf);

        return merge(sortedFirstHalf, sortedSecondHalf);
    }}

function merge(firstHalf, secondHalf) {
        const sortedArray = [];

        while (firstHalf.length > 0 && secondHalf.length > 0) {
            if (firstHalf[0] < secondHalf[0]) {
                const smallerItem = firstHalf.shift();
                sortedArray.push(smallerItem);
            } else if (firstHalf[0] > secondHalf[0]) {
                const smallerItem = secondHalf.shift();
                sortedArray.push(smallerItem);
            } else if (firstHalf[0] == secondHalf[0]) {
                const firstItem = firstHalf.shift();
                secondHalf.shift();
                sortedArray.push(firstItem);
            }
        }

        return sortedArray.concat(firstHalf, secondHalf);
    }

export { mergeSort, merge };