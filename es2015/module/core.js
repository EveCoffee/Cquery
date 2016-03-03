/**
 * Created by coffee on 2015/8/20.
 */

function init(element){
    element.each = each;
    element.eq = eq;
    element.clone = clone;
}

/**
 * 对象克隆
 * 对象里面可能包含null或者函数
 * 它们的共同点是： Object.keys()返回的长度是0
 */
function _clone(object){
    var newObject = {};
    if(typeof object === 'object'){
        for(var attr in object){
            if(object.hasOwnProperty(attr)){
                if(typeof object[attr]=='object' && Object.keys(object[attr]).length !== 0){
                    newObject[attr] = _clone(object[attr]);
                }else{
                    newObject[attr] = object[attr];
                }
            }
        }
    }

    return newObject;
}

function clone(){

    return _clone.call(this, this);
}

/**
 * 给对象添加遍历方法
 */
function each(callback){
    //必须先缓存长度，防止数组发生变化后计算出错
    var length = this.length;
    for(var i=0; i<length; i++){
        //回调返回false就表示结束循环
        if(callback.call(this[i], this[i], i, this) === false){
            break;
        }
    }
}

/**
 * 给对象添加取值方法
 * @param index 传入取值下标
 */
function eq(index){
    var _this = _clone(this);
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


export default init;