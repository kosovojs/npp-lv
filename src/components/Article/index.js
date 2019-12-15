import React from 'react';
import ArticleText from '../ArticleText';
import ArticleInfo from '../ArticleInfo';
import styles from './styles.module.scss';
import ArticleNavigationActions from '../ArticleActions/navigation';
import ArticleActions from '../ArticleActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNextArticle, resetID } from './articleSlice';

const title = name => {
	const urlSafeTitle = encodeURI(name);
	return (
		<>
			<span className={styles.articleName}>
				<a
					href={`https://lv.wikipedia.org/w/index.php?title=${urlSafeTitle}`}
					target='_blank'
					rel='noopener noreferrer'>
					{name}
				</a>
			</span>{' '}
			<small>
				(
				<a
					href={`https://lv.wikipedia.org/w/index.php?title=${urlSafeTitle}&action=edit&section=0`}
					target='_blank'
					rel='noopener noreferrer'>
					labot sākumu
				</a>
				{' | '}
				<a
					href={`https://lv.wikipedia.org/w/index.php?title=${urlSafeTitle}&action=edit`}
					target='_blank'
					rel='noopener noreferrer'>
					labot rakstu
				</a>
				{' | '}
				<a
					href={`https://lv.wikipedia.org/w/index.php?title=Diskusija:${urlSafeTitle}`}
					target='_blank'
					rel='noopener noreferrer'>
					diskusija
				</a>
				{' | '}
				<a
					href={`https://lv.wikipedia.org/w/index.php?title=${urlSafeTitle}&action=history`}
					target='_blank'
					rel='noopener noreferrer'>
					vēsture
				</a>
				)
			</small>
		</>
	);
};

class Article extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			id: null
		};
	}

	componentDidMount() {
		this.props.resetID();
		this.props.fetchNextArticle('next');
	}

	render() {
		const { isFetching, title: currTitle } = this.props;

		return (
			<>
				{currTitle && (
					<div className={styles.wrapper}>
						<div className={styles.title}>
							{title(currTitle)}
							<span className={styles.actions}>
								<ArticleActions />
							</span>
						</div>
						<div className={styles.navigActions}>
							<ArticleNavigationActions />
						</div>
						<div className={styles.info}>
							<ArticleInfo />
						</div>
						<div className={styles.text}>
							<ArticleText />
						</div>
					</div>
				)}
			</>
		);
	}
}

Article.propTypes = {
	isFetching: PropTypes.bool,
	title: PropTypes.string,
	fetchNextArticle: PropTypes.func,
	resetID: PropTypes.func
};

const mapStateToProps = state => ({
	isFetching: state.article.fetching,
	title: state.article.title
});

const mapDispatchToProps = { fetchNextArticle, resetID };

export default connect(mapStateToProps, mapDispatchToProps)(Article);
