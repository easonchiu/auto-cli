import { action, observable, computed, useStrict, runInAction } from "mobx"

useStrict(true)

class Store {

	@observable val1 = 10
	@observable val2 = 0

	@computed
	get addResult() {
		return this.val1 + this.val2
	}

	@action('设置值')
	setVal(v, id) {
		if (isNaN(v)) return
		
		if (id == 1) {
			this.val1 = parseInt(v)
		} else if (id == 2) {
			this.val2 = parseInt(v)
		}
	}

	@action
	set() {
		this.val1 = 99
	}

	

	// async demo
	sleep(t = 2000) {
		return new Promise(resolve => setTimeout(resolve, t))
	}

	@action('异步添加list项目')
	async addList() {
		await this.sleep()
		runInAction(() => {
			this.list.push(this.list.length)
		})
	}
}

export default new Store()