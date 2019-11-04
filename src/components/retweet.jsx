import React from "react";
import PropTypes from "prop-types";

const Retweet = ({ retweetCount }) => {
	return (
		<span className="btn retweet">
			<i className='fa fa-retweet' />
			{retweetCount}
		</span>
	);
};

export default Retweet;
