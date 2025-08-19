import { useState, useRef } from 'react';
import "../../assets/css/AddPhoto.css"

const PhotoUploadForm = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Проверка типа файла
    if (!file.type.match('image.*')) {
      setError('Пожалуйста, выберите файл изображения');
      return;
    }

    // Проверка размера файла (например, не более 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Файл слишком большой. Максимальный размер: 5MB');
      return;
    }

    setSelectedFile(file);
    setError(null);

    // Создание превью
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Пожалуйста, выберите файл');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Здесь может быть ваша логика загрузки
      // Например, отправка на сервер:
      // const formData = new FormData();
      // formData.append('photo', selectedFile);
      // const response = await uploadPhotoAPI(formData);
      
      // Имитация загрузки
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onUpload) {
        onUpload(selectedFile);
      }
      
      // Очистка формы после успешной загрузки
      setSelectedFile(null);
      setPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setError('Ошибка при загрузке файла: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="photo-upload-form">
      <h2>Добавить фото</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="photo-upload" className="upload-label">
            Выберите файл
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="file-input"
            />
          </label>
        </div>
        
        {preview && (
          <div className="preview-container">
            <img 
              src={preview} 
              alt="Предпросмотр" 
              className="preview-image"
            />
          </div>
        )}
        
        {error && <div className="error-message">{error}</div>}
        
        <button 
          type="submit" 
          disabled={isLoading || !selectedFile}
          className="submit-button"
        >
          {isLoading ? 'Загрузка...' : 'Загрузить фото'}
        </button>
      </form>
    </div>
  );
};

export default PhotoUploadForm;