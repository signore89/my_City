import wall from "../../assets/city/Perm.jpeg";
import PhotoUploadForm from "./AddPhotoForm";



function Gallery(){
    const handleUpload = (file) => {

    }
    return(
        <div>
            <img src= {wall}/>
            <div className="photos">
                <PhotoUploadForm onUpload={handleUpload}/>
            </div>
        </div>
    )
}

export default Gallery;