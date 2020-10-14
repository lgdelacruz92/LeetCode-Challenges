function heapSort(a) {

    function heapify(a, i) {
        let leftChild;
        const leftChildIndex = 2 * i + 1;
        if (leftChildIndex < a.length) {
            leftChild = a[leftChildIndex];
        }

        let rightChild;
        const rightChildIndex = 2 * i + 2;
        if (rightChildIndex < a.length) {
            rightChild = a[rightChildIndex];
        }

        if (leftChild && rightChild) {
            if (rightChild < leftChild) {
                if (a[i] > rightChild) {
                    a[rightChildIndex] = a[i];
                    a[i] = rightChild;
                    heapify(a, rightChildIndex);
                }
            } else {
                if (a[i] > leftChild) {
                    a[leftChildIndex] = a[i];
                    a[i] = leftChild;
                    heapify(a, leftChildIndex);
                }
            }
        } else if (leftChild) {
            if (a[i] > leftChild) {
                a[leftChildIndex] = a[i];
                a[i] = leftChild;
                heapify(a, leftChildIndex);
            }
        }
    }

    for (let i = Math.floor(a.length / 2); i >= 0; i--) {
        heapify(a, i);
    }
    console.log(a);
}

const a = [2,8,5,3,9,1];
heapSort(a);
heapSort([]);
heapSort([4,4,2,3,5]);