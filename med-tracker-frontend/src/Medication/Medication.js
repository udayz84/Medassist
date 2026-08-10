import React, { useState, useEffect } from 'react'
import './Medication.css'
import { Jumbotron } from 'reactstrap'
import { Redirect } from 'react-router-dom'

import MedicationDisplay from './MedicationDisplay'
import { getMedicationsList } from '../Api'


const Medication = (props) => {

    const [medications, setMedications] = useState([])
    const [editMedication, setEditMedication] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        refreshMedicationList()

    }, [])

    const refreshMedicationList = async () => {
        setLoading(true)
        setError(null)
        try {
            const medList = await getMedicationsList()
            setMedications(medList || [])
        } catch (err) {
            console.error("Failed to fetch medications:", err)
            setError("Could not load medications. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    const editMed = (medID) => {
        // console.log('editMed ', medID)
        setEditMedication(medID)
        console.log('editMed again ', medID)
    }

    return (
        <div>

            <Jumbotron className='Jumbo'>
                <h1 className="display-3">Medication Tracker</h1>
                <p className="lead">Welcome, to your personal medication/supplement tracking app. </p>
            </Jumbotron>

            {loading && <div className="text-center my-5"><p>Loading medications...</p></div>}

            {!loading && error && (
                <div className="alert alert-danger mx-3" role="alert">
                    {error}
                </div>
            )}

            {!loading && !error && medications.length === 0 && (
                <div className="text-center my-5">
                    <h4>No medications found</h4>
                    <p>Use the navigation to add your first medication.</p>
                </div>
            )}

            {!loading && !error && medications.length > 0 && (
                <MedicationDisplay medications={medications} editMed={editMed} />
            )}
            <React.Fragment>
                {
                    editMedication && <Redirect to={`/edit/id:${editMedication}`} />
                }
            </React.Fragment>
        </div>
    )
}

export default Medication