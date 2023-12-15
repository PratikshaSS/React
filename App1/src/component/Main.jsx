import React  from "react"
import "../styles/main.css"
const Main = () => {
    return (
        <div className="main_container">
            <h1 className="heading1_main">I'm James Anderson</h1>
            <h1>A web developer</h1>
            <h5>This is from
                <span style={{color:"cyan"}}>colorlib</span>
            </h5>
        </div>
    )
}
export default Main