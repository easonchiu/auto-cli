import './style'
import React, { Component } from 'react'
import classnames from 'classnames'
import loadingSpin from '../__loading-spin'

const Layout = props => {
	const css = classnames(
		'x-app',
		props.className,
	)
	return (
		<div {...props} className={ css }>
			{ props.children }
		</div>
	)
}

const LayoutBody = props => {
	const css = classnames(
		'x-app-body',
		props.className,
		{
			'x-app-body--loading': props.loading,
			'x-app-body--error': props.errorInfo,
		}
	)

	const domprops = {...props}
	delete domprops.loading
	delete domprops.errorInfo

	return (
		<div
			{...domprops}
			className={css}
		>
			{
				props.loading ?
				<div
					className="x-app__loading"
					dangerouslySetInnerHTML={{__html: loadingSpin}}
				/> :
				props.errorInfo ?
				<p className="x-app__error-info"><i>!</i>{props.errorInfo}</p> :
				props.children
			}
		</div>
	)
}

const LayoutFooter = props => {
	const css = classnames(
		'x-app-footer',
		props.className,
	)
	if (props.visible === false) {
		return null
	}

	const domprops = {...props}
	delete domprops.visible

	return (
		<footer {...domprops} className={ css }>
			{ props.children }
		</footer>
	)
}

const LayoutHeader = props => {
	const css = classnames(
		'x-app-header',
		{
			'x-app-header--ghost': props.ghost
		},
		props.className,
	)
	const inner = classnames(
		'x-app-header__inner',
		props.innerClassName,
	)

	const domprops = {...props}
	delete domprops.ghost
	delete domprops.innerClassName
	delete domprops.addonBefore
	delete domprops.onBackClick
	delete domprops.onCloseClick
	delete domprops.title
	delete domprops.children
	delete domprops.addonAfter
	delete domprops.addonBottom

	return (
		<header {...domprops} className={css}>
			<div className={inner}>
				{
					props.addonBefore || props.onBackClick || props.onCloseClick ?
					<div className="x-app-header__addon-before">
						{
							props.onBackClick ?
							<a
								onClick={props.onBackClick}
								href="javascript:;"
								className="x-app-header__back"
							/> :

							props.onCloseClick ?
							<a
								onClick={props.onCloseClick}
								href="javascript:;"
								className="x-app-header__close"
							/> :

							null
						}
						{ props.addonBefore }
					</div> :
					null
				}
				{ props.title ? <h1 className="x-app-header__title">{ props.title }</h1> : null }
				{ props.children }
				{ props.addonAfter ? <div className="x-app-header__addon-after">{ props.addonAfter }</div> : null }
			</div>
			{ props.addonBottom ? <div className="x-app-header__addon-bottom">{ props.addonBottom }</div> : null }
		</header>
	)
}

Layout.Header = LayoutHeader
Layout.Body = LayoutBody
Layout.Footer = LayoutFooter
export default Layout
