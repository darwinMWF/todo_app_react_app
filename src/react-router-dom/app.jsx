import { Link, Route as Nav,Routes as Navigation } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";
import './app.css'


const Data = ()=>{
    
    let  {uid} = useParams();
    return <>
    {uid === 'u1'?<h1>hello useparams</h1>:null}
    </>
}

const Navigate = ()=>{
    const ReturnToHome = useNavigate();
    const handleredirect = ()=>{
        ReturnToHome('/')
    }
    return <>
    <button onClick={handleredirect}>redirect</button>
    </>
}

const App = ()=>{
  
    return <>
    <ul>
        <Link to='/'><li>home</li></Link>
        <Link to='/about/u1'><li>about</li></Link>
        <Link to='/contact'><li>contact</li></Link>
        <Link to='/menu'><li>menu</li></Link>

    </ul>
    <Navigation>
    <Nav path="/" element={<h1>react rouet dom</h1>}/>
    <Nav path="/about/:uid" element={<Data/>} />
    <Nav path="/contact" element={<Navigate/>}/>
    <Nav path="/menu" element={<h1>surat</h1>}/>
    </Navigation>
    </>
}


export default App;