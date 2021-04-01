# MyActions
自己用来签到的东东,不支持售后

##
目前已支持[@NobyDa](https://github.com/NobyDa) 以及[@lxk0301](https://github.com/lxk0301) 中京东签到的内容,优点是支持无限数量的京东cookie

## 使用教程

1. 直接fork走

2. 再在`Settings`-`Secrets`里面添加`JD_COOKIE`

3. 多条cookie用`&`隔开,支持无数条cookie

然后什么都不用管了,刚fork完可能在Actions中看不到对应的workflow

不用担心,放在那儿就好,目前是采用的定时触发,触发后就可以看到了



```
备注:
针对京东cookie我们只需要
pt_key=****
和
pt_pin=***
的部分

我有两个京东账号,则我JD_COOKIE里面要填写的内容为
pt_key=****;pt_pin=***&pt_key=****;pt_pin=***
```
