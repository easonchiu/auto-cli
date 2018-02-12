import at from 'at-js-sdk'


if (window.isApp) {

	// 禁止ios系统回弹
	at && at.setWebviewBounces({
	    isBounces: 0
	})

	// ios顶部把状态栏位置给留出来
	
}