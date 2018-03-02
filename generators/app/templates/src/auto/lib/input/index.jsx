import './style'
import React from 'react'
import cn from 'classnames'

const Input = props => {
    const type = props.type || 'text'

    const addonAfter = props.addonAfter && !props.multi ?
        <div className="x-input__addonafter">{props.addonAfter}</div> :
        ''
    const addonBefore = props.addonBefore && !props.multi ?
        <div className="x-input__addonbefore">{props.addonBefore}</div> :
        ''

    const css = cn('x-input', {
        'x-input--error': props.error,
        'x-input--multi': props.multi,
        'x-input--disabled': props.disabled,
    }, props.className)

    const inputprops = {...props}
    delete inputprops.addonAfter
    delete inputprops.addonBefore
    delete inputprops.multi
    delete inputprops.error

    return (
        <div className={css}>
            {addonBefore}
            {
                props.multi ?
                    <textarea
                        className="x-input__ipt"
                        {...inputprops}
                        value={props.value}
                        onChange={props.onChange}
                        type={type}
                    /> :
                    <input
                        className="x-input__ipt"
                        {...inputprops}
                        value={props.value}
                        onChange={props.onChange}
                        type={type}
                    />
            }
            {addonAfter}
        </div>
    )
}

export default Input