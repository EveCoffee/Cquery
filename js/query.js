/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * Created by coffee on 2015/8/19.
	                                                                                                                                                                                                                                                   */
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var query, selectEle;
	
	//    event = require(['module/event']);
	function find(selector) {
	    if (selector) {
	        var obj = {},
	            queryList,
	            num;
	        num = 0;
	        this.each(function (element, index) {
	            /*查询出来的是一个数组，所以还需要继续拆散重组*/
	            queryList = element.querySelectorAll(selector);
	            for (var i = 0; i < queryList.length; i++) {
	                obj[num++] = queryList[i];
	            }
	        });
	        obj.length = num; //计算长度
	        obj.find = find;
	        (0, _event2.default)(obj);
	        return obj;
	    }
	}
	
	query = function query(selector, context) {
	
	    context = context || document;
	    /**
	     * 选择器类型判断
	     */
	    if (selector && typeof selector == 'string') {
	
	        /*
	         * 不能直接拿查询到的伪数组进行操作，因为那是只读属性
	         * */
	
	        var queryEle = context.querySelectorAll(selector);
	        selectEle = {};
	
	        //辅助伪数组
	        for (var i = 0; i < queryEle.length; i++) {
	            selectEle[i] = queryEle[i];
	        }
	        selectEle.length = queryEle.length;
	        (0, _event2.default)(selectEle);
	        selectEle.find = find;
	        return selectEle;
	    } else if (selector && (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') {
	        //如果是一个对象，也就是已经是html节点, 则返回一个伪数组
	        var obj = {};
	        obj[0] = selector;
	        obj.length = 1;
	        (0, _event2.default)(obj);
	        return obj;
	    }
	
	    return this;
	};
	
	window.query = query;
	
	exports.query = query;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _core = __webpack_require__(2);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _dom = __webpack_require__(3);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _style = __webpack_require__(4);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _attr = __webpack_require__(5);
	
	var _attr2 = _interopRequireDefault(_attr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by coffee on 2015/8/19.
	 */
	
	function init(element) {
	    //添加遍历等核心方法
	    (0, _core2.default)(element);
	    //添加dom事件
	    (0, _dom2.default)(element);
	    //添加样式事件
	    (0, _style2.default)(element);
	    //添加属性事件
	    (0, _attr2.default)(element);
	    //点击事件
	    element.click = function (callback) {
	        this.each(function (element) {
	            if (typeof callback == 'function') {
	                element.onclick = callback;
	            } else {
	                element.onclick();
	            }
	        });
	        return this;
	    };
	    //绑定任意事件, 可以多个
	    element.on = function (eventName, callback) {
	        var eventList = eventName.split(" ");
	        this.each(function (element) {
	            eventList.forEach(function (event) {
	                element.addEventListener(event, callback);
	            });
	        });
	    };
	    //取消绑定事件
	    element.off = function (eventName) {
	        var eventList = eventName.split(" ");
	        this.each(function (element) {
	            element[event2js(eventName)] = null;
	        });
	    };
	    //焦点事件
	    element.focus = function (callback) {
	        this.each(function (element) {
	            if (typeof callback == 'function') {
	                element.onfocus = callback;
	            } else {
	                element.focus();
	            }
	        });
	        return this;
	    };
	    //滚动事件
	    element.scroll = function (callback) {
	        this.each(function (element) {
	            if (typeof callback == 'function') {
	                element.onscroll = callback;
	            } else {
	                element.onscroll();
	            }
	        });
	        return this;
	    };
	    //滚动条高度
	    element.scrollTop = function (number) {
	        if (typeof number == "number") {
	            this.each(function (element) {
	                element.scrollTo(0, number);
	            });
	        } else if (number == undefined) {
	            var scrollTop = 0;
	            this.each(function (element) {
	                scrollTop = element.scrollY;
	            });
	            return scrollTop;
	        }
	    };
	    /**
	     * 鼠标滚轮事件
	     * e.preventDefault();  可以拦截事件冒泡
	     */
	    element.mouseWheel = function (callback) {
	        this.each(function (element) {
	            var mouseWheelEvent = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
	            element.addEventListener(mouseWheelEvent, callback);
	        });
	    };
	    //滚轮向上
	    element.mouseWheelUp = function (callback) {
	        element.mouseWheel(function (e) {
	            if (e.wheelDelta) {
	                if (e.wheelDelta > 0) {
	                    callback.call(this, e);
	                }
	            } else if (e.detail) {
	                if (e.detail < 0) {
	                    callback.call(this, e);
	                }
	            }
	        });
	    };
	    //滚轮向下
	    element.mouseWheelDown = function (callback) {
	        element.mouseWheel(function (e) {
	            if (e.wheelDelta) {
	                if (e.wheelDelta < 0) {
	                    callback.call(this, e);
	                }
	            } else if (e.detail) {
	                if (e.detail > 0) {
	                    callback.call(this, e);
	                }
	            }
	        });
	    };
	
	    return element;
	}
	
	/**
	 * @param eventName 事件名称
	 * @returns {*}  js原生事件名称
	 */
	function event2js(eventName) {
	    switch (eventName) {
	        case 'click':
	            return 'onclick';
	        case 'focus':
	            return 'onfocus';
	        case 'scroll':
	            return 'onscroll';
	        case 'mousewheel':
	            return 'onmousewheel';
	        default:
	            return eventName;
	    }
	}
	
	exports.default = init;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Created by coffee on 2015/8/20.
	 */
	
	function init(element) {
	    element.each = each;
	    element.eq = eq;
	    element.clone = clone;
	}
	
	/**
	 * 对象克隆
	 * 对象里面可能包含null或者函数
	 * 它们的共同点是： Object.keys()返回的长度是0
	 */
	function _clone(object) {
	    var newObject = {};
	    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
	        for (var attr in object) {
	            if (object.hasOwnProperty(attr)) {
	                if (_typeof(object[attr]) == 'object' && Object.keys(object[attr]).length !== 0) {
	                    newObject[attr] = _clone(object[attr]);
	                } else {
	                    newObject[attr] = object[attr];
	                }
	            }
	        }
	    }
	
	    return newObject;
	}
	
	function clone() {
	
	    return _clone.call(this, this);
	}
	
	/**
	 * 给对象添加遍历方法
	 */
	function each(callback) {
	    //必须先缓存长度，防止数组发生变化后计算出错
	    var length = this.length;
	    for (var i = 0; i < length; i++) {
	        //回调返回false就表示结束循环
	        if (callback.call(this[i], this[i], i, this) === false) {
	            break;
	        }
	    }
	}
	
	/**
	 * 给对象添加取值方法
	 * @param index 传入取值下标
	 */
	function eq(index) {
	    var _this = _clone(this);
	    var tempValue = _this[index];
	
	    _this.each(function (element, _index) {
	        delete _this[_index];
	    });
	    if (tempValue) {
	        _this[0] = tempValue;
	        _this.length = 1;
	    }
	
	    return _this;
	}
	
	exports.default = init;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by coffee on 2015/8/21.
	 */
	
	function init(elementList) {
	    elementList.text = addText;
	    elementList.html = addHtml;
	}
	
	//设置纯文本内容或者返回文本
	var addText = function addText(text) {
	    if (text) {
	        this.each(function (element, index) {
	            element.innerText = text;
	        });
	    } else {
	        text = null;
	        this.each(function (element) {
	            text = element.innerText;
	        });
	        return text;
	    }
	};
	
	//设置html内容
	var addHtml = function addHtml(html) {
	    if (html) {
	        this.each(function (element, index) {
	            element.innerHTML = html;
	        });
	    } else {
	        html = null;
	        this.each(function (element) {
	            html = element.innerHTML;
	        });
	        return html;
	    }
	};
	
	exports.default = init;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by coffee on 2015/8/22.
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	function init(element) {
	
	    // show
	    element.show = function () {
	        this.css("display", "block");
	    };
	
	    // hide
	    element.hide = function () {
	        this.css("display", "none");
	    };
	
	    //add class
	    element.addClass = function (className) {
	        this.each(function (element) {
	            element.classList.add(className);
	        });
	
	        return this;
	    };
	
	    //remove class
	    element.removeClass = function (className) {
	        this.each(function (element) {
	            element.classList.remove(className);
	        });
	
	        return this;
	    };
	
	    //toggle class
	    element.toggleClass = function (className) {
	        this.each(function (element) {
	            element.classList.toggle(className);
	        });
	
	        return this;
	    };
	
	    //has class
	    element.hasClass = function (className) {
	        var _hasClass = false;
	        this.each(function (element) {
	            _hasClass = element.classList.contains(className);
	        });
	        return _hasClass;
	    };
	
	    //setting style key-value
	    element.css = function (styleName, styleValue) {
	        var _arguments = arguments,
	            _this = this;
	
	        //传递一个对象， 就将对象的全部属性设置到对应元素
	        if (arguments.length == 1 && _typeof(arguments[0]) == 'object') {
	
	            Object.keys(arguments[0]).forEach(function (key) {
	                var value = _arguments[0][key];
	                _this.each(function (element) {
	                    element.style[key] = value;
	                });
	            });
	
	            return this;
	        }
	
	        if (styleValue) {
	            this.each(function (element) {
	                element.style[styleName] = styleValue;
	            });
	        } else {
	            var value = null;
	            this.each(function (element) {
	                value = element.style[styleName];
	            });
	            return value;
	        }
	
	        return this;
	    };
	}
	
	exports.default = init;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by coffee on 2015/8/30.
	 */
	
	function init(element) {
	    //设置属性或者返回属性值
	    element.attr = function (key, value) {
	        if (value != undefined && key != undefined) {
	            this.each(function (element) {
	                element.setAttribute(key, value);
	            });
	        } else if (value == undefined && key != undefined) {
	            var val = undefined;
	            this.each(function (element) {
	                val = element.getAttribute(key);
	            });
	            return val;
	        }
	        return this;
	    };
	    //移除属性
	    element.removeAttr = function (key) {
	        if (!key) {
	            return this;
	        }
	        this.each(function (element) {
	            element.removeAttribute(key);
	        });
	        return this;
	    };
	
	    //得到属性
	    element.prop = function (key, value) {
	        if (value != undefined && key != undefined) {
	            this[0][key] = value;
	        } else if (value == undefined && key != undefined) {
	
	            if (this.length === 0) {
	                return;
	            }
	
	            var val;
	
	            this.each(function () {
	                val = this[key];
	            });
	
	            val = this[0][key];
	            return val;
	        }
	        return this;
	    };
	
	    element.removeProp = function (key) {
	        if (!key) {
	            return this;
	        }
	        this.eq(0).removeAttr(key);
	    };
	    element.val = function () {};
	}
	
	exports.default = init;

/***/ }
/******/ ]);
//# sourceMappingURL=query.js.map