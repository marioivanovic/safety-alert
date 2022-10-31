import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './_addAlert.scss'

// onChange={this.handleInput} onSubmit={this.handleSubmit}

function AddAlert() {
    const [alerts, setAlerts] = useState([]);
    const state = {
        alertId: '',
        alertType: ''
    };

    useEffect(() => {
        const postAlerts = async () => {
            try {
                axios.post("http://localhost:8080/api/safetyNetAlets/alert/addAlert")
                    .then((res) => {
                        setAlerts(res.data);
                    })

            }
            catch (e) {
                console.log(e)
            }
        }
        postAlerts();
    }, [])

    useEffect(() => {
        const getAlerts = async () => {
            try {
                axios.get("http://localhost:8080/api/safetyNetAlets/alert/list")
                    .then((res) => {
                        setAlerts(res.data);
                    })

            }
            catch (e) {
                console.log(e)
            }
        }
        getAlerts();
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // const { photoId, date, typePhotosId, taille, userId } = this.state;
        const fd = new FormData(); // formData est obligatoire pour envoyer des fichiers vers le backend
        // Doc : https://developer.mozilla.org/fr/docs/Web/API/FormData
        console.log('FD ICI', fd);

        // fd.append('photoId', this.state.photoId);
        fd.append('alertType', this.state.alertType);
        //  ----------------------------------------------
        console.log(' FD CONSOLE LOG', fd);
        // avant de passer l'objet formData (fd) à components/auth/AuthProvider
        console.log('>>>>>>> ICI', fd);
    };
    return (
        <div className="container">
            <form className="add-alert" onSubmit={handleSubmit}>
                <h3 className="form-title">Ajouter une alerte</h3>
                <div className="form-item-wrapper flexed-item">
                    <label htmlFor="category" className="label-main-cat label">
                        Alertes :
                    </label>
                    <select id="category" name="typePhotosId" className="select" required>
                        <option defaultValue="-1" disabled selected>
                            Choisir un type d'alerte :
                        </option>
                        <option value="1">Accident</option>
                        <option value="2">Incendie</option>
                        <option value="3">Assistance médicale</option>
                        <option value="4">Tremblement de terre</option>
                    </select>
                </div>
                <button type="submit" className="button button-primary white" text="Publier">Soumettre</button>
            </form>

            <div className="container-alerts">
                <h1 className="alert-title">Alertes</h1>
                {alerts ? alerts.map((alert, index) => {
                    return (
                        <li key={index} className="overview">

                            <div className="text-overview">
                                {alert.description}
                            </div>

                        </li>
                    );
                }) : null}
            </div>
        </div>
    )
}

export default AddAlert;
