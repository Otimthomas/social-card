import React from "react";

const CardTitle = ({ tweet }) => {
	return (
		<React.Fragment>
			<span className='tweet-title'>{tweet.message.title}</span>
			<div className='author'>
				<span className='author-name'>{tweet.author.name}</span>
				<span className='author-passport'>{}</span>
			</div>
		</React.Fragment>
	);
};

export default CardTitle;
