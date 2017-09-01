import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component{
	render() {
		// const u = this.props.auth.user;
		// const { isAuthenticated } = this.props.auth;

		// const userData = (
		// 	<div><h1>Привет, { u.username }</h1></div>
		// );
		const guestData = (
			<div><h1>Главная страница!</h1></div>
		);

		return(
			<div className="jumbotron">
				{guestData}
			</div>
		);
	}
}

// function someProps(state) {
// 	return {
// 		auth: state.auth
// 	};
// }

// export default connect(someProps, { logout })(HomePage);
export default HomePage;
