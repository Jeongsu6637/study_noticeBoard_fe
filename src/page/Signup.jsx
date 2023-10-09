import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import '../style/Signup.css';
const Signup = () => {
    const nav = useNavigate();
    const [user, setUser] =useState({
        email:"",
        pw:"",
        name:""
    });
    const onChangeHandler = (e) =>{
        const {name, value} =e.target
        setUser({...user, [name]: value})
    }
    const onClickHandler = () => {
        axios.post("http://localhost:8080/api/user/signup", user)
        alert("회원가입이 되었습니다")
        nav('/main')
    }
    const onClickLogin = () => {
        nav('/login')
    }
    return<>
        <div>
            <div>
                <input className="infoInput" onChange={onChangeHandler} placeholder={"email"} name="email" type="text"/>
                <input className="infoInput" onChange={onChangeHandler} placeholder={"password"} name="pw" type="password"/>
                <input className="infoInput" onChange={onChangeHandler} placeholder={"name"} name="name" type="text"/>
                <button className="loginBtn" onClick={onClickHandler}>화원가입하기</button>
            </div>
            <div>
                <button className="loginBtn" onClick={onClickLogin}>로그인 하기</button>
            </div>
        </div>
    </>
}
export default Signup