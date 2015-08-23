##这是模仿jquery写的一个库
#####为什么要写这东西
+ 我的javascript是从jquery入门的
+ 我很喜欢jquery的接口，简洁明了，比原生的好了不知道多少倍
+ 我要开始写js原生了，为了能够全面的了解原生，自己封装一个库也许是个很不错的办法
+ 用模块化构建，希望能够做到需要哪些功能就只生成那部分，避免不必要的资源浪费。
### 代码块
``` python
@requires_authorization
def somefunc(param1='', param2=0):
    '''A docstring'''
    if param1 > param2: # interesting
        print 'Greater'
    return (param2 - param1 + 1) or None
class SomeClass:
    pass
>>> message = '''interpreter
... prompt'''
```
