import React from "react";
import Like from "./like";
import Retweet from "./retweet";
import Comment from "./comment";
import Mail from "./mail";

const Buttons = ({ tweet }) => {
	return (
		<div className='buttons'>
			<Comment commentCount={tweet.comments} />
			<Retweet retweetCount={tweet.retweets} />
			<Like likeCount={tweet.likes} />
			<Mail mailCount={tweet.mail} />
		</div>
	);
};

export default Buttons;
