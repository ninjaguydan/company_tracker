import { highOrLow, setStatus } from '../Helpers/Helper'
import Button from './Button'

const TargetTable = ({ targets, onDelete, onEdit }) => {
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">Location</th>
					<th scope="col">Contacts</th>
					<th scope="col">Performance</th>
					<th scope="col">Status</th>
					<th scope="col">Options</th>
				</tr>
			</thead>
			<tbody>
				{ targets.map( target => {
					return <tr key={target.id}>
						<th scope="row">{target.id}</th>
						<th>{target.name}</th>
						<td>{target.location}</td>
						<td>
							<ul>
							{target.contacts.map( (contact, index) => {
								return <li key={index}>
									<p>{contact.name}</p>
									<p className="number">{contact.number}</p>
								</li>
							})}
							</ul>
						</td>
						<td className="performance">{ highOrLow(target.performance)} {target.performance}%</td>
						<td className="status">{ setStatus(target.status) }</td>
						<td>
							<Button text="Edit" classes="btn new-contact" clickEvent={() => onEdit(target.id)} />
							<Button text="Delete" classes="btn new-contact" clickEvent={() => onDelete(target.id)}/>
						</td>
					</tr>		
				} ) }
			</tbody>
		</table>
	)
}

export default TargetTable
