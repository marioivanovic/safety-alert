import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './_persons.scss'

function Persons() {
    const [persons, setPersons] = useState([]);
    const [medicalRecords, setmedicalRecords] = useState([]);


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
        const getmedicalRecords = async () => {
            try {
                axios.get("http://localhost:8080/api/safetyNetAlets/medicalRecords")
                    .then((res) => {
                        setmedicalRecords(res.data);
                    })

            }
            catch (e) {
                console.log(e)
            }
        }
        getmedicalRecords();
    }, [])

    return (
        <div className="container-home">
            <h1 className="persons-title">Habitants</h1>


            <div className="container-persons">
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
            <div className="container_persons">
                {medicalRecords ? medicalRecords.map((medicalRecord, index) => {
                    return (

                        <li key={index} className="overview">

                            <div className="text-overview">
                                {medicalRecord.username}
                            </div>
                            <div className="text-overview">
                                {medicalRecord.lastName}
                            </div>
                            <div className="text-overview">
                                {medicalRecord.phone}
                            </div>
                            <div className="text-overview">
                                {medicalRecord.email}
                            </div>

                        </li>

                    );
                }) : null}
            </div>
        </div>
    )
}

export default Persons;