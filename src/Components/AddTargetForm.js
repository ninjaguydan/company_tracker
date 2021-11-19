import { useState } from "react"

const AddTargetForm = ({ onAdd }) => {

	// Input States
	const [name, setNameField] = useState('')
	const [location, setLocationField] = useState('')
	const [contacts, setContactFields] = useState([
		{ name: '', number: '' },
	])
	const [performance, setPerformanceField] = useState('0')
	const [status, setStatusField] = useState('approved')

	//Add extra contact slot
	const handleContact = (index, e) => {
		const values = [...contacts];
		values[index][e.target.name] = e.target.value
		setContactFields(values)
	}
	const addContact = () => {
		setContactFields([...contacts, {name: '', number: ''}])
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		//validation here
		if ( name.trim().length < 1 ) {
			alert('Please enter a company name.')
			return
		}
		if ( location.trim().length < 1 ) {
			alert('Please enter a company location.')
			return
		}
		//passing values to parent componenet
		onAdd({ name, location, contacts, performance, status })
		//reset form feilds
		setNameField('')
		setLocationField('')
		setContactFields([{ name: '', number: '' }])
		setPerformanceField('0')
		setStatusField('approved')
	}
	
	return (
		<form className="add-target" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input type="text" id="name" className="form-control" value={name} onChange={(e) => setNameField(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="location">Location</label>
				<input type="text" id="location" className="form-control" value={location} onChange={(e) => setLocationField(e.target.value)} />
			</div>
			{ contacts.map((field, index) =>{
				return <div key={index} className="contact-group">
					<div className="form-group">
						<label htmlFor="name">Contact Name</label>
						<input type="text" id="name" name="name" className="form-control" value={field.name} onChange={ e => handleContact(index, e) } />
					</div>
					<div className="form-group">
						<label htmlFor="number">Contact Number</label>
						<input type="tel" id="number" name="number" className="form-control" value={field.number} onChange={ e => handleContact(index, e) }/>
					</div>
				</div>
			})}
			<button className="new-contact" onClick={addContact} type="button">Add Another Contact</button>
			<div className="form-group">
				<label htmlFor="performance">Performance</label>
				<input type="number" step="0.01" id="performance" className="form-control" value={performance} onChange={(e) => setPerformanceField(e.target.value)}/>
			</div>
			<div className="form-group">
				<label htmlFor="status">Status</label>
				<select id="status"  className="form-select" value={status} onChange={(e) => setStatusField(e.target.value)}>
					<option value="approved">Approved</option>
					<option value="declined">Declined</option>
					<option value="pending">Pending</option>
					<option value="researching">Researching</option>
				</select>
			</div>
			<button className="btn" onClick={handleSubmit} disabled={ name.trim() && location.trim() ? "" : "disbaled" }>Save Target</button>
		</form>
	)
}

export default AddTargetForm
