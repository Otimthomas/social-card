import React from "react";
import CardTitle from "./cardTitle";
import CardText from "./cardText";
import CardLogo from "./cardLogo";

const CardBody = ({ tweet }) => {
	return (
		<div className='card-body'>
			<div className='card-body-title'>
				<CardLogo />
				<CardTitle tweet={tweet} />
			</div>
			<CardText tweet={tweet} />
		</div>
	);
};

export default CardBody;
