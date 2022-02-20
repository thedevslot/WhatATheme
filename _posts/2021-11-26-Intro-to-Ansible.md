---
title: Ansible
layout: post
post-image: "/assets/images/external-content.duckduckgo.com.jpeg"
description: A Basic Introduction to Ansible
tags:
- DevOps
- Ansible
---

# Hello Ansible
Ansible is an open source  IT Configuration managemrnt, Deployment and Orchestration tool.

# History :
Ansible was developed by Michael Dehan and then acquired by Redhat in 2015. It runs on many Unix-like systems, and can configure both Unix-like systems as well as Microsoft Windows. 
# ADvantages :
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
