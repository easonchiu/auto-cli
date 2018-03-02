import axios from 'axios'
import { clearToken, toLogin } from 'src/utils/token'

const config = {
	production: '/',
	develop: 'proxy',
	test: '/',
}

/**
 * 获取config配置中的请求前置路径
 */
const baseURL = config[process.env.PACKAGE] === undefined ?
	config['develop'] : config[process.env.PACKAGE]

/**
 * 配置axios
 */
const http = axios.create({
	baseURL,
	header: {
		'Accept': 'application/json;version=3.0;compress=false',
		'Content-Type': 'application/json;charset=utf-8'
	}
})

/**
 * 请求拦截器，在发起请求之前
 */
http.interceptors.request.use(config => {
	return config
})

/**
 * 接口响应拦截器，在接口响应之后
 */
http.interceptors.response.use(config => {
	// 响应正常
	if (config.data.resCode === '000000') {
		return config.data.data
	}
	// 需要登录（没登录或登录过期）
	else if (config.data.resCode === '200008' || config.data.resCode === '400001'){
		clearToken()
		toLogin()
		return false
	}
	// reject错误处理
	return Promise.reject({
		msg: config
	})
}, error => {
    // reject错误处理
	return Promise.reject({
		msg: '系统错误'
	})
})

export default http