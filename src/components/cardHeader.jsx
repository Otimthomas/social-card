import React, { Component } from "react";

const CardHeader = ({tweet}) => {
	return (
		<div className='card-header'>
			<span className='card-header-title'>{tweet.channel} </span>
			<span className='card-header-handle'>
				@{tweet.channel.replace(/\s/g, "")}{" "}
			</span>
			<span className='timestamp'>25 Sept</span>
			<div className='tweet-title'>{tweet.message.title}</div>
			<span className='author-handle'>author: @{tweet.author.handle}</span>
		</div>
	);
};

export default CardHeader;
