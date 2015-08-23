/**
 * Created by coffee on 2015/8/22.
 */
define(function () {

    function init(element){
        //���class
        element.addClass = function (className){
            this.each(function (element) {
                element.classList.add(className);
            })
        };
        //ɾ��class
        element.removeClass = function (className){
            this.each(function (element) {
                element.classList.remove(className);
            })
        };
        //�л�class
        element.toggleClass = function (className){
            this.each(function (element) {
                element.classList.toggle(className);
            })
        };
        //�ж�class�Ƿ����
        element.hasClass = function (className){
            this.each(function (element) {
                element.classList.contains(className);
            })
        };
        //���css����
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