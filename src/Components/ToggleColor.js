import React from 'react'

const ToggleColor = ({ colorMode }) => {
	return (
		<button className="switch" onClick={colorMode} aria-label="toggle color mode">
			<span className="slider">
				<i className="material-icons sun">brightness_7</i>
				<i className="material-icons moon">brightness_3</i>
			</span>
		</button>
	)
}

export default ToggleColor
