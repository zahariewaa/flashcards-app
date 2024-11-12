interface SortStep {
  array: number[];
  comparing: number[];
  swapping: number[];
}

export function bubbleSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const n = arr.length;
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      steps.push({
        array: [...arr],
        comparing: [i, i + 1],
        swapping: [],
      });

      if (arr[i] > arr[i + 1]) {
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [i, i + 1],
        });

        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
  });

  return steps;
}

export function quickSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  
  function partition(low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      steps.push({
        array: [...arr],
        comparing: [j, high],
        swapping: [],
      });

      if (arr[j] < pivot) {
        i++;
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [i, j],
        });

        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [i + 1, high],
    });

    const temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
  }

  function quickSortHelper(low: number, high: number) {
    if (low < high) {
      const pi = partition(low, high);
      quickSortHelper(low, pi - 1);
      quickSortHelper(pi + 1, high);
    }
  }

  quickSortHelper(0, arr.length - 1);
  
  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
  });

  return steps;
}