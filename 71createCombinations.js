


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




