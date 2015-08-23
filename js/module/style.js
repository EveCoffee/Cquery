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
            this.each(function (element) {
                element.classList.contains(className);
            })
        };
        //ÃÌº”css Ù–‘
        element.css = function (styleName, styleValue) {
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

        }
    }

    return init;
});