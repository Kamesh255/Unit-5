 // Closures
 // A closure is the combination of a function, In JavaScript closure give you access to 
 // outer function’s scope from inner function. 

 let f = 10
 const outerFun =(a)=>{
     let b = 10 
     const innerFun=()=>{
         let c= 5
         console.log(a+b+c+f)
     }
     return innerFun()
 }
 outerFun(5)
 