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
    //���class
    function addClass(className){
        this.each(function (element) {
            element.classList.add(className);
        })
    }
    //ɾ��class
    function removeClass(className){
        this.each(function (element) {
            element.classList.remove(className);
        })
    }
    //�л�class
    function toggleClass(className){
        this.each(function (element) {
            element.classList.toggle(className);
        })
    }
    //�ж�class�Ƿ����
    function hasClass(className){
        this.each(function (element) {
            element.classList.contains(className);
        })
    }


    return init;
});