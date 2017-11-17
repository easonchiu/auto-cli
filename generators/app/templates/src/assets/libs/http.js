import axios from 'axios'

const config = {
	production: '/',
	develop: 'proxy',
	test1: '/',
	test2: '/',
	test3: '/',
	test4: '/',
	test5: '/',
}

const baseURL = config[process.env.ENV_NAME] || config['develop']

const http = axios.create({
	baseURL,
	header: {
		'Accept': 'application/json;version=3.0;compress=false',
		'Content-Type': 'application/json;charset=utf-8'
	}
})

http.interceptors.request.use(config => {
	return config
})

http.interceptors.response.use(config => {
	
	return config

	return Promise.reject({
		msg: config
	})
}, error => {
	return Promise.reject({
		msg: '系统错误'
	})
})

export default http