import logo from './media/tracker_logo.svg';
import './css/App.css';
import targets from './data'
import { useState } from 'react';
import ToggleColor from './Components/ToggleColor';
import TargetTable from './Components/TargetTable';
import Button from './Components/Button'
import AddTargetForm from './Components/AddTargetForm';
import EditTargetForm from './Components/EditTargetForm';

function App() {
	// light/ dark mode toggle
	function colorMode(){
		document.querySelector('.App').classList.toggle('dark')
	}
	//Toggle 'Add target' form
	const [showTargetForm, setShowTargetForm] = useState(false)
	function toggleForm(){
		setShowUpdateForm(false)
		setShowTargetForm(!showTargetForm)
	}
	//Target State
	const [targetList, setTargetList] = useState(targets)
	//Add New Target
	function addTarget(target){
		const id = targetList[targetList.length - 1].id + 1
		const newTarget = { id, ...target }
		setTargetList([...targetList, newTarget])
		setShowTargetForm(false)
	}
	//Delete Target
	function deleteTarget(id){
		setTargetList(targetList.filter((target) => target.id !== id))
	}
	//Edit Target
	const [showUpdateForm, setShowUpdateForm] = useState(false)
	const [company, setCompany] = useState('')
	function editTarget(id){
		setShowTargetForm(false)
		setShowUpdateForm(!showUpdateForm)
		let company = targetList.filter((target) => target.id === id )
		setCompany(company)
	}
	function updateTarget(target){
		let allTargets = targetList
		allTargets[target.id - 1] = target
		setTargetList(allTargets)
		setShowUpdateForm(false)
	}
	
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<ToggleColor colorMode={colorMode} />
			</header>
			<header className="table-header">
				<h1>Target Companies</h1>
				<Button 
					text={ showTargetForm ? "Close" : "New" } 
					icon={ showTargetForm ? "close" : "add"} 
					clickEvent={toggleForm} 
					classes={ showTargetForm ? "btn btn-main close" : "btn btn-main open"} 
				/>
			</header>

			{ showTargetForm && <AddTargetForm onAdd={addTarget} />}
			{ showUpdateForm && <EditTargetForm target={company} onUpdate={updateTarget} />}

			<ul className="key">
				<li><i className="material-icons approved">check_circle</i>Approved</li>
				<li><i className="material-icons pending">watch_later</i>Pending</li>
				<li><i className="material-icons">info</i>Researching</li>
				<li><i className="material-icons declined">cancel</i>Declined</li>
			</ul>
			<div className="table-container scrollbar-style">
				<TargetTable targets={targetList} onDelete={deleteTarget} onEdit={editTarget} />
			</div>
		</div>
	);
}

export default App;
