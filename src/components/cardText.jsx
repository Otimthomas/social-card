import React from "react";

const CardText = ({ tweet }) => {
	return (
		<div className='card-body-text'>
			<span className='tweet-title'>{tweet.message.title}</span>
			<span> {tweet.message.text}</span>
		</div>
	);
};

export default CardText;
