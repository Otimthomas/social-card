import React from "react";
import Buttons from "./button";
import CardBody from "./cardBody";
import CardHeader from "./cardHeader";

const CardMain = ({ tweet }) => {
	return (
		<div className='main'>
			<CardHeader tweet={tweet} />
			<CardBody tweet={tweet} />
			<Buttons tweet={tweet} />
		</div>
	);
};

export default CardMain;
