import {useState, createContext, useContext} from "react";

const UserContext = createContext();

const UseContext = () =>{
  const [user, setUser] = useState("jesee Hall");
  return(
    <>
    <UserContext.Provider value={user}>
    <h1>{`hello ${user}!`}</h1>
    <Com2/>
    </UserContext.Provider>
    </>
  )
}
const Com2 = () =>{
  return(
    <>
    <h1>Com2</h1>
    <Com3/>
    </>
  )
}
const Com3 = () =>{
  return(
    <>
    <h1>Com3</h1>
    <Com4/>
    </>
  )
}
const Com4 = () =>{
  return(
    <>
    <h1>Com4</h1>
    <Com5/>
    </>
  )
}
const Com5 = () =>{
  const user = useContext(UserContext)
  return(
    <>
    <h1>Com5</h1>
    <h2>{`hello ${user} again!`}</h2>
    </>
  )
}
export default UseContext;