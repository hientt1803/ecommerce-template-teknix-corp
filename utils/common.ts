export const quickSort = (
    arr: any[],
    key: string,
    ascending: boolean = true
  ): any[] => {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) continue;

      if (ascending) {
        if (arr[i][key] < pivot[key]) left.push(arr[i]);
        else right.push(arr[i]);
      } else {
        if (arr[i][key] > pivot[key]) left.push(arr[i]);
        else right.push(arr[i]);
      }
    }

    return [
      ...quickSort(left, key, ascending),
      pivot,
      ...quickSort(right, key, ascending),
    ];
  };