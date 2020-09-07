import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalComponent from '../Modal/ModalComponent';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import './adduser.scss';
import 'react-datepicker/dist/react-datepicker.css';

function AddUser(props) {
	const [ userDetail, setUserDetail ] = useState({
		fullName: '',
		DoB: new Date(),
		langKnown: [],
		gender: '',
		about: ''
	});
	const languagesKnown = [
		{ label: 'Programming', value: 'Programming' },
		{ label: 'Development', value: 'Development' },
		{ label: 'Design', value: 'Design' },
		{ label: 'Testing', value: 'Testing' },
		{ label: 'ReactJS', value: 'ReactJS' }
	];

	const updateValue = (e) => {
		const value = e.target.value;

		setUserDetail({
			...userDetail,
			[e.target.name]: value
		});
	};

	const selectLang = (options) => {
		// debugger
		let selectedlang = [];

		selectedlang = options.map((option) => {
			return option.value;
		});

		setUserDetail({ ...userDetail, langKnown: selectedlang });
	};

	const setGender = (e) => {
		setUserDetail({
			...userDetail,
			gender: e.target.value
		});
	};
	const saveUser = () => {
		props.addUser(userDetail);
		props.closeModal();
	};

	return (
		<ModalComponent
			open={props.open}
			handleClose={props.closeModal}
			centered
			keyboard
			className="adduser-modal"
			header="Add New User"
			content={
				<div className="body-content">
				<div>	
				<label className="display-label" htmlFor="full-name">
						Enter Your Full Name:{' '}
					</label>
					<input
						id="full-name"
						type="text"
						name="fullName"
						className="inputs"
						value={userDetail.fullName}
						onChange={updateValue}
					/>
					</div>
					<div>
					<label className="display-label">DOB: </label>
					<DatePicker
						selected={userDetail.DoB}
						showYearDropdown
						showMonthDropdown
						onChange={(date) => setUserDetail({ DoB: date, ...userDetail })}
					/>
					</div>
					<div>
					<label className="display-label">Languaged known: </label>
					<Select
						isMulti
						name="customSearch"
						maxMenuHeight={150}
						className="custom-select-dropdown"
						options={languagesKnown}
						placeholder="select"
						onChange={(value) => selectLang(value)}
					/>
					</div>
					<div>
					<label className="display-label">Gender: </label>
					<div className="radio" onChange={setGender}>
						<input type="radio" value="Male" name="gender" /> Male   
						<input type="radio" value="Female" name="gender" /> Female  
					</div>
					</div>
					<div>
					<label className="display-label" htmlFor="about">
						Tell us about yourself:{' '}
					</label>
					<textarea
						id="about"
						name="about"
						className="inputs"
						value={userDetail.about}
						onChange={updateValue}
					/>
					</div>
				</div>
			}
			footer={<Button onClick={saveUser}>Save</Button>}
		/>
	);
}

export default AddUser;
