import React, { useState, useEffect, useRef } from 'react';
//import * as facemesh from '@tensorflow-models/facemesh';
import Webcam from 'react-webcam';
import 'tailwindcss/tailwind.css';

const FacialRecognition = () => {
    /*const [model, setModel] = useState(null);
    const [registeredFace, setRegisteredFace] = useState(null);
    const [message, setMessage] = useState('');
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        // Charger le modèle facemesh
        const loadModel = async () => {
            const loadedModel = await facemesh.load();
            setModel(loadedModel);
        };
        loadModel();
    }, []);

    const captureFace = async () => {
        if (webcamRef.current && model) {
            const video = webcamRef.current.video;
            const predictions = await model.estimateFaces(video);
            if (predictions.length > 0) {
                const descriptor = predictions[0].scaledMesh;
                setRegisteredFace(descriptor);
                drawMesh(predictions, canvasRef.current);
                setMessage('Visage enregistré avec succès.');
            } else {
                setMessage('Aucun visage détecté. Veuillez réessayer.');
            }
        }
    };

    const verifyFace = async () => {
        if (webcamRef.current && model && registeredFace) {
            const video = webcamRef.current.video;
            const predictions = await model.estimateFaces(video);
            if (predictions.length > 0) {
                const descriptor = predictions[0].scaledMesh;
                drawMesh(predictions, canvasRef.current);
                const distance = computeEuclideanDistance(descriptor, registeredFace);
                console.log("Distance:", distance);
                if (distance < 0.6) { // Ajustez le seuil ici si nécessaire
                    setMessage('Accès validé');
                } else {
                    setMessage('Accès refusé');
                }
            } else {
                setMessage('Aucun visage détecté. Veuillez réessayer.');
            }
        }
    };

    const computeEuclideanDistance = (desc1, desc2) => {
        let sum = 0;
        for (let i = 0; i < desc1.length; i++) {
            const dx = desc1[i][0] - desc2[i][0];
            const dy = desc1[i][1] - desc2[i][1];
            sum += dx * dx + dy * dy;
        }
        return Math.sqrt(sum);
    };

    const drawMesh = (predictions, canvas) => {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        predictions.forEach(prediction => {
            const keypoints = prediction.scaledMesh;
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 0.5;

            for (let i = 0; i < keypoints.length; i++) {
                const x = keypoints[i][0];
                const y = keypoints[i][1];
                ctx.beginPath();
                ctx.arc(x, y, 1, 0, 2 * Math.PI);
                ctx.stroke();
            }
        });
    };*/

    return (
        <div className="container mx-auto p-4">
           {/* <h1 className="text-center text-2xl font-bold">Système de reconnaissance faciale</h1>
            <div className="relative flex justify-center mt-4">
                <Webcam ref={webcamRef} className=" border-2 border-gray-300" />
                <canvas ref={canvasRef} className="absolute" width="640" height="480" />
            </div>
            <div className="text-center mt-4">
                {model ? (
                    <>
                        <button
                            onClick={captureFace}
                            className="bg-blue-500 text-white py-2 px-4 rounded m-2"
                        >
                            Enregistrer le visage
                        </button>
                        <button
                            onClick={verifyFace}
                            className="bg-green-500 text-white py-2 px-4 rounded m-2"
                        >
                            Vérifier le visage
                        </button>
                    </>
                ) : (
                    <p>Chargement des modèles...</p>
                )}
            </div>
            <div className="mt-4 p-4 border rounded text-center">
                <p><strong>Message:</strong> {message}</p>
            </div>*/}
        </div>
    );
};

export default FacialRecognition;
