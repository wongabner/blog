---
title: 'git'
---

### 常用几个 Semantic Commit Messages：
- feat：新功能(feature)
- fix：修补bug
- docs：文档(documentation)
- style：格式(不影响代码运行的变动)
- refactor：重构(既不是新增新功能，也不是修改bug的代码变动)
- test：增加测试
- chore：构建过程或辅助工具的变动

### 如果已有项目,需要推送到一个git仓库
1. 在远程创建好一个仓库
2. 在本地项目目录里去 git init初始化当前目前为一个git仓库
3. git remote add origin git@xxxx:xxx/ xxx.git让本地仓库和远程仓库进行关联
4. 确保ssh权限配置正确(公钥配置在下面)
5. 在本地项目目录里去 git add-A
6. git commit -m ' you can write something you want!
7. git push origin <branch name>

### 配置ssh
1. 查看是否有.ssh目录,一般是在用户目录
2. 查看里面是否有文件
3. 通过ssh-keygen创建rsa文件,这里得注意,文件名需要带路径,为了方便后期添加多个,推荐使用 id rsa_xxxx(你想写的内容)来命名
4. 可以更改 id_rsa_xxxxx.pub文件里的email（alt+z 切换格式）
5. 复制里面的内容,到远程去添加ssh公钥
6. 在.ssh目录里添加一个config文件,配置

### config配置
```
Host git.dev.tencent.com
User <name 随便取>
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_coding
```

#### 再配置一个其他仓库的公钥（码云）：
1. ssh-keygen创建rsa文件 命名id_ras_gitee
2. 在config文件下继续配置：

```
Host gitee.com
User hy
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitee
```

### git的基础操作
- 查看git版本

```
git --version
```

- 查看git配置信息

```
git config --list
```

- 查看分支

```
git branch
```

- 创建并切换到新分支

```
git checkout -b <branch name> (eg: hy/home) 
```

- 创建新分支，不切换到新分支

```
git branch <branch name>(eg: hy/home)
```

- 切换分支

```
git checkout <branch name>(eg: master)
```

- 合并分支，将指定分支合并到当前分支

```
git merge <branch name>(eg: hy/home)
```

- 删除分支

```
git branch -D <branch name>(eg: hy/home)
```

- 初始化仓库

```
git init
```

- 查看仓库当前状态

```
git status
```

- 将文件添加到缓存区

```
// 添加所有文件
git add -A

// 添加某个文件
git add <file>
```

- 提交到本地仓库

```
// 引号不补全，回车不会提交
git commit -m 'commit类型：提交的消息'
```

- 查看提交的日志信息 （按字母q(uit)退出）

```
git log
```

- 查看git版本号

```
git relog
```

- 从远程仓库克隆到本地仓库(基于本地仓库无源代码，则使用clone)

```
git clone <远程仓库地址>
```

- 拉取远程仓库的最新代码(基于本地仓库有源代码，则使用pull)

```
git pull origin <branch name>
```

- 将本地仓库代码推送到远程

```
git push origin <branch name>
```

- 本地修改了一堆文件(并没有使用git add到暂存区)，想放弃修改。 

```
git checkout -- filename

// 所有文件/文件夹：
 git checkout .
```

- 本地新增了一堆文件(并没有git add到暂存区)，想放弃修改。 

```
// 单个文件/文件夹：
rm filename / rm dir -rf

// 所有文件/文件夹：
git clean -xdf
// 删除新增的文件，如果文件已经已经git add到暂存区，并不会删除！
```

- 本地修改/新增了一堆文件，已经git add到暂存区，想放弃修改。

```
// 单个文件/文件夹：
git reset HEAD filename

// 所有文件/文件夹：
git reset HEAD .
```

- 本地通过git add & git commit 之后，想要撤销此次commit

```
git reset commit_id

// 这个id是你想要回到的那个节点，可以通过git log查看，可以只选前6位 
// 撤销之后，你所做的已经commit的修改还在工作区！

git reset --hard HEAD^ 回退到上一个版本
git reset --hard HEAD~3 回退到之前的3次提交后
git reset -hard HEAD commit_id 回退到指定的commit_id处
```

- 回退版本

```
git reset --hard commit_id
```

- 删除远程仓库不存在的分支

```
git remote prune origin
```

- 删除远程分支

```
git push origin --delete <branch name>
```

### git tag用法

- 显示所有的tag

```
git tag
```

- 查看某个版本系列的tag

```
git tag -l 'v1.0.*'
```

- 创建标签

```
git tag -a v1.0.0 -m "内容：v1.0.0"
```

- 查看标签的详情，可以看到你commit的内容

```
git show v0.0.6
```

- 推送标签

```
git push origin v1.0.0
```

- 切换到某一个tag下

```
git checkout <tag_name>
```

- 检出标签

```
git checkout -b new_branch v1.0
git checkout -b [分支名称] [tag标签名称]
```

- 删除标签

```
// 删除本地
git tag -d v1.0.0
// 删除远程的
git push origin :refs/tags/v1.0.0
```

#### 完整的打tag
```
git add *
git commit -m "v0.3"
git tag v0.3
git push
git push origin v0.3
```

 [git官方中文文档链接](https://git-scm.com/book/zh/v2)
