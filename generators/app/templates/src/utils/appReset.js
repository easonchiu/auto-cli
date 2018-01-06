import at from 'at-js-sdk'

// 禁止ios系统回弹
if (window.isApp) {
	at && at.setWebviewBounces({
	    isBounces: 0
	})
}