import './style'
import React, { Component } from 'react'
import classnames from 'classnames'

const Layout = props => {
	const css = classnames(
		'x-app',
		props.className,
	)
	return (
		<view className={ css }>
			{ props.children }
		</view>
	)
}

const LayoutBody = props => {
	const css = classnames(
		'x-app-body',
		props.className,
	);
	return (
		<main className={ css } style={props.style}>
			{ props.children }
		</main>
	)
}

const LayoutFooter = props => {
	const css = classnames(
		'x-app-footer',
		props.className,
	)
	return (
		<footer className={ css }>
			{ props.children }
		</footer>
	)
}

const LayoutHeader = props => {
	const css = classnames(
		'x-app-header',
		props.className,
	)
	const inner = classnames(
		'x-app-header__inner',
		props.innerClassName,
	)
	return (
		<header className={css} style={props.style}>
			<div className={inner}>
				{ props.children }
			</div>
		</header>
	)
}

Layout.Header = LayoutHeader
Layout.Body = LayoutBody
Layout.Footer = LayoutFooter
export default Layout