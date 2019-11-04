import React from "react";

const Comment = ({ commentCount = 2 }) => {
	return (
		<span className="btn">
			<i className='fa fa-comment-o' />
			{commentCount}
		</span>
	);
};

export default Comment;
