import qs from 'qs'
import at from 'at-js-sdk'

const token = '_app_token_'
export const getToken = e => localStorage.getItem(token)
export const setToken = e => localStorage.setItem(token, e)
export const clearToken = e => localStorage.removeItem(token)

export const initToken = async e => {
	return new Promise((resolve, reject) => {
		if (window.isApp) {
			at.getToken({
				callback(res) {
					if (res.token != 0 && res.token != '') {
						setToken(res.token)
						resolve()
					} else {
						reject()
					}
				}
			})
		}
		else {
			const token = getToken()
			if (token) {
				resolve()
			}
			else {
				reject()
			}
		}
	})
}

export const toLogin = e => {
	if (window.isApp) {
		at.openLogin({
			success(res) {
				setToken(res.token)
				window.location.reload()
			},
			cancel() {
				at.closeWindow()
			}
		})
	}
	else {
		const search = qs.stringify({
			redirect: window.location.href
		})
		window.location.href = '/m/login/?' + search
	}
}