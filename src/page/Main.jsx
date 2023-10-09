import {useEffect, useState} from "react";
import axios from "axios";

const Main = () =>{
    const [board, setBoard] = useState([]);
    useEffect(() => {
         axios.get("http://localhost:8080/api/board")
            .then((response) => {
                setBoard(response.data);
                console.log(response.data)
            }).catch((err) => {
            console.log(err)
        });
    }, [])

    return<>
        <div>
            <h1> 여기가 메인 화면 </h1>
            <div>
                {board.map((el,index)=>(
                    <div key={index}>
                        <div>
                            <div>
                                {el.title}
                            </div>
                            <div>
                                {el.content}
                            </div>
                            <div>
                                {el.name}
                            </div>
                            <div>
                                {el.createAt}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}
export default Main;