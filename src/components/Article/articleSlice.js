import { createSlice } from '@reduxjs/toolkit';
import api from '../../api/methods';
import { toast } from 'react-toastify';

//https://github.com/iamhosseindhv/notistack

const articleSlice = createSlice({
  name: 'article',
  initialState: {id:0,title:null,fetching:false,saving:false},
  reducers: {
    getNextArticle: {
      reducer(state, action) {
		const { id, title } = action.payload;
		//console.log(id, title);
        return { id, title,fetching:false };
      },
      prepare(id, title) {
        return { payload: { id, title } }
      }
	},
	setFetchStart: {
		reducer(state) {
		  return { ...state,fetching:true };
		},
	},
	setSaveProcess: {
		reducer(state) {
		  return { ...state,saving:!state.saving };
		},
	},
	resetCounter: {
		reducer(state) {
		  return {id:0,title:null,fetching:false,saving:false};
		},
	},
	setTitle: {
		reducer(state, action) {
		  const { title } = action.payload;
		  //console.log(id, title);
		  return { ...state, title };
		},
		prepare(title) {
		  return { payload: { title } }
		}
	}
  }
})

const { getNextArticle, setFetchStart, setSaveProcess, resetCounter, setTitle } = articleSlice.actions;

const fetchNextArticle = (mode, optID = null) => (dispatch, getState) => {
	const {id, fetching} = getState().article;

	if (fetching) {
		console.error('Already fetching');
		return;
	}

	dispatch(setFetchStart(true))
	api.tool.nextArticle(optID || id, mode).then(res=> {
		const [data,_,__] = res;
		const [id, title] = data[0];

		dispatch(getNextArticle(id, title))
	})
}

const saveArticle = () => (dispatch, getState) => {
	const {id, title} = getState().article;

	dispatch(setSaveProcess(true))
	api.tool.saveArticle(id).then(res=> {
		dispatch(setSaveProcess(false))
		if (res.status === 'error') {
			toast.warn(`Neveiksmīga saglabāšana`, { autoClose: 7500 });
		} else {
			toast.success(`Darbība rakstam "${title}" saglabāta`, { autoClose: 3000 });
			dispatch(fetchNextArticle('next'))
		}
	})
	.catch(err => {
		dispatch(setSaveProcess(false))
		toast.warn(`Neveiksmīga saglabāšana`, { autoClose: 7500 });
	})
}

const putArticleInQueqe = (comment = null) => (dispatch, getState) => {
	const {id, title} = getState().article;

	dispatch(setSaveProcess(true))
	api.tool.putArticleInQueqe(id, comment).then(res=> {
		dispatch(setSaveProcess(false))
		if (res.status === 'error') {
			toast.warn(`Neveiksmīga saglabāšana`, { autoClose: 7500 });
		} else {
			toast.success(`Darbība rakstam "${title}" saglabāta`, { autoClose: 3000 });
			dispatch(fetchNextArticle('next'))
		}
	})
	.catch(err => {
		dispatch(setSaveProcess(false))
		toast.warn(`Neveiksmīga saglabāšana: ${err}`, { autoClose: 7500 });
	})
}

const resetID = () => (dispatch) => {
	dispatch(resetCounter())
}

const updateArticleTitle = (newTitle) => (dispatch) => {
	dispatch(setTitle(newTitle))
}

export {fetchNextArticle, saveArticle, putArticleInQueqe, resetID, updateArticleTitle};

export default articleSlice.reducer;
