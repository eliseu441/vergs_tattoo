import axios from 'axios';

const baseURL = "http://localhost:3001/api"

export default axios.create({
	baseURL,
	headers: {
		ContentType: 'application/json',
	},
});
