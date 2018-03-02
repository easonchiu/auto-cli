/**
 * 在组件中用装饰器的方式捆绑事件类
 * 使用方式：
 * 1. @ComponentEvent('evt', Event) // 事件方式捆绑到命名空间中
 * 2. @ComponentEvent(Event) // 事件直接绑定到this
 * @param ns namespace
 * @param Event event class
 * Event在写类方法的时候要注意两点，1. 只能使用箭头函数 2. 不要在组件的构造函数中调用
 * @returns {function(*)} component
 *
 */
const ComponentEvent = (ns, Event) => Component => {
    class WithEvent extends Component {
        constructor(props) {
            super(props)

            if (Event === undefined && typeof ns === 'function') {
                const Event = ns
                Event.prototype = this
                const events = new Event()
                Object.keys(events).map(res => this[res] = events[res])
            }
            else if (typeof ns === 'string' && typeof Event === 'function') {
                Event.prototype = this
                this[ns] = new Event()
            }
            else {
                throw new Error('arguments type error')
            }
        }
    }
    return WithEvent
}

export default ComponentEvent