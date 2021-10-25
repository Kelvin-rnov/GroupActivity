import React, { component } from 'react';
import { link } from 'react-router-dom';

class MenuSuperior extends Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to="/" className="navbar-brand">SENAI-SP</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/" className="navLink">Home</Link>
						</li>
						
						<li className="nav-item">
							<Link to="/consultas" className="navLink">Consultas</Link>
						</li>
						
						<li className="nav-item">
							<Link to="/faturamento" className="navLink">Faturamento</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default MenuSuperior;
