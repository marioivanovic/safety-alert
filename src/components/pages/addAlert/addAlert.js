import React from 'react'
import './_addAlert.scss'


function addAlert() {
    return (
        <div className="container">
            <form className="add-alert" onChange={this.handleInput} onSubmit={this.handleSubmit}>
                <h3 className="form-title">Ajouter une alerte</h3>
                <div className="form-item-wrapper flexed-item">
                    <label htmlFor="category" className="label-main-cat label">
                        Galeries :
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
        </div>
    )
}

export default addAlert;
