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
            callback(this[i], i, this);
        }
    }

    /**
     * 给对象添加取值方法
     * @param index 传入取值下标
     */
    function eq(index){
        var _this = this;
        _this.each(function (element, _index) {
            if(index !== _index){
                delete _this[_index];
                _this.length--;
            }else{
                _this[0] = _this[_index];
                if(_index !== 0){
                    delete _this[_index];
                }
            }
        });
        console.log(_this);
        return _this;
    }
    return init;
});