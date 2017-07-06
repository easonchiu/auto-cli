import './style'

class Alert {
	static show({
		title = '提示',
		desc = 'empty',
		input = '',
		placeholder = '',
		className = 'x-alert',
		btnTextN,
		btnText = '确定',
		btnTextY = btnText,
		callbackN = () => {},
		callback = () => {},
		callbackY = callback,
	} = {}) {

		let o = {
			title,
			desc,
			input,
			placeholder,
			className,
			btnTextN,
			btnTextY,
			callbackN,
			callbackY,
		}
		if (typeof arguments[0] == 'string') {
			o.desc = arguments[0];
		}

		let alert = document.getElementById('j-x-alert');
		if (alert) {
			return;
		}
		this.render(o);
	}
	static hide(callback = () => {}, val) {
		let alert = document.getElementById('j-x-alert');
		if (alert){
			alert.classList.remove('x-alert--show');
			alert.classList.add('x-alert--hide');
			setTimeout(() => {
				this.destroy(alert);
				callback(val);
			}, 200);
		}
	}
	static clickN() {
		Alert.hide(Alert.callbackN);
	}
	static clickY() {
		let inputVal = document.getElementById('j-x-alert-input');
		inputVal = inputVal ? inputVal.value : undefined;
		Alert.hide(Alert.callbackY, inputVal);
	}
	static render(o) {

		this.callbackY = o.callbackY;
		this.callbackN = o.callbackN;

		let htmlBtnN = o.btnTextN ? `<a href='javascript:;' class='x-alert__btn-n' id='j-x-alert-btn-n'>${o.btnTextN}</a>` : '';

		let htmlInput = '';
		switch (o.input) {
			case 'text':
			case 'password':
				htmlInput = `<input type="${o.input}" id="j-x-alert-input" placeholder="${o.placeholder}" />`;
			break;
			default:
				htmlInput = '';
			break;
		}

		// <h1>${o.title}</h1>

		let html = `
			<div class='x-alert__inner'>
				<div class='x-alert__body'>
					
					<p>${o.desc}</p>
					${htmlInput}
				</div>
				<div class='x-alert__btns'>
					${htmlBtnN}
					<a href='javascript:;' class='x-alert__btn-y' id='j-x-alert-btn-y'>${o.btnTextY}</a>
				</div>
			</div>
		`;

		let alert = document.createElement('div');
		alert.classList.add('x-alert', o.className);
		alert.id = 'j-x-alert';
		alert.innerHTML = html;

		document.body.appendChild(alert);

		let btnN = document.getElementById('j-x-alert-btn-n');
		let btnY = document.getElementById('j-x-alert-btn-y');

		btnN && btnN.addEventListener('click', this.clickN);
		btnY && btnY.addEventListener('click', this.clickY);

		setTimeout(() => {
			alert.classList.add('x-alert--show');
		});
	}

	static destroy(alert) {
		let btnN = document.getElementById('j-x-alert-btn-n');
		let btnY = document.getElementById('j-x-alert-btn-y');

		btnN && btnN.removeEventListener('click', this.clickN);
		btnY && btnY.removeEventListener('click', this.clickY);

		this.callbackY = null;
		this.callbackN = null;
		
		document.body.removeChild(alert);

	}
}

export default Alert