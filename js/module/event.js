/**
 * Created by coffee on 2015/8/19.
 */

define(['module/core', 'module/dom', 'module/style', 'module/attr'], function (core, dom, style, attr) {

    function init(element) {
        //添加遍历等核心方法
        core(element);
        //添加dom事件
        dom(element);
        //添加样式事件
        style(element);
        //添加属性事件
        attr(element);
        //点击事件
        element.click = function (callback) {
            this.each(function (element) {
                if(typeof callback == 'function'){
                    element.onclick = callback;
                }else{
                    element.onclick();
                }

            });
            return this;
        };
        //绑定任意事件
        element.on = function (eventName, callback) {
            this.each(function (element) {
                element[event2js(eventName)] = callback;
            });
        };
        //取消绑定事件
        element.off = function (eventName) {
            this.each(function (element) {
                element[event2js(eventName)] = null;
            });
        };
        //焦点事件
        element.focus = function (callback){
            this.each(function (element) {
                if(typeof callback == 'function'){
                    element.onfocus = callback;
                }else{
                    element.focus();
                }
            });
            return this;
        };
        //滚动事件
        element.scroll = function(callback){
            this.each(function (element) {
                if(typeof callback == 'function'){
                    element.onscroll = callback;
                }else{
                    element.onscroll();
                }
            });
            return this;
        };
        //滚动条高度
        element.scrollTop = function (number){
            if(typeof number == "number"){
                this.each(function (element) {
                    element.scrollTo(0,number);
                })
            }else if(number == undefined){
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
        element.mouseWheel = function(callback){
            this.each(function (element) {
                var mousewheelevent=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
                element.addEventListener(mousewheelevent, callback);
            })
        };
        //滚轮向上
        element.mousewheelUp = function (callback) {
            element.mouseWheel(function (e) {
                if(e.wheelDelta){
                    if(e.wheelDelta>0){
                        callback(e);
                    }
                }else if(e.detail){
                    if(e.detail<0){
                        callback(e);
                    }
                }
            })
        };
        //滚轮向下
        element.mousewheelDown = function (callback) {
            element.mouseWheel(function (e) {
                if(e.wheelDelta){
                    if(e.wheelDelta<0){
                        callback(e);
                    }
                }else if(e.detail){
                    if(e.detail>0){
                        callback(e);
                    }
                }
            })
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
            default :
                return eventName;
        }
    }

    return init;
});