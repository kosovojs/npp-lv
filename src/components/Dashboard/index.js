import React from 'react';
import {Line, Bubble} from 'react-chartjs-2';
import fakeData from './data';
import styles from './styles.module.scss';

const optionsParbaudamie = ({dates, views}) => ({
	labels: dates,
	datasets: [
	  {
		label: 'Lapas skatījumi',
		fill: false,
		backgroundColor: 'rgba(75,192,192,0.4)',
		borderColor: 'rgba(75,192,192,1)',
		data: views
	  }
	]
});

const optionsBubble = ({dates, views}) => ({
	labels: dates,
	datasets: [
	  {
		label: 'Lapas skatījumi',
		fill: false,
		backgroundColor: 'rgba(75,192,192,0.4)',
		borderColor: 'rgba(75,192,192,1)',
		data: views
	  }
	]
});


var days = {
	1: "Svētdiena",
	2: "Pirmdiena",
	3: "Otrdiena",
	4: "Trešdiena",
	5: "Ceturtdiena",
	6: "Piektdiena",
	7: "Sestdiena"
};


export default class Dashboard extends React.Component {

	setData = () => {

	}

	componentDidMount() {
		this.setData();
	}

	render() {
		const [pirmais, otrais, tresais, ceturtais] = fakeData;
		return <div className={styles.wrapper}>
			<div className={styles.graph1}>
			 <Line data={optionsParbaudamie({dates: pirmais[0], views: pirmais[1]})} />
			</div>
			<div className={styles.graph1}>
			 <Line data={optionsParbaudamie({dates: otrais[0], views: otrais[1]})} />
			</div>
			<div className={styles.graph1}>
			 <Line data={optionsParbaudamie({dates: tresais[0], views: tresais[1]})} />
			</div>
			{/* <div className={styles.graph1}>
			 <Bubble data={optionsParbaudamie({dates: tresais[0], views: tresais[1]})} />
			</div> */}
		</div>

	}
}
