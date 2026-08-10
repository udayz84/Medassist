import React, { useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { DatePicker, Space } from 'antd'

const MedicationNew = (props) => {

    const [name, setName] = useState(props.medication.name)
    const [totalQuantity, setTotalQuantity] = useState(props.medication.totalQuantity)
    const [dosage, setDosage] = useState(props.medication.dosage)
    const [startDate, setStartDate] = useState(props.medication.startDate)
    const [frequency, setFrequency] = useState(props.medication.frequency)
    const [time, setTime] = useState(props.medication.time)
    const [reminder, setReminder] = useState(props.medication.reminder)
    const [notes, setNotes] = useState(props.medication.notes)
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()

        const newErrors = {}
        if (!name || name.trim() === '') newErrors.name = "Name is required."
        if (!totalQuantity || isNaN(totalQuantity) || Number(totalQuantity) <= 0) newErrors.totalQuantity = "Valid quantity is required."
        if (!dosage || isNaN(dosage) || Number(dosage) <= 0) newErrors.dosage = "Valid dosage is required."
        if (!frequency || frequency === "Select your frequency") newErrors.frequency = "Frequency is required."
        if (!time || time.length === 0) newErrors.time = "At least one time is required."
        if (!reminder || reminder.length === 0) newErrors.reminder = "At least one reminder is required."

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})

        props.submitHandler({
            name,
            totalQuantity,
            dosage,
            startDate,
            frequency,
            time,
            reminder,
            notes,
        }).then(() => {

        })

        setName('')
        setTotalQuantity('')
        setDosage('')
        setStartDate('')
        setFrequency('')
        setTime([])
        setReminder([])
        setNotes('')
    }

    function addSelectedTimes(event) {
        const selectedOptions = [...event.target.selectedOptions].map(o => o.value)
        setTime(selectedOptions)
        if (errors.time) setErrors({ ...errors, time: null })
    }

    function addSelectedReminder(event) {
        const selectedOptions = [...event.target.selectedOptions].map(o => o.value)
        setReminder(selectedOptions)
        if (errors.reminder) setErrors({ ...errors, reminder: null })
    }

    function onChangeStartDate(date, dateString) {
        console.log(date, dateString);
        setStartDate(dateString)
    }

    return (
        <>

            <Form onSubmit={handleSubmit} >
                <FormGroup row>
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Add Medication/Suppliment name"
                            invalid={!!errors.name}
                            onChange={(e) => {
                                setName(e.currentTarget.value)
                                if (errors.name) setErrors({ ...errors, name: null })
                            }}
                            value={name}
                        />
                        {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="totalQuantity" sm={2}>Total Quantity</Label>
                    <Col sm={10}>
                        <Input
                            type="number"
                            min="1"
                            name="totalQuantity"
                            id="totalQuantity"
                            placeholder="Add Total quantity of medication in bottle"
                            invalid={!!errors.totalQuantity}
                            onChange={(e) => {
                                setTotalQuantity(e.currentTarget.value)
                                if (errors.totalQuantity) setErrors({ ...errors, totalQuantity: null })
                            }}
                            value={totalQuantity}
                        />
                        {errors.totalQuantity && <FormFeedback>{errors.totalQuantity}</FormFeedback>}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="dosage" sm={2}>Dosage</Label>
                    <Col sm={10}>
                        <Input
                            type="number"
                            min="1"
                            name="dosage"
                            id="dosage"
                            placeholder="Add Dosage taken in (ie 1 pill)"
                            invalid={!!errors.dosage}
                            onChange={(e) => {
                                setDosage(e.currentTarget.value)
                                if (errors.dosage) setErrors({ ...errors, dosage: null })
                            }}
                            value={dosage}
                        />
                        {errors.dosage && <FormFeedback>{errors.dosage}</FormFeedback>}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="frequency" sm={2}>Start Date</Label>
                    <Col sm={10}>
                        <Space direction="vertical">
                            <DatePicker onChange={onChangeStartDate} />
                        </Space>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="frequency" sm={2}>Frequency Taken</Label>
                    <Col sm={10}>
                        <Input
                            type="select"
                            name="select"
                            id="exampleSelect"
                            invalid={!!errors.frequency}
                            onChange={(e) => {
                                setFrequency(e.currentTarget.value)
                                if (errors.frequency) setErrors({ ...errors, frequency: null })
                            }}
                        >
                            <option>Select your frequency</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>

                        </Input>
                        {errors.frequency && <FormFeedback>{errors.frequency}</FormFeedback>}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="selectMulti" sm={2}>Set Time/s Taken</Label>
                    <Col sm={10}>
                        <Input
                            type="select"
                            name="selectMulti"
                            id="selectMulti"
                            multiple={true}
                            invalid={!!errors.time}
                            onChange={(event) => {
                                addSelectedTimes(event)
                            }}
                        >
                            <option value="07:00">7am</option>
                            <option value="08:00">8am</option>
                            <option value="09:00">9am</option>
                            <option value="10:00">10am</option>
                            <option value="11:00">11am</option>
                            <option value="12:00">12pm</option>
                            <option value="13:00">1pm</option>
                            <option value="14:00">2pm</option>
                            <option value="15:00">3pm</option>
                            <option value="16:00">4pm</option>
                            <option value="17:00">5pm</option>
                            <option value="18:00">6pm</option>
                            <option value="19:00">7pm</option>
                            <option value="20:00">8pm</option>
                            <option value="21:00">9pm</option>
                        </Input>
                        {errors.time && <FormFeedback>{errors.time}</FormFeedback>}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="selectMulti" sm={2}>Set Reminder/s</Label>
                    <Col sm={10}>
                        <Input
                            type="select"
                            name="selectMulti"
                            id="selectMulti"
                            multiple={true}
                            invalid={!!errors.reminder}
                            onChange={(event) => {
                                addSelectedReminder(event)
                            }}
                        >
                            <option value="300">5 minutes</option>
                            <option value="600">10 minutes</option>
                            <option value="900">15 minutes</option>
                            <option value="1800">30 minutes</option>
                        </Input>
                        {errors.reminder && <FormFeedback>{errors.reminder}</FormFeedback>}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleText" sm={2}>Personal Notes</Label>
                    <Col sm={10}>
                        <Input
                            type="textarea"
                            name="text"
                            id="exampleText"
                            onChange={(e) => setNotes(e.currentTarget.value)}
                            value={notes}
                        />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }} className="mt-4 mb-5">
                        <Button color="primary" block size="lg" type="submit">Submit Medication</Button>
                    </Col>
                    <Col></Col>
                </FormGroup>
            </Form >
        </>
    )
}

export default MedicationNew