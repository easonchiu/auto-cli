// 引入base64插件
var Base64 = require("./base64.js");;
(function() {
    var extend = function(obj1, obj2) {
            var newObj = obj1;
            for (var i in obj2) {
                newObj[i] = obj2[i];
            }
            return newObj;
        }
        //调用原生
    var callNative = function(data) {
        var base64 = new Base64();
        var param = base64.encode(JSON.stringify(data));
        var prevIframe = NativeJsBridge.iframe;
        var iframe = document.createElement("iframe");
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
            iframe.src = "atzuche.dynamic:param=" + param;
        } else if (isiOS) {
            iframe.src = "https://atzuche.dynamic/?param=" + param;
        } 
        NativeJsBridge.iframe = iframe;
        setTimeout(function() {
            iframe.parentNode.removeChild(iframe)
        }, 30)
        return false;
    };
    var NativeJsBridge = {
        init: function(success) {
            var that = this;
            var num = 3;
            var obj = {};
            var isSuccess = function() {
                num--;
                if (num <= 0) {
                    success(obj)
                }
            }
            NativeJsBridge.getDeviceNum({
                callback: function(data) {
                    obj.deviceNum = data.deviceNum;
                    isSuccess();
                }
            });
            NativeJsBridge.getToken({
                callback: function(data) {
                    obj.token = data.token;
                    tokenst = data.token;
                    isSuccess();
                }
            });
            NativeJsBridge.getLocation({
                callback: function(data) {
                    obj.cityCode = data.cityCode;
                    obj.latitude = data.latitude;
                    obj.longitude = data.longitude;
                    isSuccess();
                }
            });

            NativeJsBridge.weixincode({
                callback: function(data) {
                    obj.ErrCode = data.ErrCode;
                    obj.code = data.code;
                    isSuccess();
                }
            });

        },
        //回调方法
        callback: {
            //索引
            fnIndex: 0,
            //添加一次性方法
            add: function(fn) {
                var that = this;
                this.fnIndex++;
                var fnName = "fn" + that.fnIndex;
                this[fnName] = function(data) {
                    fn(data);
                    that.clear(fnName);
                };
                return fnName;
            },
            //添加持久方法
            addLasting: function(fn, fnName) {
                fnName = "fnLasting_" + fnName;
                this[fnName] = function(data) {
                    fn(data);
                };
                return fnName;
            },
            //清除
            clear: function(num) {
                delete NativeJsBridge.callback[num];
            },
            //Native调用方法
            fn: function(res) {
                var base64 = new Base64();
                res = base64.decode(res);
                res = JSON.parse(res);
                
                NativeJsBridge.callback[res.fnId](res.data);
            },
            //永恒-进入页面
            /* forever_inPage : function(){
               alert(0);
               alert();
             }*/
            //    //永恒-离开页面
            //    forever_outPage : function(){
            //      NativeJsBridge.win.setBar({
            //        isShowStatusBar : "true",//是否显示状态栏（true:显示,false:不显示）
            //        isShowNaviBar : "true"//是否显示导航栏（true:显示,false:不显示）
            //      })
            //    }
        },
        //弹窗
        box: {
            //等待窗
            wait: function() {
                callNative({
                    info: {
                        type: "2001"
                    },
                    data: {}
                })
            },
            //带确认，取消
            confirm: function(settings) {
                //配置
                var config = {
                    title: "标题",
                    text: "内容",
                    okText: "确认",
                    ok: function() {}, //确定-回调
                    cancelText: "取消",
                    cancel: function() {} //取消-回调
                }
                config = extend(config, settings);
                var okIndex = NativeJsBridge.callback.add(config.ok);
                var cancelIndex = NativeJsBridge.callback.add(config.cancel);
                callNative({
                    info: {
                        type: "2002"
                    },
                    data: {
                        title: config.title,
                        text: config.text,
                        okText: config.okText,
                        ok: okIndex, //确定-回调
                        cancelText: config.cancelText,
                        cancel: cancelIndex //取消-回调
                    }
                })
            },
            //带确认
            alert: function(settings) {
                //配置
                var config = {
                    title: "标题",
                    text: "内容",
                    okText: "确认",
                    ok: function() {} //确定-回调
                }
                config = extend(config, settings);
                var okIndex = NativeJsBridge.callback.add(config.ok);
                callNative({
                    info: {
                        type: "2003"
                    },
                    data: {
                        title: config.title,
                        text: config.text,
                        okText: config.okText,
                        ok: okIndex //确定-回调
                    }
                })
            },
            //信息层
            msg: function(text) {
                //配置
                callNative({
                    info: {
                        type: "2004"
                    },
                    data: {
                        text: text.toString()
                    }
                })
            },
            //关闭
            close: function() {
                callNative({
                    info: {
                        type: "2005"
                    },
                    data: {}
                })
            }
        },
        //页面
        win: {
            //打开新
            open: function(settings) {
                //配置
                var config = {
                    title: "标题",
                    url: "http://baidu.com", //页面地址
                    isShowStatusBar: "true", //是否显示状态栏（true:显示,false:不显示）
                    isShowNaviBar: "true" //是否显示导航栏（true:显示,false:不显示）
                }
                config = extend(config, settings);
                callNative({
                    info: {
                        type: "1101"
                    },
                    data: {
                        title: config.title,
                        url: config.url,
                        isShowStatusBar: config.isShowStatusBar,
                        isShowNaviBar: config.isShowNaviBar
                    }
                })
            },
            //设置标题
            setTitle: function(settings) {
                //配置
                var config = {
                    title: "标题"
                }
                config = extend(config, settings);
                callNative({
                    info: {
                        type: "1102"
                    },
                    data: {
                        title: config.title
                    }
                })
            },
            //设置顶部栏目
            setBar: function(settings) {
                var config = {
                    isShowStatusBar: "false", //是否显示状态栏（true:显示,false:不显示）
                    isShowNaviBar: "false" //是否显示导航栏（true:显示,false:不显示）
                }
                config = extend(config, settings);
                callNative({
                    info: {
                        type: "1103"
                    },
                    data: {
                        isShowStatusBar: config.isShowStatusBar,
                        isShowNaviBar: config.isShowNaviBar
                    }
                })
            },

            //到登录页
            login: function(settings) {
                var config = {
                    success: function() {} //成功-回调
                }
                config = extend(config, settings);
                var successIndex = NativeJsBridge.callback.add(config.success);
                //      var errorIndex = NativeJsBridge.callback.add(config.error);
                callNative({
                    info: {
                        type: "1002"
                    },
                    data: {
                        success: successIndex
                    }
                })
            },

            //到车辆详情(2.7已实现)
            car: function(settings) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0001",
                        carNo: settings.carNo,
                        sceneId: settings.sceneId
                    }
                })
            }, //到上传出险照片(3.3)
            uploadPic: function(settings) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0008",
                        orderNo: settings.orderNo,
                        uniqueNo: settings.uniqueNo
                    }
                })
            }, //点击保存图片调用app接口(3.3)
            savePic: function(settings) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0009"
                    }
                })
            },
            //点击返回上一页3.3
            goBack: function(settings) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0010"
                    }
                })
            },
            //弹框3.3
            Bombbox: function(title, url) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0011",
                        title: title,
                        url: url
                    }
                })
            },
            //3.6跳转至app原生平台代为取还车页
            platform: function(settings) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0015",
                        carNo: settings.carNo,
                        platformCarService: settings.platformCarService,
                        isSignCarOwner: settings.isSignCarOwner,
                        practiceFlag: settings.practiceFlag
                    }
                })
            },
            //3.6跳转至app原生日限里程页
            dailyLimit: function(settings) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0016",
                        carNo: settings.carNo,
                        mileageLimit: settings.mileageLimit,
                        isSignCarOwner: settings.isSignCarOwner
                    }
                })
            },
            //3.6跳转至app原生租金页
            rent: function(settings) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0017",
                        carNo: settings.carNo
                    }
                })
            }, //IOS顶部状态栏时间颜色(0:黑色 1:白色)
            timeColor: function(settings) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0019",
                        StatusBarStyle: settings.StatusBarStyle
                    }
                })
            }, //添加凹凸官方电话至通讯录
            maillist: function() {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0018"
                    }
                })
            },
            //红点
            Bombboxt: function(titls) {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: titls,
                    }
                })
            },
            //返回上一页(2.7已实现)
            back: function() {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0006"
                    }
                })
            },
            //到首页(2.7已实现) 
            index: function() {
                callNative({
                    info: {
                        type: "1001"
                    },
                    data: {
                        pageId: "0007"
                    }
                })
            }
        },
        //分享
        share: function(settings) {
            //配置
            var config = {
                shareTitle: "标题",
                text: "内容",
                url: "http://baidu.com", // 分享链接
                //      sharePicUrl: "", // 分享图标
                //分享方式配置(sinaWeibo:新浪微博，tencentWeibo：腾讯微博，weixinFriend：微信好友，friendsCircle：朋友圈，shortMessage:短信，email:邮箱)
                ways: "sinaWeibo,tencentWeibo,weixinFriend,friendsCircle,shortMessage,email",
                success: function() {}, //成功-回调
                cancel: function() {} //取消-回调
            }
            config = extend(config, settings);
            var successIndex = NativeJsBridge.callback.add(config.success);
            var errorIndex = NativeJsBridge.callback.add(config.error);
            callNative({
                info: {
                    type: "1001"
                },
                data: {
                    pageId: "0005",
                    shareTitle: config.shareTitle,
                    text: config.text,
                    url: config.url,
                    sharePicUrl: config.sharePicUrl,
                    ways: config.ways,
                    success: successIndex,
                    cancel: errorIndex,
                    sourceType: ''
                }
            })
        },
        //方法
        ajax: function(settings) {
            //配置
            var config = {
                url: "/v30/member/info", //请求地址
                data: {}, //请求参数-json
                success: function() {}, //成功-回调
                error: function() {} //失败-回调
            }
            config = extend(config, settings);
            var success = function(data) {
                if (data.resCode == "000000") {
                    config.success(data)
                } else {
                    error(data);
                }
            }
            var error = function(data) {
                if (data.reason != undefined) {
                    data.resMsg = data.reason;
                    data.reason = undefined;
                }
                config.error(data);
            }
            var successIndex = NativeJsBridge.callback.add(success);
            var errorIndex = NativeJsBridge.callback.add(error);
            callNative({
                info: {
                    type: "9001"
                },
                data: {
                    url: config.url,
                    data: config.data,
                    success: successIndex,
                    error: errorIndex
                }
            })
        },
        //获取token（返回参数："token":"token"）
        getToken: function(settings) {
            var callbackIndex = NativeJsBridge.callback.add(settings.callback);
            callNative({
                info: {
                    type: "9002"
                },
                data: {
                    callback: callbackIndex //回调
                }
            })
        },
        //获取微信code
        weixincode: function(settings) {
            var callbackIndex = NativeJsBridge.callback.add(settings.callback);
            callNative({
                info: {
                    type: "1001"
                },
                data: {
                    pageId: "0014",
                    callback: callbackIndex //回调
                }
            })
        },
        //获取设备号（返回参数："deviceNum"":deviceNum"）
        getDeviceNum: function(settings) {
            var callbackIndex = NativeJsBridge.callback.add(settings.callback);
            callNative({
                info: {
                    type: "9003"
                },
                data: {
                    callback: callbackIndex //回调
                }
            })
        },
        //添加右上角按钮
        addRightBtn: function(settings) {
            var config = {
                btnText: "",
                callback: function() {} //回调
            };
            config = extend(config, settings);
            var callbackIndex = NativeJsBridge.callback.addLasting(config.callback, "addRightBtn");
            callNative({
                info: {
                    type: "9004"
                },
                data: {
                    btnText: config.btnText,
                    callback: callbackIndex //回调
                }
            })
        },
        //获取定位（返回参数："cityCode":"城市","longitude","经度","latitude":"纬度"）
        getLocation: function(settings) {
            var callbackIndex = NativeJsBridge.callback.add(settings.callback);
            callNative({
                info: {
                    type: "9005"
                },
                data: {
                    callback: callbackIndex //回调
                }
            })
        }
    }

    window.NativeJsBridge = NativeJsBridge;
}())

export default NativeJsBridge;