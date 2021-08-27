function bubbleSort(a) {
    let swapped = false;

   do {
        swapped = false;    
        for(let i = 0; i < a.length; i++) {
          if(a[i] > a[i + 1]) {
            const tmp = a[i];
            a[i] = a[i+1];
            a[i+1] = tmp;

        swapped = true;
          }   
        }
   } while(swapped)
   
   return a;
}

export default bubbleSort;