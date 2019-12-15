import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import TimerIcon from '@material-ui/icons/Timer';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

import Iw from '../Dialogs/Iw';
import Delete from '../Dialogs/Delete';
import Copyvio from '../Dialogs/Copyvio';

import { connect } from 'react-redux'

const ArticleActions = () => {
	const [openedModal, setOpenedModal] = React.useState('');

	React.useEffect(() => {
		setOpenedModal(setOpenedModal);
	}, [openedModal]);

	return <>
		<ButtonGroup variant="contained" size="small">
			<Tooltip title="Pārbaudīt, vai šis nav copyvio"><Button className={styles.copyvio} onClick={() => setOpenedModal('copyvio')}>Copyvio</Button></Tooltip>
			<Tooltip title="Pievienot rakstam IW"><Button className={styles.iw} onClick={() => setOpenedModal('iw')}>IW</Button></Tooltip>
			<Tooltip title="Izvirzīt rakstu dzēšanai"><Button className={styles.delete} onClick={() => setOpenedModal('delete')}>Dzēst</Button></Tooltip>
			{/* <Tooltip title="Pievienot rakstam uzlabošanas veidnes"><Button color="secondary">Uzlabot</Button></Tooltip> */}
		</ButtonGroup>
		<Iw isOpen={openedModal === 'iw'} />
		<Delete isOpen={openedModal === 'delete'} />
		<Copyvio isOpen={openedModal === 'copyvio'} />
	</>
}

/*
export default connect(
	null,
	mapDispatch
)(ArticleActions)
 */
export default ArticleActions;
