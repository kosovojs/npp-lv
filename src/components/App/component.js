import React from 'react';
import Header from '../Header';
import Article from '../Article';
import ArticleList from '../ArticleList';
import Dashboard from '../Dashboard';
import PropTypes from 'prop-types'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotFound = ({ location }) => (
	<div>
	  <h3>Did not found page <code>{location.pathname}</code></h3>
	</div>
);

NotFound.propTypes = {
  location: PropTypes.object
}

export default function() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Article} />
					<Route exact path='/list' component={ArticleList} />
					<Route exact path='/dashboard' component={Dashboard} />
					<Route component={NotFound} />
				</Switch>
				<ToastContainer
					position='bottom-right'
					autoClose={2500}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnVisibilityChange
					draggable={false}
					pauseOnHover
				/>
			</Router>
		</>
	);
}
