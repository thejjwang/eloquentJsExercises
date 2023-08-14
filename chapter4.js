// sum of a range
const range = (start, end) => {
    const myArr = [];
    for (let i = start; i < end +1; i++) {
        myArr.push(i);
    }
    return myArr
}

const sum = (numbersArr) => {
    let total = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        total += numbersArr[i];
    }
    return total;
}

// recersing a list
const reverseArray = (arr) => {
    const newArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray(["A", "B", "C"]));

const reverseArrayInPlace = (array) => {
	const lastIndex = array.length - 1;
	for (let index = 0; index < Math.floor(array.length / 2); index++) {
		// Swap elements of first & last elements, then second & second-last elements and so on...
		let firstValue = array[index];
		array[index] = array[lastIndex - index];
		array[lastIndex - index] = firstValue;
	}
}


let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// a list

function arrayToList(array) {
    if (!array.length) {
        return {};
    }

    let list = {
        value: array[0]
    };
    // if array is only one element make it the head and tail of list
    if (array.length == 1) {
        list.rest = null;
        return list;
    }
    // recursive call, this recursive call generates the next node in the linked list. 
    list.rest = arrayToList(array.slice(1));
    return list;
}

function listToArray(list) {
    // Checking whether user has passed a non-empty array as an argument.
    if (!Object.keys(list).length) {
        return [];
    }
    
    let array = [list.value];
  
    // Base Step: Node is the TAIL of the List.
    if (list.rest === null) {
        return array;
    }

    // Recursive Step: Concatenate the array returned by calling the function itself
    // if the List node contains a reference to another List node via `rest` property.

    // Note about concat() method of an Array
    // The concat() method is immutable i.e., it does not alter `array`.
    // It just creates a new array containing the elements of the two arrays.
    return array.concat(listToArray(list.rest));
}

function prepend(element, list) {
    if (list !== null && !Object.keys(list).length) {
        return {
            value: element,
            rest: null
        }
    }
  
    // Add the element to the front of (Linked) List, `list`.
    return {
        value: element,
        rest: list
    };
}

function nth(list, index) {
    // Return undefined if `list` is an empty List i.e., {}.
    if (!Object.keys(list).length) {
        return undefined;
    }

    // Create a helper arrow function to keep track of the current index
    // (while moving deeper into the `list`) & get the value at `index` (if it exists).
    const get_value = (list, index, current_index) => {     
        // Base Step 1: Current node is the HEAD of `list`.
        if (list.rest === null) {
            if (current_index == index) {
                return list.value;
            }
            else {
                return undefined;
            }
        }
        
        // Base Step 2: Current Node is at the index specified by `index`.
        if (current_index == index) {
            return list.value;
        }
        else {
            // Recursive Step: Invokes get_value() on the node referenced by `rest` 
            // with `current_index` being incremented by 1.
          
            // Alternate Approach: If increment operator (++) operates on `current_index`,
            // use the prefix version (`++current_index`) instead of the 
            // postfix version (`current_index++`).
            return get_value(list.rest, index, current_index += 1);
        }
    }
    
    return get_value(list, index, 0);
}
console.log(arrayToList([10, 20]));

// deep comparison
const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) {
        return true;
    }   

}