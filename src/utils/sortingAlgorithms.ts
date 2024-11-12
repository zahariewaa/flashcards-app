interface SortStep {
  array: number[];
  comparing: number[];
  swapping: number[];
  pivot?: number;
  auxiliaryArray?: number[];
  highlights?: number[];
}

export function bubbleSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapping: [],
      });
      
      if (arr[j] > arr[j + 1]) {
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [j, j + 1],
        });
        
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  steps.push({ array: [...arr], comparing: [], swapping: [] });
  return steps;
}

export function quickSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  
  function partition(low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;
    
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      pivot: high,
    });
    
    for (let j = low; j < high; j++) {
      steps.push({
        array: [...arr],
        comparing: [j, high],
        swapping: [],
        pivot: high,
      });
      
      if (arr[j] <= pivot) {
        i++;
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [i, j],
          pivot: high,
        });
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [i + 1, high],
      pivot: high,
    });
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
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
  steps.push({ array: [...arr], comparing: [], swapping: [] });
  return steps;
}

export function insertionSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const n = arr.length;
  
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    
    steps.push({
      array: [...arr],
      comparing: [i, j],
      swapping: [],
    });
    
    while (j >= 0 && arr[j] > key) {
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [j, j + 1],
      });
      
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  
  steps.push({ array: [...arr], comparing: [], swapping: [] });
  return steps;
}

export function mergeSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  
  function merge(l: number, m: number, r: number) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = arr.slice(l, m + 1);
    const R = arr.slice(m + 1, r + 1);
    
    let i = 0, j = 0, k = l;
    
    while (i < n1 && j < n2) {
      steps.push({
        array: [...arr],
        comparing: [l + i, m + 1 + j],
        swapping: [],
        highlights: [l + i, m + 1 + j],
      });
      
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
    
    while (i < n1) {
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        highlights: [k],
      });
      arr[k] = L[i];
      i++;
      k++;
    }
    
    while (j < n2) {
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        highlights: [k],
      });
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  
  function mergeSortHelper(l: number, r: number) {
    if (l < r) {
      const m = Math.floor(l + (r - l) / 2);
      mergeSortHelper(l, m);
      mergeSortHelper(m + 1, r);
      merge(l, m, r);
    }
  }
  
  mergeSortHelper(0, arr.length - 1);
  steps.push({ array: [...arr], comparing: [], swapping: [] });
  return steps;
}

export function selectionSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    
    for (let j = i + 1; j < n; j++) {
      steps.push({
        array: [...arr],
        comparing: [minIdx, j],
        swapping: [],
      });
      
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    if (minIdx !== i) {
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [i, minIdx],
      });
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  
  steps.push({ array: [...arr], comparing: [], swapping: [] });
  return steps;
}

export function heapSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const n = arr.length;

  function heapify(size: number, root: number) {
    let largest = root;
    const left = 2 * root + 1;
    const right = 2 * root + 2;

    steps.push({
      array: [...arr],
      comparing: [largest, left, right].filter(i => i < size),
      swapping: [],
      highlights: [root],
    });

    if (left < size && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== root) {
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [root, largest],
        highlights: [root, largest],
      });

      [arr[root], arr[largest]] = [arr[largest], arr[root]];
      heapify(size, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [0, i],
      highlights: [0, i],
    });

    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(i, 0);
  }

  steps.push({ array: [...arr], comparing: [], swapping: [], highlights: [] });
  return steps;
}

export function shellSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      steps.push({
        array: [...arr],
        comparing: [j, j - gap],
        swapping: [],
        highlights: Array.from({ length: n }, (_, idx) => idx).filter(x => x % gap === 0),
      });

      while (j >= gap && arr[j - gap] > temp) {
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [j, j - gap],
          highlights: Array.from({ length: n }, (_, idx) => idx).filter(x => x % gap === 0),
        });

        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }
  }

  steps.push({ array: [...arr], comparing: [], swapping: [], highlights: [] });
  return steps;
}

export function countingSort(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const n = arr.length;
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  const output = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      highlights: [i],
      auxiliaryArray: [...count],
    });
  }

  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      highlights: [],
      auxiliaryArray: [...count],
    });
  }

  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
    steps.push({
      array: [...output],
      comparing: [],
      swapping: [],
      highlights: [i, count[arr[i]]],
      auxiliaryArray: [...count],
    });
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }

  steps.push({ array: [...arr], comparing: [], swapping: [], highlights: [], auxiliaryArray: [] });
  return steps;
}