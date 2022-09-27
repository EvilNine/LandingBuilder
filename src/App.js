import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Editor from './components/Editor';
import ListContainer from './components/List';
import Loader from './components/Loader';
import TypeContainer from './components/Type';
import {AppContainer} from './styles/main.js';

function App() {
	const [state, setState] = useState('loading');
	const [loaded, setLoaded] = useState(false);
	const [data, setData] = useState({});
	const [listData, setDataList] = useState({});
	const [template, setTemplate] = useState([]);
	const [category, setCategory] = useState(null);

	useEffect(  ()=> {
		async function fetchData() {
			const response = await axios('./bd.json'); // Dev
			// const response = await axios('/themes/engine/js/webmaster/templatebuilder/bd.json'); // Build
			if(response.status === 200) {
				setData(response.data);
				setLoaded(!loaded);
				setState('category');
			} else {
				console.error("fail");
			}
		}
		fetchData();
	}, [])

	const handleBack = (action) => {
		setState(action);
	}

	const handleChooseCategory = (category, templates) => {
		setCategory(category)
		setDataList(templates)
		setState('list');
	}

	const handleLoadTemplate = (item) => {
		setState('editor');
		setTemplate(item);
	}

	return (
		<AppContainer>
			{ state === 'loading' && <Loader loaded={loaded}/> }
			{ state === 'category' && <TypeContainer handleClick={handleChooseCategory} data={data.category}/> }
			{ state === 'list' &&  <ListContainer handleClick={handleLoadTemplate} back={handleBack} category={category} data={listData} /> }
			{ state === 'editor' && <Editor id="editor" data={template} category={category} back={handleBack}/> }
		</AppContainer>
  	);
}

export default App;