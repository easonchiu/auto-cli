import {Loading, Toast} from 'auto'

export default class Event {

    goBack = e => {
        Toast.show('返回点击事件')
    }

    nextClick = e => {
        this.props.history.push('/2')
    }

    pop = e => {
        this.props.$demo.pop()
    }

    push = e => {
        this.props.$demo.push()
    }

    clear = e => {
        this.props.$demo.clear()
    }

    asyncPush = async e => {
        try {
            Loading.show()

            await this.props.$demo.asyncPush()
        }
        catch (e) {
            Toast.show(e.msg)
        }
        finally {
            Loading.hide()
        }
    }
}