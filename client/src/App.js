import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
		};
	}

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
					<h1> 노트 </h1>
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
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default App;
