/**
 * Created by coffee on 2015/8/30.
 */

function init(element){
    //设置属性或者返回属性值
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
    //移除属性
    element.removeAttr = function (key) {
        if(!key){
            return this;
        }
        this.each(function (element) {
            element.removeAttribute(key);
        });
        return this;
    };

    //得到属性
    element.prop = function (key, value) {
        if(value!=undefined && key!=undefined){
            this[0][key] = value;

        }else if(value==undefined && key!=undefined ){

            if(this.length === 0){
                return;
            }

            var val;

            this.each(function() {
                val = this[key];
            });



            val = this[0][key];
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


export default init;