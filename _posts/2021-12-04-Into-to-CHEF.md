---
title: CHEF
layout: post
post-image: "/assets/images/Chef.jpeg"
description: A Basic Introduction to CHEF
tags:
- DevOps
- CHEF
---

# Welcome to CHEF

# CHEF

Chef is an configuration management tool.<br/>
Generally we have two mechanisms:
1. Push based
2. Pull based<br/>

We have total 3 stages.
### 1. Chef Workstation
We generally write our code here. Chef workstation are the computer servers  or personal computers, where all configuration code is created, tested or changed.<br/>
Workstation communicate with the chef-server using knife <br/>

>knife is a command-line tool that provides an interface between a local chef-repo and the Chef Infra Server. knife helps users to manage:
- Nodes
- Cookbooks and recipes
- Roles, Environments, and Data Bags
- Resources within various cloud environments
- The installation of Chef Infra Client onto nodes
- Searching of indexed data on the Chef Infra Server

### 2. Chef Server
we store our code here and all cookbooks are stored here. Server may be hosted locally or remotely.
### 3. Chef Node
* we apply our code here. Nodes are the machines which requires the configurations.
* Ohai fetches the current state of node it's located in. Node communicate with the chef-server using chef-client.
* Each node can have different configuration required. On every node chef-client in installed.

We need to establish communication among workstation, server and nodes. 
We can have multiple no of nodes & Chef can manage any no of nodes effectively.

## Idempotency

```
* It is unique feature which ensures that changes should not re-apply repeatedly. 
  Once  chef-client converted code into Infrastructure, then even chef-client runs again, it will not take any action.
* It won’t do the same task again and again. If any new changes are there in that code, then only chef-client is going to take action.
  So it doesn’t make any difference ever if you run chef-client any no of times. 
* So Idempotency can be defined as to track the system details to not to reapply changes again and again.
```
## Ohai
```
* Ohai can call Ohai as the “System Discovery Tool”. 
  It stores system information and captures each and every minute details of system and updates it then and there if any new changes exits.
* Whenever chef-client converts code in infrastructure in node, immediately Ohai store will be updated. 
  Next time onwards,before chef-client runs, it verifies in Ohai store to know about current state of information. 
  So chef-client will come to know the current state of server. Then chef-client acts accordingly.
* If new changes are there, then only it will take action. If there are no new changes, then it won’t take any action. 
```
## Cookbook
Cookbook is a collection of recipes and few other files and folders mentioned below : 

* Chefignore: like .gitignore (to ignore files and folders)
* Kitchen.yml: for testing of cookbook
* Metadata.rb: name, author, version…. etc of cookbook
* Readme.md_file: information about usage of cookbook
* Recipe: It is a file where you write code
* Spec: for unit test
* Test:for integration test

*Deploy a web server by using chef*
```Ruby
package ‘httpd’ do
action :install
end

file ‘/var/www/html/index.html’ do
content ‘Hello Dear Students!!’
action :create
end

service ‘httpd’ do
action [ :enable, :start ]
end
```