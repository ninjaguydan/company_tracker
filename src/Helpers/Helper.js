export function highOrLow(num){
	let int = parseFloat(num)
	if ( int < 0 ) {
		return <i className="material-icons declined">arrow_drop_down</i>
	} else {
		return <i className="material-icons approved">arrow_drop_up</i>
	}
}
export function setStatus(str){
	if (str === "approved") {
		return <i className="material-icons approved" aria-label="status: approved">check_circle</i>
	} else if (str === "pending") {
		return <i className="material-icons pending" aria-label="status: pending">watch_later</i>
	} else if (str === "researching") {
		return <i className="material-icons" aria-label="status: researching">info</i>
	} else {
		return <i className="material-icons declined" aria-label="status: declined">cancel</i>
	}
}