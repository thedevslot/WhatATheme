---
title: Ansible
layout: post
post-image: "/assets/images/external-content.duckduckgo.com.jpeg"
description: A Basic Introduction to Ansible
tags:
- DevOps
- Ansible
---

Ansible is an open source  IT Configuration managemrnt, Deployment and Orchestration tool.

# History :
Ansible was developed by Michael Dehan and then acquired by Redhat in 2015. It runs on many Unix-like systems, and can configure both Unix-like systems as well as Microsoft Windows. 
# Advantages :
* Ansible is Agentless(NO need to install chef client like CHEF).
* Its is very secure due to its agaenless capabilities and open SSH security features.
* Open-source
* PUSH Mechanism
* NO need of any special system Administrator skills to install and to use it 

# Terms used in Ansible : 
* Ansible server: The machine where Ansible is installed and from which all tasks and playbooks will be run.
* Module: Basically a module is a command or set of simillar commands meant to be executed on client side.
* Task: A task is section that consist of a single procedure to be completed.
* Role : A way of organising tasks and related files to be later called in a playbook.
* Fact: Information fetched from the client system from the global variables with the gather-fact operation.
* Inventory: File containing data about the ansible client server.
* Play: Excution of playbook.
* Handler: Task which is called only if a notifier is present.
* Notofier: Section attribute to a task which calls a handler if the output is changed.
* Playbooks: It consists code in YAML format, which describes tasks to be executed.
* HOst : Nodes, which are automated by ansible.

# Ad-Hoc Commands :
Ad-hoc commands used to achieve quick operations and we generally do not use Ad-Hoc commands for Configuration management and Deployments.

## Modules : 
* Modules are discrete units of code that can be used from the command line or in a playbook task. Ansible executes each module, usually on the remote managed node, and collects return values.
* You can execute modules from the command line.
* We can find the inventory file at >> /etc/ansible/hosts where ansible modules are stored.

*Example of Modules :*

```yaml
ansible demo -b -m yum -a "pkg=httpd state=present"  
# demo is group name
# -b stands for sudo 
# -m stands for module
# yum is the module 
```