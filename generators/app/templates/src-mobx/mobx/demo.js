import { action, observable, computed, useStrict, runInAction } from "mobx"

useStrict(true)

class Store {

	@observable _list = [0, 1, 2]

	@computed
	get list() {
		return this._list
	}

	@action('删除一项')
	pop() {
		const list = this._list.concat([])
		list.pop()
		this._list = list
	}

	@action('添加一项')
	push() {
		const list = this._list.concat([])
		list.push(this.list.length)
		this._list = list
	}

	@action('删除全部')
	clear() {
		this._list = []
	}

}

export default new Store()