/**
 * Created by coffee on 2015/8/22.
 */
define(function () {

    function init(element){
        //ÃÌº”class
        element.addClass = function (className){
            this.each(function (element) {
                element.classList.add(className);
            })
        };
        //…æ≥˝class
        element.removeClass = function (className){
            this.each(function (element) {
                element.classList.remove(className);
            })
        };
        //«–ªªclass
        element.toggleClass = function (className){
            this.each(function (element) {
                element.classList.toggle(className);
            })
        };
        //≈–∂œclass «∑Ò¥Ê‘⁄
        element.hasClass = function (className){
            var _hasClass = false;
            this.each(function (element) {
                _hasClass = element.classList.contains(className);
            });
            return _hasClass;
        };
        //ÃÌº”css Ù–‘
        element.css = function (styleName, styleValue) {

            if(arguments.length == 1 && typeof arguments[0] == 'object'){
                var key,value;

                for(key in arguments[0]){
                    value = arguments[0][key];
                    this.each(function (element) {
                        element.style[key] = value;
                    })
                }

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

    return init;
});