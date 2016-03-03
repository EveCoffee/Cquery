/**
 * Created by coffee on 2015/8/22.
 */
'use strict';

function init(element){

    // show
    element.show = function () {
        this.css("display", "block");
    };

    // hide
    element.hide = function () {
        this.css("display", "none");
    };

    //add class
    element.addClass = function (className){
        this.each(function (element) {
            element.classList.add(className);
        });

        return this;
    };

    //remove class
    element.removeClass = function (className){
        this.each(function (element) {
            element.classList.remove(className);
        });

        return this;
    };

    //toggle class
    element.toggleClass = function (className){
        this.each(function (element) {
            element.classList.toggle(className);
        });

        return this;
    };

    //has class
    element.hasClass = function (className){
        var _hasClass = false;
        this.each(function (element) {
            _hasClass = element.classList.contains(className);
        });
        return _hasClass;
    };

    //setting style key-value
    element.css = function (styleName, styleValue) {

        //传递一个对象， 就将对象的全部属性设置到对应元素
        if(arguments.length == 1 && typeof arguments[0] == 'object'){

            Object.keys(arguments[0]).forEach((key) => {
                var value = arguments[0][key];
                this.each(function (element) {
                    element.style[key] = value;
                })
            });

            return this;
        }


        if(styleValue){
            this.each(function (element) {
                element.style[styleName] = styleValue;
            })
        }else{
            var value = null;
            this.each(function (element) {
                value = element.style[styleName];
            });
            return value;
        }

        return this;

    }
}

export default init;