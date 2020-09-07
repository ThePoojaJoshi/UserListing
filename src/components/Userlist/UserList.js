import React, { useState } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import './userlist.scss';
import AddUser from '../addNewUser/AddUser';

const UserList = (props) => {
	
	const listTitle = 'User List';
	const [ open, setOpen ] = useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	const displayLang = (lang) => {
		const langName = [];
		if (lang && lang.length > 0) {
			lang.forEach(lang => {
				langName.push(lang);
			});
		}
		return langName.join(', ');
	};

	return (
		<div id="user-container">
			<HeaderComponent title={listTitle} addclick={openModal} />
			<div className="userlist">
				<table className="tbl-list">
					<thead className="tbl-header">
						<tr>
							<td>Full Name</td>
							<td>DOB</td>
							<td>Languages known</td>
							<td>Gender</td>
							<td>About</td>
						</tr>
					</thead>
					<tbody>
						{props.userDetailList &&
							props.userDetailList.map((data) => {
								return (
									<tr className='tbl-body'>
										<td><div>{data.fullName}</div></td>
										<td><div>{data.DoB.toLocaleDateString()}</div></td>
										<td><div>{displayLang(data.langKnown)}</div></td>
										<td><div>{data.gender}</div></td>
										<td><div>{data.about}</div></td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>

			{open && (
				<AddUser
					open={open}
					closeModal={closeModal}
					// userDetailList={props.userDetailList}
					// setUserdata={setUserdata}
					addUser = {props.addUser}
				/>
			)}
			<div />
		</div>
	);
};

export default UserList;
