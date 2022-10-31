import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './_home.scss'

function Home() {
    const [persons, setPersons] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [firestations, setFireStations] = useState([]);

    useEffect(() => {
        const getAllPersons = async () => {
            try {
                axios.get("http://localhost:8080/api/safetyNetAlets/persons")
                    .then((res) => {
                        setPersons(res.data);
                    })
            }
            catch (e) {
                console.log(e)
            }
        }
        getAllPersons();
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

    useEffect(() => {
        const getFireStations = async () => {
            try {
                axios.get("http://localhost:8080/api/safetyNetAlets/fireStation")
                    .then((res) => {
                        setFireStations(res.data);
                    })
                // setFireStations(firestations);
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
                {/* <button type="" onClick={test}>test</button> */}
                <h1 className="persons-title">Personnes</h1>
                <div className="container_persons">
                    {persons ? persons.map((person, index) => {
                        return (

                            <li key={index} className="overview">

                                <div className="text-overview">
                                    {person.username}
                                </div>
                                <div className="text-overview">
                                    {person.lastName}
                                </div>
                                <div className="text-overview">
                                    {person.phone}
                                </div>
                                <div className="text-overview">
                                    {person.email}
                                </div>

                            </li>

                        );
                    }) : null}
                </div>
            </div>

            <div className="container-stations">
                <h1 className="stations-title">Stations</h1>
                <div className="container_stations">
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
        </div>
    )
}

export default Home;