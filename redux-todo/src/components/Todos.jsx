import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../redux/action";

export const Todos = () => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [upID, setUpdateId] = useState("");

  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);
  async function updateStatus(id, status) {
    try {
      await fetch(`http://localhost:4000/Todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: !status }),
      });
      getTodos();
    } catch (err) {
      console.log(err);
    }
  }
  const updateTodo = async () => {
    try {
      await fetch(`http://localhost:4000/Todos/${upID}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: text }),
      });
      setShow(false);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };
  function setUpdates(id) {
    setUpdateId(id);
    setShow(true);
  }
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:4000/Todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  async function getTodos() {
    try {
      dispatch(getTodoLoading());
      let res = await fetch("http://localhost:4000/Todos");
      let data = await res.json();
      dispatch(getTodoSuccess(data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
  }
  return loading ? (
    <div>LOADING...</div>
  ) : error ? (
    <div>Something went wrong!</div>
  ) : (
    <div>
      <h1 style={{backgroundColor:"burlywood"}}>TODO APPLICATION</h1>
      <h3>Enter new tasks to do, update or delete</h3>
      <input style={{width:"300px",height:"35px"}}
        value={text}
        type="text"
        placeholder="ENTER TODO"
        onChange={(e) => setText(e.target.value)}
      />
      <button style={{width:"100px",height:"40px"}}
        onClick={() => {
          dispatch(addTodoLoading());
          fetch("http://localhost:4000/Todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: false, title: text, id: nanoid() }),
          })
            .then((res) => res.json())
            .then((res) => {
              //success
              dispatch(addTodoSuccess(res));
            })
            .catch((e) => dispatch(addTodoError(e)));
        }}
      >
        Add Todo
      </button>
      {todos.map((e) => (
        <>
          <div className="titleWrapper" style={{border:"1px solid",width:"400px", margin:"auto"}}>
            <div key={e.id} id={e.id}>
             <h4>Title : {e.title}</h4>
            </div>
            <div className="lists">
              <button style={{height:"30px", borderRadius:"15px",margin:"10px",fontSize:"12px"}} onClick={() => setUpdates(e.id)}>Update Todo</button>
              <button style={{height:"30px", borderRadius:"15px",margin:"10px",fontSize:"12px"}} onClick={() => deleteTodo(e.id)}>Delete Todo</button>
              {e.status ? (
                <button style={{height:"30px", borderRadius:"15px",margin:"10px",fontSize:"12px",backgroundColor:"greenyellow"}}
                  key={nanoid()}
                  onClick={() => updateStatus(e.id, e.status)}
                  className="completed_Status"
                >
                  COMPLETED
                </button>
              ) : (
                <button style={{height:"30px", borderRadius:"15px",margin:"10px",fontSize:"12px"}}
                  key={nanoid()}
                  onClick={() => updateStatus(e.id, e.status)}
                  className="uncom_status"
                >
                  MARK AS COMPLETED
                </button>
              )}
            </div>
          </div>
        </>
      ))}
      {show ? (
        <div className="update_form">
          <input
            value={text}
            type="text"
            placeholder="ENTER UPDATE TODO"
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => updateTodo()}>Update TODO</button>
        </div>
      ) : null}
    </div>
  );
};