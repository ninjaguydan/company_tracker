import logo from './media/tracker_logo.svg';
import './css/App.css';
import { useState } from 'react';
import ToggleColor from './Components/ToggleColor';
import TargetTable from './Components/TargetTable';
import Button from './Components/Button'
import AddTargetForm from './Components/AddTargetForm';

function App() {
	// light/ dark mode toggle
	function colorMode(){
		document.querySelector('.App').classList.toggle('dark')
	}
	const [showTaskForm, setShowTaskform] = useState(false)
	function toggleForm(){
		setShowTaskform(!showTaskForm)
	}
	function addTask(target){
		console.log(target)
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
					text={ showTaskForm ? "Close" : "New" } 
					icon={ showTaskForm ? "close" : "add"} clickEvent={toggleForm} 
					classes={ showTaskForm ? "btn btn-main close" : "btn btn-main open"} 
				/>
			</header>
			{ showTaskForm && <AddTargetForm onAdd={addTask}/>}
			<ul className="key">
				<li><i className="material-icons approved">check_circle</i>Approved</li>
				<li><i className="material-icons pending">watch_later</i>Pending</li>
				<li><i className="material-icons">info</i>Researching</li>
				<li><i className="material-icons declined">cancel</i>Declined</li>
			</ul>
			<div className="table-container scrollbar-style">
				<TargetTable />
			</div>
		</div>
	);
}

export default App;
