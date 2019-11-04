import React, { Component } from "react";
import CardLogo from "./cardLogo";
import CardMain from "./cardMain";

class Card extends Component {
	state = {
		tweets: [
			{
				channel: "The Practical Dev",
				likes: 190,
				retweets: 47,
				comments: 2,
				mail: 4,
				message: {
					title: "Learning React? Start small",
					text:
						"Can't pry yourself away from tutorials? The cure is to make tiny little experimental apps"
				},
				author: {
					name: "Dave Ceddia",
					handle: "dceddia",
					passportUrl: ""
				}
			},
			{
				channel: "The Practical Dev",
				likes: 19,
				retweets: 47,
				comments: 2,
				mail: 2,
				message: {
					title: "Learning React? Start small",
					text:
						"Can't pry yourself away from tutorials? The cure is to make tiny little experimental apps"
				},
				author: {
					name: "Dave Ceddia",
					handle: "dceddia",
					passportUrl: ""
				}
			}
		]
	};
	render() {
		const { tweets } = this.state;
		return (
			<React.Fragment>
				{tweets.map((tweet) => (
					<div className='card'>
						<CardLogo tweet={tweet} />
						<CardMain tweet={tweet} />
					</div>
				))}
			</React.Fragment>
		);
	}
}

export default Card;
