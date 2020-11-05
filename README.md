## image-cutter

这款工具允许你上传一张图片, 之后将这张图片分为n*7的小图片方格. 你可以使用这些小图片方格拼凑出一张大大的图片, 如下图所示.

![avatar](https://file.qingflow.com/uploads/file/e6945773-9c59-4ece-a372-725ff89dca59.png)

## 关于尺寸

用户所上传的最合适的图片大小, 宽度应该是224px, 因为github的Organization一行只能有7个, 每个单元都是32px*32px. 而高度则是32的倍数即可.

考虑到用户无法精确的掌控图片的尺寸, 该插件会将图片调整为合适的尺寸. 如下图的柴犬, 经过处理以后明显胖了...😂

![avatar](https://file.qingflow.com/uploads/file/a3459771-bd02-4f76-a6f3-91964b9e10ea.png)

总之, 无论你上传的图片多大多小, 都会将其调整为224px的宽度, 32px倍数的高度, 且保持长宽比.

## 心有余而力不足

其实本来打算做一个自动批量创建Organization以及自动替换头像的功能, 但是这个涉及到github的网络请求, 在查看github创建Organization的请求后, 发现拿不到所创建的Organization ID, 也就无法通过代码更新头像了. 

所以, 还是只能依靠人工一张一张上传图片, 确实麻烦了点~

## Ending

该项目还差一点结尾的小功能, 所以暂时不提供github pages服务, 目前只能自己clone and run. 