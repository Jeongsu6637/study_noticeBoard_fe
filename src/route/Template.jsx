import {Outlet} from "react-router";

const Template = ()=>{
    return <div>
        <div>
            <section>
                <div>
                    <Outlet/>
                </div>
            </section>
        </div>
    </div>
}
export default Template