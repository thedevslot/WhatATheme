---
title: Bash Scripting
layout: post
post-image: "/assets/images/shellscripting.jpeg"
description: A Basic Introduction to Shell Script
tags:
- DevOps
- Shell Script
---

### Command:

```bash

ls -l 
ls -la
ls -li
ls -ltr
ls -h -l #human redable format
```
## top command 
```bash
#top command will give you all details PID, CPU%, USER etc
top
top -b -n 1
#We can redirect the output to a particular file.
top -b -n 1 > file1 .txt 
```
## greep command

```bash
grep  # Regular grep
egrep # Extended grep for regular expression
fgrep # Fixed string separated by new line
rgrep # Reverse grep
egrep & fgrep depricated 
grep -E and grep -F can be used 
grep "Apple" fruitlist.txt #check for pattern "Apple" in the fruitlist.tet file
grep -c "Apple" fruitlist.txt #count the number of occurane of the word Apple in fruitlist.txt
```