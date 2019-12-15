import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import fakeData from './data';
import { connect } from 'react-redux';
import {fetchNextArticle} from '../Article/articleSlice';


import { Redirect } from 'react-router-dom';

import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles1 = makeStyles(theme => ({
	root: {
		flexShrink: 0,
		marginLeft: theme.spacing(2.5)
	}
}));

function TablePaginationActions(props) {
	const classes = useStyles1();
	const theme = useTheme();
	const { count, page, rowsPerPage, onChangePage } = props;

	const handleFirstPageButtonClick = event => {
		onChangePage(event, 0);
	};

	const handleBackButtonClick = event => {
		onChangePage(event, page - 1);
	};

	const handleNextButtonClick = event => {
		onChangePage(event, page + 1);
	};

	const handleLastPageButtonClick = event => {
		onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<div className={classes.root}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label='first page'>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label='previous page'>
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label='next page'>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label='last page'>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</div>
	);
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onChangePage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired
};

function createData(name, calories, fat) {
	return { name, calories, fat };
}

function desc(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

const rows = fakeData.sort((a, b) => (a.id < b.id ? -1 : 1));

function EnhancedTableHead(props) {
	const {
		classes,
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort
	} = props;
	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};

	const headCells = [
		{ id: 'name', numeric: false, disablePadding: false, label: 'Raksta nosaukums' },
		{ id: 'date', numeric: false, disablePadding: true, label: 'Raksts izveidots' },
		{ id: 'user', numeric: false, disablePadding: true, label: 'Raksta izveidotājs' },
		{ id: 'act', numeric: false, disablePadding: true, label: 'Darbības' }
	];

	{
		/* {"id":"10071","title":"Aleksandrs P\u0113tersons (politi\u0137is)","date":"2019-01-26 23:54:42","user":"Pirags","comment":null} */
	}

	return (
		<TableHead>
			<TableRow>
				{/* <TableCell padding="checkbox">
			<Checkbox
			  indeterminate={numSelected > 0 && numSelected < rowCount}
			  checked={numSelected === rowCount}
			  onChange={onSelectAllClick}
			  inputProps={{ 'aria-label': 'select all desserts' }}
			/>
		  </TableCell> */}
				{headCells.map(headCell => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === headCell.id ? order : false}>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={order}
							onClick={createSortHandler(headCell.id)}>
							{headCell.label}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

function stableSort(array, cmp) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = cmp(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
	return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const useStyles2 = makeStyles(theme => ({
	root: {
		width: '100%'
	},
	table: {
		minWidth: 500
	},
	tableWrapper: {
		overflowX: 'auto'
	},
	buttons: {
		margin: theme.spacing(1),
	}
}));

function CustomPaginationActionsTable({fetchNextArticle}) {
	const classes = useStyles2();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [goToArticle, setGoToArticle] = React.useState(null);

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	/* const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
		  newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
		  newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
		  newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
		  newSelected = newSelected.concat(
			selected.slice(0, selectedIndex),
			selected.slice(selectedIndex + 1),
		  );
		}

		setSelected(newSelected);
	  }; */

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleRequestSort = (event, property) => {
		const isDesc = orderBy === property && order === 'desc';
		setOrder(isDesc ? 'asc' : 'desc');
		setOrderBy(property);
	};

	const handleSelectAllClick = event => {
		if (event.target.checked) {
			const newSelecteds = rows.map(n => n.name);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const goingToArticle = (articleID) => {
		console.log(articleID)
		fetchNextArticle('this',articleID);
		setGoToArticle(true);
	}

	if (goToArticle) {
		return <Redirect push to="/" />;
	}

	return (
		<Paper className={classes.root}>
			<div className={classes.tableWrapper}>
				<Table className={classes.table} aria-label='custom pagination table'>
					<EnhancedTableHead
						classes={classes}
						numSelected={0}
						order={order}
						orderBy={orderBy}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={rows.length}
					/>
					{/* {"id":"10071","title":"Aleksandrs P\u0113tersons (politi\u0137is)","date":"2019-01-26 23:54:42","user":"Pirags","comment":null} */}
					<TableBody>
						{stableSort(rows, getSorting(order, orderBy))
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map(row => (
								<TableRow key={row.id}>
									<TableCell component='th' scope='row'>
										{row.title}
									</TableCell>
									<TableCell align='right'>{row.date}</TableCell>
									<TableCell>{row.user}</TableCell>
									<TableCell className={classes.buttons}><IconButton aria-label="delete" onClick={() => goingToArticle(row.id)}><DeleteIcon /></IconButton></TableCell>
								</TableRow>
							))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[5, 10, 25, 50, { label: 'All', value: -1 }]}
								colSpan={3}
								count={rows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								SelectProps={{
									inputProps: { 'aria-label': 'rows per page' },
									native: true
								}}
								onChangePage={handleChangePage}
								onChangeRowsPerPage={handleChangeRowsPerPage}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		</Paper>
	);
}

//

const mapDispatchToProps = { fetchNextArticle }

export default connect(
	null,
	mapDispatchToProps
)(CustomPaginationActionsTable)
