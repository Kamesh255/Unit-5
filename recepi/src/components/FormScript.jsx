const addTodo = (data,page) => {

    fetch('http://localhost:3002/userdata', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    }).then(()=>{
        getTodo(`http://localhost:3002/userdata?_page=${page}&_limit=5`)
    })
    
}
const getTodo = (url ,setTodo) => {
    fetch(url).then(res => res.json()).then(res => setTodo(res))
}
export {addTodo,getTodo}