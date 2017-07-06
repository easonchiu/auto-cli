import './style'

class Loading {
	static show(tips) {
		this.hide(false);

		let loading = document.createElement('div');
		loading.classList.add('x-loading');
		loading.id = 'j-x-loading';
		if (tips) {
			loading.innerHTML = `<div class="x-loading__inner"><p><sup></sup>${tips.toString()}</p></div>`;
		} else {
			loading.innerHTML = "<div class='x-loading__inner'><sup></sup></div>";
		}

		document.body.appendChild(loading);

		setTimeout(function(){
			loading.classList.add('x-loading--show');
		});
	}

	static hide(animate = true) {
		let loading = document.getElementById('j-x-loading');
		if (loading) {
			if (animate) {
				loading.classList.remove('x-loading--show');
				loading.classList.add('x-loading--hide');
				setTimeout(function(){
					document.body.removeChild(loading);
				}, 200);
			} else {
				document.body.removeChild(loading);
			}
		}
	}
}

export default Loading