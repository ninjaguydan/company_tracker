import React from 'react'

const ToggleColor = ({ colorMode }) => {
	return (
		<button>
			<label className="switch">
				<input type="checkbox" onClick={colorMode}/>
				<span className="slider round">
					<i className="material-icons sun">brightness_7</i>
					<i className="material-icons moon">brightness_3</i>
				</span>
			</label>
		</button>
	)
}

export default ToggleColor
