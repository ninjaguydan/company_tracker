const Button = ({ text, classes, icon, clickEvent }) => {
	return (
		<button className={classes} onClick={clickEvent}>
			{icon && <i className="material-icons">{icon}</i> }
			{text}
		</button>
	)
}

export default Button
