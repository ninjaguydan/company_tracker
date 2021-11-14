import { useState } from "react"

const AddTargetForm = ({ onAdd }) => {

	// Input States
	const [nameField, setNameField] = useState('')
	const [locationField, setLocationField] = useState('')
	const [contactFields, setContactFields] = useState([
		{ cname: '', cnumber: '' },
	])
	const [performanceField, setPerformanceField] = useState('0')
	const [statusField, setStatusField] = useState('approved')

	// Click functions
	const handleChange = (index, e) => {
		const values = [...contactFields];
		values[index][e.target.name] = e.target.value
		setContactFields(values)
	}
	const addContact = () => {
		setContactFields([...contactFields, {cname: '', cnumber: ''}])
	}
	const handleSubmit = (e) => {
			e.preventDefault();
			
			onAdd({ nameField, locationField, contactFields, performanceField, statusField })
			setNameField('')
			setLocationField('')
			setContactFields([{ cname: '', cnumber: '' }])
			setPerformanceField('0')
			setStatusField('approved')
		}
	return (
		<form className="add-target" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input type="text" id="name" className="form-control" value={nameField} onChange={(e) => setNameField(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="location">Location</label>
				<input type="text" id="location" className="form-control" value={locationField} onChange={(e) => setLocationField(e.target.value)} />
			</div>
			{ contactFields.map((field, index) =>{
				return <div key={index} className="contact-group">
					<div className="form-group">
						<label htmlFor="cname">Contact Name</label>
						<input type="text" id="cname" name="cname" className="form-control" value={field.cname} onChange={ e => handleChange(index, e) } />
					</div>
					<div className="form-group">
						<label htmlFor="cnumber">Contact Number</label>
						<input type="tel" id="cnumber" name="cnumber" className="form-control" value={field.cnumber} onChange={ e => handleChange(index, e) }/>
					</div>
				</div>
			})}
			<button className="new-contact" onClick={addContact} type="button">Add Another Contact</button>
			<div className="form-group">
				<label htmlFor="performance">Performance</label>
				<input type="number" step="0.01" id="performance" className="form-control" value={performanceField} onChange={(e) => setPerformanceField(e.target.value)}/>
			</div>
			<div className="form-group">
				<label htmlFor="status">Status</label>
				<select id="status"  className="form-select" value={statusField} onChange={(e) => setStatusField(e.target.value)}>
					<option value="approved">Approved</option>
					<option value="declined">Declined</option>
					<option value="pending">Pending</option>
					<option value="researching">Researching</option>
				</select>
			</div>
			<button className="btn" onClick={handleSubmit}>Save Target</button>
		</form>
	)
}

export default AddTargetForm
