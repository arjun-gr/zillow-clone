import ReactDOM from "react-dom/client"
import App from "./App"

let Index =()=>{
    return(
        <App/>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Index/>)