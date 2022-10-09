import api from './api';

export const getPersonById = async (id) => {
    let person = await api.get(`/:personId`);
    person = person.data;
    console.log("---p-->", person);
    return person.results;
};

export const getPersons = async () => {
    let persons = await api.get(`/api/safetyNetAlets/persons`);
    persons = persons.data;
    console.log("--ps-", persons)
    return persons.results;
};

export const getAlerts = async () => {
    let alerts = await api.get(`/list`);
    alerts = alerts.data;
    console.log("--al-", alerts)
    return alerts.results;
};

export const getFireStations = async () => {
    let firestations = await api.get(`/firestations`);
    firestations = firestations.data;
    console.log("--ps-", firestations)
    return firestations.results;
};