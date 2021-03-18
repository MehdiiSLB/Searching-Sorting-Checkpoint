const arr = [
  {
    name: "Jean",
    salary: 1000,
  },
  {
    name: "Akram",
    salary: 300,
  },
  {
    name: "Leila",
    salary: 700,
  },
];
​
arr.sort((a, b) => {
  if (a.salary > b.salary) return 1;
  if (b.salary > a.salary) return -1;
  return 0;
});
​
console.log(arr);
​
const arr = [1, 5, 4, 7, 87, 96, 5, 8, 41, 2, 3];
const result = arr.find((elem) => {
  if(elem == 5) return true
  return false
})
console.log(result)
​
const arr = [
  {
    name: "Jean",
    salary: 1000,
  },
  {
    name: "Akram",
    salary: 300,
  },
  {
    name: "Leila",
    salary: 700,
  },
];
const result = arr.findIndex((elem) => {
  if(elem.name === "Leila" ) return true
  return false
})
console.log("Le resultat est : ",result)
​
const arr = [3, 5, 4, 7, 87, 96, 5, 8, 41, 2, 3];
const arr2 = []
​
for(let i =0;i< arr.length;i++){
  arr2.push(arr[i]);
  for(let j=arr2.length-2;j>=0;j--){
    if(arr2[j] > arr2[j+1]){
      [arr2[j],arr2[j+1]] = [arr2[j+1],arr2[j]]
    }else{
      break
    }
  }
}
console.log(arr2)
​
try {
  const resultat = eval("5*1");
} catch (error) {
  console.log("erreur");
}