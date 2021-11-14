import logo from './media/tracker_logo.svg';
import './css/App.css';
import ToggleColor from './Components/ToggleColor';
import TargetTable from './Components/TargetTable';

function App() {
	function colorMode(){
		document.querySelector('.App').classList.toggle('dark')
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<ToggleColor colorMode={colorMode} />
			</header>
			<header className="table-header">
				<h1>Target Companies</h1>
				<button className="btn btn-main"><i className="material-icons">add</i> New</button>
			</header>
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
