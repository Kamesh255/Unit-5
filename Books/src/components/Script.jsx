// const addTodo = (data) => {
//     console.log(data)
//     fetch('http://localhost:3001/data', {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "content-type": "application/json"
//         }
//     }).then(()=>{
//         getTodo(`http://localhost:3001/data`)
//     })
    
// }
// const getTodo = (url ,setTodo) => {
//     fetch(url).then(res => res.json()).then(res => setTodo(res))
// }
// export {addTodo,getTodo}