import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 200
		}
	},
	form: {
		display: 'flex',
		flexDirection: 'row'
	}
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	value: PropTypes.number,
	index: PropTypes.number
};

export default function FormDialog({ isOpen, modalOpenHandle }) {
	const classes = useStyles();
	//const [open, setOpen] = React.useState(false);
	const [pamatojums, setPamatojums] = React.useState('');
	const [days, setDays] = React.useState(30);

	/* React.useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]); */

	const handleClose = () => {
		modalOpenHandle('');
	};

	const handleSave = fdsfsd => {
		console.log(fdsfsd);
	};

	const handlePamatojumsChange = event => {
		setPamatojums(event.target.value);
	};

	const handleDaysChange = event => {
		setDays(event.target.value);
	};

	return (
		<div className={classes.root}>
			<Dialog
				fullWidth={true}
				disableEnforceFocus={false}
				open={isOpen}
				aria-labelledby='form-dialog-title'
				maxWidth='md'>
				<DialogTitle id='form-dialog-title'>Raksta izvirzīšana uz dzēšanu</DialogTitle>
				<DialogContent>
					<div className={classes.form}>
						<TextField
							margin='dense'
							label='Dienu skaits'
							type='number'
							onChange={handleDaysChange}
							value={days}
							InputLabelProps={{
								shrink: true
							}}
							//variant="outlined"
						/>
						<TextField
							//autoFocus
							margin='dense'
							id='name'
							label='Pamatojums'
							type='text'
							onChange={handlePamatojumsChange}
							value={pamatojums}
							fullWidth
						/>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleSave('discuss')} color='secondary'>
						Saglabāt
					</Button>
					<Button onClick={handleClose} color='primary'>
						Atcelt
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

FormDialog.propTypes = {
	isOpen: PropTypes.bool,
	modalOpenHandle: PropTypes.func
};
