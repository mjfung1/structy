
// n = length of items
// k = target length
// Time: ~O(n choose k)
// Space: ~O(n choose k)

const createCombinations = (items, k) => {
  // todo

  // if k === 0 then [[]] is only combination;
  if (k === 0) return [[]];

  // if there is less items than k => no combo can be made
  if (items.length < k) return [];

  const first = items[0];
  const comboWithFirst = [];
  // I expect this to return nested array so decrease k
  for (const combo of createCombinations(items.slice(1), k - 1)) {
    comboWithFirst.push([first, ...combo]);
  }

  // only decrease items length; so it can hit other base case
  const comboWithoutFirst = createCombinations(items.slice(1), k);

  return [...comboWithFirst, ...comboWithoutFirst];
};


// ------------------------------------------------ // 


const createCombinations = (items, k) => {
  // todo
  if (k === 0) return [[]]; 
  if (items.length < k) return [];
  
  const first = items[0];
  
  
  const combosWithFirst = [];
  for (let combo of createCombinations(items.slice(1), k-1)) {
    combosWithFirst.push([...combo, first])
  }
  
  const combosWithOutFirst = createCombinations(items.slice(1), k);
  
  return [...combosWithFirst, ...combosWithOutFirst];
};


// createCombinations(["a", "b", "c"], 2); // ->

    // with First      "a"      =>       [  [a,b] , [a,c] ]
    // createCombinations([b", "c"], 1);      //    [  [b] , [c] ]  =>   
          
        // with 1st    'b'      =>    [ [b] ]
        // createCombinations(["c"], 0);     [ [ ] ]

        // w/o 1st
        // createCombinations(["c"], 1);     [ [c] ]
        
        //    [  [b] , [c] ]
        
              
              // with 1st   'c'
              // createCombinations([], 0);   =>   [[c]]

              // without 1st
              // createCombinations([], 1);   =>    []

             //        [ [c] ]              


    // without First    [  [b,c ] ]
    // createCombinations([b", "c"], 2);
  
        // with 1st   [ [b, c] ]
        // createCombinations([c"], 1);    


              // with 1st
              // createCombinations([], 0);       [ [] ]

              // w/o 1st
              // createCombinations([], 1);         [];
          
            
        
        // w/o 1st    []
        // createCombinations(["c"], 2);      []
  


        // result array. this is the first half. still adding...
       // [  [a,b] , [a,c] , [b,c] ]


// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]




