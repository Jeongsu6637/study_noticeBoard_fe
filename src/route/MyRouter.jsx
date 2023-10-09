import Login from "../page/Login";
import Signup from "../page/Signup";
import Main from "../page/Main";
import Template from "./Template";
import {Route, Routes} from "react-router";
import {Link} from "react-router-dom";



const MyRouter = ()=>{
    const myRoutes = [
        {
            path:"/login", component:<Login/>
        },{
            path:"/signup", component:<Signup/>
        },{
            path:"/main", component:<Main/>
        }
    ]
    return <Routes>
        <Route path={"/"} element={<h1><Link to={"/signup"}>Signup</Link></h1>}></Route>
        <Route element={<Template />}>
            {myRoutes.map(el=>
                <Route key={el.path} path={el.path} element={el.component}></Route>
            )}
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
        </Route>
    </Routes>
}
export default MyRouter