/**
 * Created by coffee on 2015/8/20.
 */
define(function () {

    function init(element){
        element.each = each;
        element.eq = eq;
    }

    /**
     * 给对象添加遍历方法
     */
    function each(callback){
        //必须先缓存长度，防止数组发生变化后计算出错
        var length = this.length;
        for(var i=0; i<length; i++){
            //回调返回false就表示结束循环
            if(callback(this[i], i, this) === false){
                break;
            }
        }
    }

    /**
     * 给对象添加取值方法
     * @param index 传入取值下标
     */
    function eq(index){
        var _this = this;
        var tempValue = _this[index];

        _this.each(function (element, _index) {
            delete _this[_index];
        });
        if(tempValue){
            _this[0] = tempValue;
            _this.length = 1;
        }

        return _this;
    }
    return init;
});