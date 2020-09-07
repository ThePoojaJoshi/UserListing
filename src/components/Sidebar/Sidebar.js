import React from 'react';
import './sidebar.scss';
import { ProgressBar } from 'react-bootstrap';

const Sidebar = (props) => {
	const getCount = (str) => {
		const count = props.userDetailList.filter((list) => list.gender === str);
		return count.length;
	};
	return (
		<div className="side-container">
			<div className="progress-container">
				<div>
					<ProgressBar variant="info" now={props.userDetailList.length * 10} />
				</div>
			</div>
			<ul className="list">
				<div>
					<span>Male</span>
					<div className="count">{getCount('Male')}</div>
				</div>
				<div>
					<span>Female</span>
					<div className="count">{getCount('Female')}</div>
				</div>
				<div />
			</ul>
		</div>
	);
};

export default Sidebar;
