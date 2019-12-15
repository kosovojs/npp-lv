import React, {useState, useEffect} from 'react';
import rawData from './data.js';
import userInfoLink from '../../helpers/userLink';

import api from '../../api/methods';
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { makeStyles } from '@material-ui/core/styles';
import stats from './format';
import { connect } from 'react-redux';
import human_readable_date from '../../helpers/humanReadableTime';

const useStyles = makeStyles(theme => ({
	danger: {
		color: theme.palette.status.danger
	},
	paddingStart: {
		paddingLeft: 10
	},
	label: {
		fontWeight: 'bold',
	},
	divider: {
		marginLeft: 7,
		marginRight: 7
	},
	articleCreator: {
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
	articleIssues: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
}));

const doesArticleExist = data => {
	const keys = Object.keys(data.query.pages);
	if (keys[0] === '-1') {
		return false;
	}

	return true;
}

const ArticleInfo = ({title}) => {
	const classes = useStyles();

	const [articleData, setArticleData] = useState({});//rawData
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		setLoading(true);
		api.mediawiki.articleInfo(title).then(res => {
			setLoading(false)

			if (doesArticleExist(res)) {
				setArticleData(res);
			} else {
				setArticleData({});
				setError('Raksts ar šādu nosaukumu nepastāv');
			}
		})
		.catch(err => {
			setLoading(false);
			setError('Problēmas ar Vikipēdijas raksta izgūšanu');
		})
	}, [title]);

	const { to_delete, no_iw, first_edit, last_edit, users, reds } = stats(articleData);

	if (loading) {
		return 'Ielādē';
	}

	if (Object.keys(articleData).length==0) {
		return '';
	}
	return <>
		<Divider className={classes.divider} />
		<div className={classes.articleIssues}>
			{to_delete && <Chip className={classes.danger} size="small" variant="outlined" icon={<ReportProblemIcon />} label="Raksts izvirzīts uz dzēšanu" />}
			{no_iw && <Chip className={classes.danger} size="small" variant="outlined" icon={<ReportProblemIcon />} label="Rakstam nav starpviki saišu" />}
		</div>
		<Divider className={classes.divider} />
		<Typography component='div' gutterBottom className={classes.articleCreator}>
			<div><span className={classes.label}>Raksta izveidotājs</span>:<br /><span className={classes.paddingStart} />{userInfoLink(first_edit.user)} ({human_readable_date(first_edit.time)})</div>
			<div><span className={classes.label}>Pēdējais labojums</span>:<br /><span className={classes.paddingStart} />{userInfoLink(last_edit.user)} ({human_readable_date(last_edit.time)})</div>
		</Typography>
		<Divider className={classes.divider} />
		<Typography component='div' variant="body1">
			<span className={classes.label}>Raksta izveidē piedalījušies</span>
			<ul>
				{users.map(usr => <li key={usr}>{userInfoLink(usr)}</li>)}
			</ul>

		</Typography>
		{reds.length>0 && <>
			<Divider className={classes.divider} />
			<Typography component='div' gutterBottom>
				<span className={classes.label}>Pāradresācijas</span>
				<ul>
					{reds.map(title => <li key={title}>{title}</li>)}
				</ul>
			</Typography>
		</>}
	</>
}

ArticleInfo.propTypes = {
	title: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
	title: state.article.title
})

export default connect(
	mapStateToProps
)(ArticleInfo)
