import React, {useEffect, useState} from 'react';
import defaultText from './text';
import PropTypes from 'prop-types'
import './mediawikistyle.scss';
import { connect } from 'react-redux';
import {updateArticleTitle} from '../Article/articleSlice';
import api from '../../api/methods';

//https://lv.wikipedia.org/w/load.php?lang=lv&modules=ext.cite.styles%7Cext.dismissableSiteNotice.styles%7Cext.echo.styles.badge%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cmediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.skinning.interface%7Coojs-ui.styles.icons-alerts%7Cskins.vector.styles%7Cwikibase.client.init&only=styles&skin=vector
const removeLinks = text => {
    text = text.replace(/<!--[\s\S]*?-->/g, '');
    text = text.replace(/&#160;/g, ' ');
    text = text.replace(/<h2>/g, '<h4>');
    text = text.replace(/<h3>/g, '<h5>');
	//href=\"//lv.wikipedia.org/w

    text = text.replace(/"\/wiki/g, '"https://lv.wikipedia.org/wiki');
    text = text.replace(/"\/w\/index/g, '"https://lv.wikipedia.org/w/index');

    text = text.replace(/"\/\/upload\.wikimedia.org/g, '"https://upload.wikimedia.org');
	//text = text.replace(/<\/?a[^>]*>/g, '');

    return text;
}

const ArticleText = ({title, updateArticleTitle}) => {
	const [articleText, setArticleText] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		//'Aleksandrs Pētersons (politiķis)'
		setLoading(true);
		api.mediawiki.getArticleText(title).then(res => {
			setLoading(false)
			if ('error' in res) {
				setArticleText('Raksts ar šādu nosaukumu nepastāv');
			} else {
				const pageText = res.parse.text['*'];
				setArticleText(pageText);
				/* if (title !== res.parse.title) {
					updateArticleTitle(res.parse.title);
				} */
			}
		})
		.catch(err => {
			setLoading(false);
			setArticleText(`Problēmas ar Vikipēdijas raksta izgūšanu: ${JSON.stringify(err)}`);
		})
		//setArticleText('AA--AA-'+title);
	}, [title]);

	return <div>
		{loading ? 'Ielādē rakstu...' : <div className="articlePreview" dangerouslySetInnerHTML={{__html: removeLinks(articleText)}} />}
	</div>;
}

ArticleText.propTypes = {
	title: PropTypes.string,
	updateArticleTitle: PropTypes.func
}

const mapDispatchToProps = { updateArticleTitle }

const mapStateToProps = state => ({
	title: state.article.title
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ArticleText)
