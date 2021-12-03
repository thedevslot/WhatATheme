#!/bin/bash

#read my inputs

read comments
git add .
git commit -m "$comments"
git push

