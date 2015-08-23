/**
 * Created by coffee on 2015/8/19.
 */
define(['module/event'], function (event) {

    var query, selectEle;

//    event = require(['module/event']);
    function find(selector){
        if(selector){
            var obj = {}, queryList, num;
            num = 0;
            this.each(function (element, index) {
                /*查询出来的是一个数组，所以还需要继续拆散重组*/
                queryList = element.querySelectorAll(selector);
                for(var i = 0; i < queryList.length; i++){
                    obj[num++] = queryList[i];
                }
            });
            obj.length = num; //计算长度
            obj.find = find;
            event(obj);
            return obj;
        }
    }

    query= function (selector, context) {

        context = context || document;
        /**
         * 选择器类型判断
         */
        if (selector && typeof selector == 'string') {
            selectEle = context.querySelectorAll(selector);

            event(selectEle);
            selectEle.find = find;
            return selectEle;
        }else if(selector && typeof selector == 'object'){
            //如果是一个对象，也就是已经是html节点, 则返回一个伪数组
            var obj = {};
            obj[0] = selector;
            obj.length = 1;
            event(obj);
            return obj;

        }

        return this;
    };



    return query;
});