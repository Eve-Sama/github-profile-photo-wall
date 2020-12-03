[English](README.md) | 简体中文

## Github 照片墙

这款工具允许你上传一张图片, 之后将这张图片分为n*7的小图片方格. 你可以使用这些小图片方格拼凑出一张大大的图片, 如下图所示. 技术栈为 TypeScript + SCSS + Webpack

![avatar](https://file.qingflow.com/uploads/file/e6945773-9c59-4ece-a372-725ff89dca59.png)

## 关于尺寸

用户所上传的最合适的图片大小, 宽度应该是224px, 因为 github 的 organization 一行只能有7个, 每个单元都是32px*32px. 而高度则是32的倍数即可.

考虑到用户无法精确地掌控图片尺寸, 该插件会将图片调整为合适的尺寸. 如下图的柴犬, 经过处理以后明显胖了...😂(这是旧界面, 最新版本不再提供对比图)

![avatar](https://file.qingflow.com/uploads/file/a3459771-bd02-4f76-a6f3-91964b9e10ea.png)

总之, 无论你上传的图片多大多小, 都会将其调整为224px的宽度, 32px倍数的高度.

## 使用

1. 打开 [图片在线分割](https://eve-sama.github.io/github-profile-photo-wall/)
2. 上传一张照片
3. 根据喜好调整行数, 并下载图片
4. 前往 [新建组织](https://github.com/organizations/plan) 创建 n x 7 个组织, 比如默认是 7 x 7 个图片方格, 那么你就需要创建49个组织
5. 依次修改组织的头像
6. 至此, 你可以在你个人的 profile 页面看到自己的照片墙, 而别人其实并不能看到
7. 你需要前往组织设置页面, 修改自己的权限如下图所示

![organization setting](https://file.qingflow.com/uploads/file/2d82c393-1d79-4829-bd50-dc1082cb8c52.png)

对步骤还是不理解的, 可以看这篇 [文章](https://zhuanlan.zhihu.com/p/328903644)的详述.

## 前端开发交流群

欢迎大家加入QQ群 925528845 一起讨论 :D
