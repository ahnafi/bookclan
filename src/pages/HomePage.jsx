import {Link} from "react-router-dom"
const HomePage = ()=>{
    return (
        <div>
            <h1>hello page</h1>
            <Link to="/library" className="px-2 py-2 block bg-sky-700">LIBRARY </Link>
        </div>
    )
}
export default HomePage