import '../../assets/css/Landmarks.css'
import { Outlet,Link} from 'react-router-dom';
import OtherLandmark from './OtherLandmark.jsx';
import wall from '../../assets/city/набержная.jpg';



function FamouseLandmark(){
    return(
        <div className='text'>
            <Link to="otherlandmarks">Другие достопримечательности</Link>
            <h2>Набережная</h2>
            <div className = "head-image">
                <img src= {wall}/>
                <Outlet/>
            </div>
       </div>
       
    )
}

export default FamouseLandmark;