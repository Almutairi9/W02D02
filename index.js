const addOne = (arr) => {
    const copyItems = [];  
    arr.forEach(function(item ) {
        copyItems.push(item + 1)
    })
    return copyItems; 
  };
  addOne([1,2,3]) // => [2,3,4]
  addOne([10,11,12]) // => [11,12,13]
  
  const addExclamation = (arr) => {
    const res = [];
    arr.forEach(function(item){
        res.push(item + ' ! ')
    })
    return res; 
  };
  
  addExclamation(["one","two","three"]) // => ["one!","two!","three!"] 

  const addOneByMap = (arr) => {
    const res = []; 
    arr.map(function(item){
         res.push(item + 1)
    }) 
    return res; 
  };
  addOneByMap([1,2,3]) // => [2,3,4]
  addOneByMap([10,11,12]) // => [11,12,13] 

  const addQuestion = (arr) => {
    const res = [];
    arr.forEach(function(item){
        res.push(item + '?') 
    })
    return res; 
  };
  
  addQuestion(["one","two","three"]) // => ["one?","two?","three?"]
  
  const forLoopTwoToThe = (arr) => {
    const res = [];
    arr.forEach(function(item){
        res.push(Math.pow(2,item))
    })
    return res; 
  };
  
  forLoopTwoToThe([1,2,3]) // => [2,4,8]

  const typeNum = (arr) => {
      const res = arr.filter(function(item){
          return typeof(item) === "number" ;
      }) 
    return res
}; 
   

  const containsAnd = (arr) => {
    const res = arr.filter(function(item){
        return item.includes ("and");
    }) 
  return res
}; 

const oddValues = (arr) => {
    const copyItems = [];  
    arr.filter(function(item ) {
        copyItems.push(item % 2 == 0)
    })  
    return copyItems; 
  }; 
//   typeNum([1, 'bob' ,3]) // => [1,3]
  
const addValues = (arr) => {
    const value = arr.reduce(function(acc , item) {
        acc += item
        return acc;
    },0)  
    return value; 
  }; 
  
//   addValues([1,2,3,4]) // => 10 مجموع الأرقام المدخله 
//   addValues([15,10,15,5]) // => 45
    
    const countNumberOfElements = (arr) => {
      let res = arr.reduce((acc ,item ,index ) => {
        acc = ++index;  // postfix 
        return acc ; 
      });
      return res ; 
    }; 
    countNumberOfElements ([1,2,3,4]); 
   

  
  
  
  
  
  
  
    
  
    