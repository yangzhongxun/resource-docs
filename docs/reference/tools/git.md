### Git 简介

[Git](https://git-scm.com/) 是目前世界上最先进的分布式版本控制系统。而 CVS 和 SVN 都是集中式的版本控制系统。

Linus 在 1991 年创建了开源的 Linux。



Git 跟踪并管理的是修改，而非文件。



### Git 相关概念

工作区：

版本库：又名仓库，英文名 repository

暂存区(stage 或 index)：

远程仓库：



### Git 基础命令

`git --version`

`git --help`

全局配置 git：

git config --global user.name "Your Name"

git config --global user.email "email@example.com"



##### Start a working area

`git clone` Clone a reponsitory into a new directory

`git init` Create an empty Git repository or reinitialize an existing one



##### work on the current change

`git add <filename>` or `git add .` 把要提交的所有修改放到暂存库(Stage)

`git mv` Move or rename a file, a directory, or a symlink

`git reset` Reset current HEAD to the specified state(git reset --hard commit_id)

* git reset HEAD <file> 把暂存区的修改撤销，重新放回工作区

`git rm` Remove file from the working tree and from the index



##### examine the history and state

`git bisect` Use binary search to find the commit that introduced a bug

grep

`git log` Show commit logs

* `git log --graph` 查看分支合并图
* git log -n 显示最近 n 次提交信息(n是正整数)

`git show` Show various types of objects

`git status` Show the working tree status



##### grow, mark and tweak your common history

`git branch`

`git checkout`

* git checkout -- <file_name> 撤销工作区的修改

`git commit` git commit -a <comment> 把暂存区的修改提交到分支

`git diff`

`git merge`

`git rebase`

`git tag`



##### collaborate

`git fetch`

`git pull`

`git push` 推送到远程库



`git reflog` 查看历史命令

`git revert`

`git shortlog`

`git remote`

git remote -v

git cherry-pick commit_id 复制特定提交到当前分支

建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`



`git help`

`git help -a` and `git help -g` list available subcommands and some concept guides.

`git help <command>` or `git help <concept>` to read about a specific subcommand or concept.

git help tutorial

git help everyday

git help revisions

git help workflows



##### stash Stash the changes in a dirty working directory away

git stash

git stash apply

git stash drop

git stash pop

git stash list



### 远程仓库

`git remote add origin git@server-name:path/repo-name.git` 关联远程库

`git push -u origin master` 第一次推送 master 分支的所有内容

`git push origin master` 推送最新修改



### 分支管理

查看分支：`git branch`

创建分支：`git branch `

切换分支：`git checkout `或者`git switch `

创建+切换分支：`git checkout -b `或者`git switch -c `

合并某分支到当前分支：`git merge `(--no-ff 普通模式合并)

删除分支：`git branch -d <name>`

强行删除一个没有合并过的分支: `git branch -D <branch_name>`



### 标签管理

git tag <tag_name> 针对最新提交的 commit 打一个新标签

git tag <tag_name> commit_id 针对某次提交打标签

git tag -a <tag_name> -m <description> <commt_id>

git show <tag_name> 查看标签信息

git tag 查看所有标签

git tag -d <tag_name>

git push origin <tagname> 推送某个标签到远程

git push origin --tags 一次性推送全部尚未推送到远程的本地标签



如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：

1. git tag -d <tagname>
2. git push origin :refs/tags/<tagname>



```gitignore
# .gitignore
```



### 配置别名

git config --global alias.st status