import React, { Component } from 'react';
class QuestionContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAnswer: false,
			confirmation: false,
			disabledStatus: ''
		}
	}

	/**
	 * function to handle show answer button functionality
	 */

	handleShowAnswer = () => {
		this.setState({ showAnswer: true });
	}

	/**
	 * function to handle confirmation functionality
	 */

	handleConfirmation = () => {
		this.setState({
			confirmation: true,
			disabledStatus: 'disabled'
		});

	}

	/**
	 * function to handle decline functionality
	 */

	handledecline = () => {
		this.setState({
			confirmation: false,
			showAnswer: false
		});

	}


	render() {
		//console.log(this.props.questions[0].question)

		return (
			<div className="container">
				<p className="question">
					{this.props.question}
				</p>
				{
					this.state.showAnswer ?
						<div className="container">
							<div className="alert alert-info">
								<p>Reveal the answer?</p>
								<div onClick={this.handleConfirmation} className="btn-primary">Yes Please</div>
								<div onClick={this.handledecline} className="btn-danger">Not Yet</div>
							</div>
							{
								this.state.confirmation ?
									<p class="answer">
										{this.props.answer}
									</p>
									: ''
							}

						</div> : <div onClick={this.handleShowAnswer} className="btn btn-primary show-answer" >
							Show Answer
						</div>
				}

			</div>
		);
	}
}

export default QuestionContainer;