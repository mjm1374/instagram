import { useEffect, useState } from 'react';
import instagram from './api/instagram';
import './App.css';

function App() {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		const fetchFeed = async () => {
			const request = await instagram.get(`/standings`, {
				params: {
					fields: 'id,caption, media_type, media_url,permalink, thumbnail_url, timestamp, username',
					access_token: `${process.env.REACT_APP_FOOTBALL_API}`,
				},
			});
			setPhotos(...request);
			console.log(request);
		};

		fetchFeed();
	}, []);

	return <div className='App'>Instagram </div>;
}

export default App;
