---
title: "Code Book List"
author:
unread: true
date: 2023-09-05T19:29:36+08:00
lastmod: 2023-09-05T19:29:36+08:00
draft: true
tags: []
category: [Book]
summary: 
---

## 陈皓

在《左耳听风》推荐的书单

### 学习前

- [Teach Yourself Programming in Ten Years ](http://norvig.com/21-days.html)

- [程序员的谎谬之言还是至理名言？](https://coolshell.cn/articles/4235.html)

### 编程入门

#### Python

- [Python 编程快速上手](https://book.douban.com/subject/26836700/)
- [Python 编程：从入门到实践](https://book.douban.com/subject/26829016/)

这两本书除了编程语法方面的讲述有所不同之外，其他都差不多，主要是通过书中的示例来强化你对编程的学习。第一本偏文本处理，包括处理 Word、Excel 和 PDF，第二本中有一些 Web 项目和代码部署方面的内容。如果可能的话，你可以把两本书中的示例都跑一遍。如果你时间有限的话，我推荐你看第二本。

#### JavaScript

- [MDN JavaScript 教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)，你可以认为这是最权威的 JavaScript 官方教程了，从初级到中级再到高级。
- [W3School JavaScript 教程](http://www.w3school.com.cn/js/)，这个教程比较偏 Web 方面的编程。
- [JavaScript 全栈教程（廖雪峰）](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)，这是廖雪峰的一个比较偏应用的教程，也是偏 Web 方面的编程，同时包括涉及后端的 Node.js 方面的教程。

### 操作系统入门

#### Linux

[Linux 教程](https://www.w3cschool.cn/linux/)，W3CSchool 上的在线教程

### 编程工具

#### Visual Studio Code

### Web 编程入门

#### 前端基础

MDN 的相关的技术文档，文档很大，你要学习的并不是所有的东西，而是了解 CSS 和 HTML 是怎么相互作用来展示数据的，然后，不用记忆文档中的内容，这两个文档是用来查找知识的

- [CSS 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 

- [HTML 文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 

#### 后端基础

-  [W3School 的 PHP 教程](http://www.w3school.com.cn/php/index.asp)
- [PHP 的官网文档](http://php.net/manual/zh/) 作为更全的文档来学习或查找相关的技术细节

#### 学习要点：

- 学习 HTML 基本语法。
- 学习 CSS 如何选中 HTML 元素并应用一些基本样式。
- 学会用 Firefox + Firebug 或 Chrome 查看你觉得很炫的网页结构，并动态修改。
- 在一台 Linux 机器上配置 LEMP - Ubuntu/Nginx/PHP/MySQL 这个环境。
- 学习 PHP，让后台 PHP 和前台 HTML 进行数据交互，对服务器相应浏览器请求形成初步认识。实现一个表单提交和反显的功能。
- 把 PHP 连接本地或者远程数据库 MySQL（MySQL 和 SQL 现学现用够了）

#### 实践项目

无论你用 Python，还是 Node.js，还是 PHP，我希望你能做一个非常简单的 Blog 系统，或是 BBS 系统，需要支持如下功能：

- 用户登录和注册（不需密码找回）。
- 用户发贴（不需要支持富文本，只需要支持纯文本）。
- 用户评论（不需要支持富文本，只需要支持纯文本）。

你需要从前端一直做到后端，也就是说，从 HTML/CSS/JavaScript，到后面的 PHP（Python/Node.js），再到数据库。这其中需要你查阅很多的知识。

这里有几个技术点你需要关注一下。

1. 用户登录时的密码不应该保存为明文，应该用 MD5+Salt 来保存（关于这个是什么，希望你能自行 Google）。
2. 用户登录后，对于用户自己的贴子可以有“重新编辑”或 “删除”的功能，但是无权编辑或删除其它用户的贴子。
3. 数据库的设计，你需要三张表：用户表、文章表和评论表，它们之间是怎么关联的，你需要学习一下。这里有个 PHP 的 blog 教你怎么建表，你可以 [前往一读](https://code.tutsplus.com/tutorials/how-to-create-a-phpmysql-powered-forum-from-scratch--net-10188)。

如果你有兴趣，你可以顺着这个小项目，研究一下下面这几个事。

- 图片验证码。
- 上传图片。
- 阻止用户在发文章或评论时输入带 HTML 或 JavaScript 的内容。
- 防范 SQL 注入。参看[PHP 官方文档](http://php.net/manual/zh/security.database.sql-injection.php) 或 [微软官方文档](https://technet.microsoft.com/zh-cn/library/ms161953(v=sql.105).aspx?f=255&MSPPError=-2147217396)，或者你自己 Google 一下。

上面这些东西，不是什么高深的东西，但是可以让你从中学到很多。相信你只需要自己 Google 一下就能搞定。
