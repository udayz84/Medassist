import React from 'react'
import { Table } from 'reactstrap';
import moment from 'moment'

const MedicationDisplay = (props) => {

    let medDaily = []
    props.medications.map((eachMed) => {

        if (eachMed.time.length) {
            eachMed.time.map(t => {
                const newMed = { ...eachMed }
                newMed.time = t
                medDaily.push(newMed)
            })
        }
    })
    // console.log("medDaily", medDaily)

    let daily = []
    let weekly = []

    daily = medDaily.filter((eachMed) => {
        return eachMed.frequency === "Daily"
    })

    weekly = medDaily.filter((eachMed) => {
        return eachMed.frequency === "Weekly"
    })

    //compare function within sort function. 
    const compare = (a, b) => {
        // console.log(moment(a.time, 'MMMM D, YYYY HH:MM'))
        if (moment(a.time, 'MMMM D, YYYY HH:MM').isBefore(moment(b.time, 'MMMM D, YYYY HH:MM'))) {
            return -1
        } else {
            return 1
        }
    }

    daily.sort(compare)
    weekly.sort(compare)

    medDaily = [...daily, ...weekly]


    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th>Medication</th>
                    <th>Dose</th>
                    <th>Quantity</th>
                    <th>Schedule</th>
                    {/* <th>Start Day</th> */}
                    <th>Time</th>
                    <th>Notes</th>
                </tr>
            </thead>

            <tbody>
                {medDaily.length && medDaily.map((medication) => {

                    const date = moment(medication.startDate).format('dddd, YYYY-MM-DD')
                    const formateDateDisplay = moment(medication.startDate).format('dddd, Do MMM YYYY')

                    return (
                        <tr key={medication._id}>
                            <th scope="row" >{medication.name}</th>
                            <td>{medication.dosage}</td>
                            <td>{medication.totalQuantity}</td>
                            <td>{medication.frequency}</td>
                            {/* <th>{formateDateDisplay}</th> */}
                            <td>{moment(`${date} ${medication.time}`).format('h:mm a')}</td>
                            <td>{medication.notes}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    );
}

export default MedicationDisplay;