import React from "react";

const Mail = ({ mailCount }) => {
	return (
		<span className="btn">
			<i className='fa fa-envelope-o' />
			{mailCount !== 0 ? mailCount : null}
		</span>
	);
};

export default Mail;
