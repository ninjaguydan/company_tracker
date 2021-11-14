import React from 'react'
import targets from '../data'
import { highOrLow, setStatus } from '../Helpers/Helper' 

const TargetTable = () => {
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
							{target.contacts.map( contact => {
								return <li>
									<p>{contact.name}</p>
									<p className="number">{contact.number}</p>
								</li>
							})}
							</ul>
						</td>
						<td className="performance">{ highOrLow(target.performance)} {target.performance}</td>
						<td className="status">{ setStatus(target.status) }</td>
					</tr>		
				} ) }
			</tbody>
		</table>
	)
}

export default TargetTable
