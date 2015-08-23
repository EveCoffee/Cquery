/**
 * Created by coffee on 2015/8/22.
 */
define(function () {

    function init(element){
        element.addClass = addClass;
        element.removeClass = removeClass;
        element.toggleClass = toggleClass;
        element.hasClass = hasClass;
    }
    //Ìí¼Óclass
    function addClass(className){
        this.each(function (element) {
            element.classList.add(className);
        })
    }
    //É¾³ýclass
    function removeClass(className){
        this.each(function (element) {
            element.classList.remove(className);
        })
    }
    //ÇÐ»»class
    function toggleClass(className){
        this.each(function (element) {
            element.classList.toggle(className);
        })
    }
    //ÅÐ¶ÏclassÊÇ·ñ´æÔÚ
    function hasClass(className){
        this.each(function (element) {
            element.classList.contains(className);
        })
    }


    return init;
});