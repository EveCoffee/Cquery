/**
 * Created by coffee on 2015/8/30.
 */

define(function () {

    function init(element){
        //Ԫ������
        element.attr = function (key, value) {
            if(value!=undefined && key!=undefined){
                this.each(function (element) {
                    element.setAttribute(key, value);
                })
            }else if(value==undefined && key!=undefined ){
                var val = undefined;
                this.each(function (element) {
                    val = element.getAttribute(key);
                });
                return val;
            }
            return this;

        };
        //ɾ������
        element.removeAttr = function (key) {
            if(!key){
                return this;
            }
            this.each(function (element) {
                element.removeAttribute(key);
            });
            return this;
        };

        //��ȡƥ���Ԫ�ؼ��е�һ��Ԫ�ص�����, ��������ĺ���
        element.prop = function (key, value) {
            if(value!=undefined && key!=undefined){
                this.eq(0).attr(key, value);
            }else if(value==undefined && key!=undefined ){
                var val = undefined;
                this.eq(0).attr(key);
                return val;
            }
            return this;
        };

        element.removeProp = function (key) {
            if(!key){
                return this;
            }
            this.eq(0).removeAttr(key);
        };
        element.val = function () {

        }
    }

    return init;
});