English | [简体中文](README-zh_CN.md)

## Github photo wall

This tool allows you to upload an image and then divide it into n * 7 small picture squares. You can use these small picture squares to make a big picture, as shown in the following figure. Made of TypeScript + SCSS + Webpack

![avatar](https://file.qingflow.com/uploads/file/e6945773-9c59-4ece-a372-725ff89dca59.png)

## About size

The most suitable image size for users to upload should be 224px, because the organization line of GitHub can only have seven, each unit is 32px * 32px, and the height is a multiple of 32

Considering that the user can not accurately control the size of the image, the plug-in will adjust the image to the appropriate size 😂 (this is the old interface, the latest version no longer provides a comparison chart)

![avatar](https://file.qingflow.com/uploads/file/a3459771-bd02-4f76-a6f3-91964b9e10ea.png)

In a word, no matter how small or how many pictures you upload, you will adjust them to 224px width and 32px multiple height.

## Usage

1. Open [Online image segmentation](https://eve-sama.github.io/github-profile-photo-wall/)
2. Upload a image
3. Adjust the number of lines according to your preference and download the pictures 
4. Go to [Create organization](https://github.com/organizations/plan) Create n x 7 organizations, for example, the default is 7 x 7 picture squares, then you need to create 49 organizations
5. Modify the avatar of the organization in turn
6. At this point, you can see your own photo wall on your personal profile page, which other people can't actually see
7. You need to go to the organization settings page to modify your permissions, as shown in the figure below

![organization setting](https://file.qingflow.com/uploads/file/2d82c393-1d79-4829-bd50-dc1082cb8c52.png)

If you still don't understand the steps. You can read this [article](https://zhuanlan.zhihu.com/p/328903644).

## Front-end development exchange group

Welcome everyone to join the QQ group 925528845 to discussion :D
