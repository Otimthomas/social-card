import React from "react";
import PropTypes from "prop-types";

const Like = ({ likeCount  }) => {
	return (
		<span className="btn like">
			<i className='fa fa-heart' />
			{likeCount}
		</span>
	);
};


export default Like;
