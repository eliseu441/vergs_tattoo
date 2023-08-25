import API from './Api';
const context = '/indicadores';

class Service {

	getIndicador = async (params) => {
		try {
			return await API.get(`${context}`, { params });
		} catch (err) {
			throw err;
		}
	};

}

export default new Service();