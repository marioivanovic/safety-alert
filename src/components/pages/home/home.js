import React, { useState, useEffect } from 'react'
import { getPersons, getAlerts, getFireStations } from "../../../utils/apiServices"
import './_home.scss'

function Home() {
    const [persons, setPersons] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [firestations, setFireStations] = useState([]);

    useEffect(() => {
        const getPersons = async () => {
            try {
                let persons = await getPersons();
                console.log(persons);
                setPersons(persons);
            }
            catch (e) {
                console.log(e)
            }
        }
        getPersons();
    }, [])

    useEffect(() => {
        const getAlerts = async () => {
            try {
                let alerts = await getAlerts();
                console.log(alerts);
                setAlerts(alerts);
            }
            catch (e) {
                console.log(e)
            }
        }
        getAlerts();
    }, [])

    useEffect(() => {
        const getFireStations = async () => {
            try {
                let firestations = await getFireStations();
                console.log(firestations);
                setFireStations(firestations);
            }
            catch (e) {
                console.log(e)
            }
        }
        getFireStations();
    }, [])

    return (
        <div className="container-home">
            <h1 className="home-title">Accueil</h1>
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

            <div className="container-persons">
                <h1 className="persons-title">Personnes</h1>
                {persons ? persons.map((person, index) => {
                    return (
                        <li key={index} className="overview">

                            <div className="text-overview">
                                {person.firstName}
                            </div>
                            <div className="text-overview">
                                {person.lastName}
                            </div>
                            <div className="text-overview">
                                {person.city}
                            </div>
                            <div className="text-overview">
                                {person.email}
                            </div>

                        </li>
                    );
                }) : null}

            </div>

            <div className="container-stations">
                <h1 className="stations-title">Stations</h1>
                {firestations ? firestations.map((firestation, index) => {
                    return (
                        <li key={index} className="overview">

                            <div className="text-overview">
                                {firestation.address}
                            </div>
                            <div className="text-overview">
                                {firestation.station}
                            </div>
                        </li>
                    );
                }) : null}
            </div>
        </div>
    )
}

export default Home;