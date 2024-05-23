// src/components/Registro.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Registro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    correo: '',
    contraseña: '',
    confirmarContraseña: '',
  });

  const [capturedImage, setCapturedImage] = useState(null);
  const [isFaceDetected, setIsFaceDetected] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing the camera: ', error);
      }
    };

    getUserMedia();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCapture = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const imageData = canvasRef.current.toDataURL('image/png');
    setCapturedImage(imageData);
    detectFace(imageData);
  };

  const detectFace = async (imageData) => {
    const apiEndpoint = '<tu_api_endpoint>'; // Coloca aquí tu endpoint de Amazon Rekognition
    const apiKey = '<tu_api_key>'; // Coloca aquí tu API Key de Amazon Rekognition

    const apiRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        imageBase64: imageData.replace('data:image/png;base64,', ''),
      }),
    };

    try {
      const response = await fetch(apiEndpoint, apiRequest);
      const data = await response.json();
      console.log('Response from Amazon Rekognition:', data);
      if (data.FaceDetails && data.FaceDetails.length > 0) {
        setIsFaceDetected(true);
      } else {
        setIsFaceDetected(false);
      }
    } catch (error) {
      console.error('Error calling Amazon Rekognition:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFaceDetected) {
      console.log('Face detected! Ready to submit the form.');
      console.log(formData);
      console.log(capturedImage);
      // Aquí puedes manejar la lógica para enviar los datos de registro junto con la imagen capturada
    } else {
      alert('Por favor, capture una imagen con un rostro visible.');
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-content">
        <div className="registro-form">
          <h2>Registrarse</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicApellidoPat">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido paterno"
                name="apellido_pat"
                value={formData.apellido_pat}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicApellidoMat">
              <Form.Label>Apellidos Materno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido materno"
                name="apellido_mat"
                value={formData.apellido_mat}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicCargo">
              <Form.Label>Cargo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su cargo en la empresa"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su teléfono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicDireccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su dirección"
                name="apellido_pat"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  name="contraseña"
                  value={formData.contraseña}
                  onChange={handleChange}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
                name="confirmarContraseña"
                value={formData.confirmarContraseña}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="camera-container">
              <video ref={videoRef} className="video-feed" autoPlay></video>
              <Button variant="primary" onClick={handleCapture}>
                Capturar Foto
              </Button>
              <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
            </div>

            {capturedImage && (
              <div className="captured-image">
                <h5>Imagen Capturada:</h5>
                <img src={capturedImage} alt="captured" />
              </div>
            )}

            <div className="button">
            <Button variant="primary" type="submit" className="submit-btn">
              Registrarse
            </Button>
            </div>

          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
