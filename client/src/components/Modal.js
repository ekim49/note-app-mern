import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
	state = {
		title: '',
		content: '',
		author: '',
	};

	handleClick = (event) => {
		fetch(`/note`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				Accept: 'application/json',
			},
			mode: 'cors',
			body: JSON.stringify({
				// fetch 특징
				title: this.state.title,
				content: this.state.content,
				author: this.state.author,
			}),
		})
			.then((response) => {
				this.props.close();
				return response.json();
			})
			.catch((err) => {
				console.log(err);
				// this.props.close;
			});
	};

	handleChange = (event) => {
		const {
			target: { name, value },
		} = event; // 비구조화 할당
		this.setState({ [name]: value });
	};

	render() {
		const { isOpen, close } = this.props;

		return (
			<React.Fragment>
				{isOpen ? (
					<React.Fragment>
						<div className='Modal-overlay' onClick={close} />
						<div className='Modal'>
							<h1 className='title'> Add Notes </h1>
							<div className='content'>
								<h4>
									<input
										type='text'
										placeholder='아이디를 입력하세요'
										name='author'
										value={this.state.author}
										onChange={this.handleChange}
									></input>
								</h4>
								<br />
								<h4>
									<input
										type='text'
										placeholder='제목을 입력하세요'
										name='title'
										value={this.state.title}
										onChange={this.handleChange}
									></input>
								</h4>
								<br />
								<textarea
									name='content'
									value={this.state.content}
									onChange={this.handleChange}
								></textarea>
							</div>
							<div className='button-wrap'>
								<button onClick={this.handleClick}>
									<p>Post</p>
								</button>
							</div>
						</div>
					</React.Fragment>
				) : null}
			</React.Fragment>
		);
	}
}

export default Modal;
