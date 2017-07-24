import CSSModules from 'react-css-modules'

export default (Component, styles) => {
	return CSSModules(Component, styles, {allowMultiple: true})
}