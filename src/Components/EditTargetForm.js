import { useState } from "react"

const EditTargetForm = ({ target, onUpdate }) => {
	// Input States
	const [id, setId] = useState(target[0].id)
	const [name, setNameField] = useState(target[0].name)
	const [location, setLocationField] = useState(target[0].location)
	const [contacts, setContactFields] = useState(target[0].contacts)
	const [performance, setPerformanceField] = useState(target[0].performance)
	const [status, setStatusField] = useState(target[0].status)

	// Click functions
	const handleChange = (index, e) => {
		const values = [...contacts];
		values[index][e.target.name] = e.target.value
		setContactFields(values)
	}
	const addContact = () => {
		setContactFields([...contacts, {name: '', number: ''}])
	}
	const handleUpdate = (e) => {
		e.preventDefault();
		//validation here
		onUpdate({ id, name, location, contacts, performance, status })
		setNameField('')
		setLocationField('')
		setContactFields([{ name: '', number: '' }])
		setPerformanceField('0')
		setStatusField('approved')
	}

	return (
		<form className="add-target" onSubmit={handleUpdate}>
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
						<input type="text" id="name" name="name" className="form-control" value={field.name} onChange={ e => handleChange(index, e) } />
					</div>
					<div className="form-group">
						<label htmlFor="number">Contact Number</label>
						<input type="tel" id="number" name="number" className="form-control" value={field.number} onChange={ e => handleChange(index, e) }/>
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
			<button className="btn" onClick={handleUpdate}>Update Target</button>
		</form>
	)
}

export default EditTargetForm
