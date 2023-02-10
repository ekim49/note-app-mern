import React from 'react';
import './App.css';
import Modal from './components/Modal';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			notes: [],
		};
	}

	openModal = () => {
		this.setState({ isModalOpen: true });
	};

	closeModal = () => {
		this.setState({ isModalOpen: false });
		this.getAllNotes();
	};

	getAllNotes = () => {
		fetch('/note', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				Accept: 'application/json',
			},
			mode: 'cors',
		})
			.then((res) => {
				return res.json();
			})
			.then((notes) => {
				this.setState({ notes: notes });
			})
			.catch((error) => console.log('Network Error : ', error));
	};

	// open note

	// 서버와 연결해서 fetch 하기
	componentWillMount() {
		fetch('/note', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				Accept: 'application/json',
			},
			mode: 'cors',
		})
			.then((res) => res.json())
			.then((notes) => {
				this.setState({ notes: notes });
				console.log('Network success - note : ', notes);
			})
			.catch((err) => console.log('Network Error : ', err));
	}

	render() {
		return (
			<div className='container'>
				<div className='App'>
					<h1> Notes 📝 </h1>
					<br />
					<br />
					<table>
						<tbody>
							<tr className='trList'>
								{this.state.notes.map((note) => (
									<td className='cell' key={note._id}>
										<div className='inner'>
											<h2>{note.title}</h2>
											<h5>{note.author}</h5>
											<h4>{note.content}</h4>
										</div>
									</td>
								))}
								<td className='cell'>
									<div className='inner' onClick={this.openModal}>
										<img
											src={'/images/plus.png'}
											className='picture'
											alt='logo'
										/>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<main className='App'>
						<Modal isOpen={this.state.isModalOpen} close={this.closeModal} />
					</main>
				</div>
			</div>
		);
	}
}

export default App;
