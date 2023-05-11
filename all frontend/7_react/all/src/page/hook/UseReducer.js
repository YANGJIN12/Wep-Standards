import { useReducer } from "react";


const initialTodos = [
  {
    id:1,
    title:"Todo 1",
    complete:false,
  },
  {
    id:2,
    title:"Todo 2",
    complete:false,
  },
];

const reducer = (state, action) =>{
  switch(action.type){
    case "Complete":
      return state.map((todo) => {
      if(todo.id == action.id){
        return {...todo, complete: !todo.complete};      
      }else{
        return todo;
      }
    });
    default:
      return state;
  }
}

const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleComplete = (todo) => {
    dispatch ({type:"Complete", id: todo.id});
  }
  return(
    <>
    <h1>Reducer</h1>
    <pre>
    useState와 동일함<br/> 
    사용자 지정 상태 논리를 허용<br/>
    복잡한 논리에 의존하는 여러상태 조각을 추적하는 경우 유용할 수 있음<br/>
    </pre>
    {
      todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
            type="checkbox"
            checked={todo.complete}
            onChange={()=> handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))
    }
    </>
  )
}
export default UseReducer;