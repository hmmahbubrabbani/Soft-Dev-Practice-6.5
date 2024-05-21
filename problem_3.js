const ar = [5, 2, 8, 1, 9, 3, 20, 19 ,4 , 18, 16, 17, 14, 15, 6, 12, 11 ,7 ,13, 10];
const length = ar.length;

for (let i = 0; i < length - 1; i++) 
  {
  for (let j = i+1; j < length; j++) 
    {
    if (ar[i] > ar[j]) 
      {
        const temp = ar[j];
        ar[j] = ar[i];
        ar[i] = temp;
      }
    }
  }

console.log(ar);