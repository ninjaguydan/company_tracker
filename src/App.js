import logo from './media/tracker_logo.svg';
import './css/App.css';

function App() {
	function colorMode(){
		document.querySelector('.App').classList.toggle('dark')
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<button >
					<label className="switch">
						<input type="checkbox" onClick={colorMode}/>
						<span className="slider round">
							<i className="material-icons sun">brightness_7</i>
							<i className="material-icons moon">brightness_3</i>
						</span>
					</label>
				</button>
			</header>
		</div>
	);
}

export default App;
