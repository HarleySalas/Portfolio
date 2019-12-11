---
layout: portfolio-item
title: DVIMS
date: 2019-12-07T12:45:39.485Z
order: 3
thumbnail: /img/dvims-mockup.jpg
livesite-bool: false
livesite: "http://google.com/"
tech-stack:
  - Node.js
  - Express
  - Mustache
  - PostgreSQL
  - JavaScript
  - SCSS
repo-bool: false
repo: "http://google.com/"
description: >-
  This project was built for Diamond Vapor's E-liquid manufacturing facility.
  Hundreds of food flavorings being used in different products caused a huge
  headache for inventory management. DVIMS (Diamond Vapor Inventory Management
  System) was designed to allow employees to easily and accurately track their
  stock and notify management as to when things need to be ordered, avoiding
  hiccups in the manufacturing process.
---

While working for Diamond Vapor in Hollywood, FL, I was given the task of creating a solution for their inventory problem.

The minimum viable product was to be finished quickly and with this requirement, visual design was not a focus at all.

This was my first Node.js project and before beginning this project, I had never written a line of backend JavaScript, nor had I done much with frontend JavaScript. I highlight these points because, I believe it shows my ability to learn quickly and provide results. The minimum viable product was finished in 10 days and ongoing development consisted mostly of only new features.

### The Solution

With hundreds of 1 gallon jugs of flavoring and everything being used during the manufacturing process in very unpredictable rates, it was nearly impossible for employees to indicate what needed to be ordered and to have it arrive on time before needing it. It was a near weekly occurrence of halting orders to await for flavorings to be delivered.

To solve this problem, I created an SQL database, containing each product, their minimum stock requirement before more needed to be ordered, SKU, assigned storage locations, other data and current stock.

The next concern was that they are an extremely busy facility. Employees don't have time to run to the computer every time they use inventory, nor do they have time to go to the website and manually search for the product in question. The solution for that was to create a QR code system. The usage of that system was that when products were delivered, we had an automatically generated database of QR codes associated to each product that could be rapidly printed on a label machine and stuck on to each product. Then, employees could simply scan the QR code on the product when they went to use it and press 2 buttons to indicate that the product had been used. This created a seamless implementation, only taking seconds out of their day to accurately track each product's stock level.

Within the desktop based admin dashboard, they would receive notifications each time a product fell below it's minimum quantity of stock required. With a bit of experimentation, this quickly changed ordering from frantic rush orders, sometimes multiple times a week to simply checking the low stock notifications once a week, placing an order and patiently waiting for those products to arrive, and never delaying production.

### Technical aspects

The backend consisted of Node.js, with express, using Mustache to server side render the pages. PostgreSQL was used to store all of the data. The project contained session based authentication, admin/manager roles and employee roles. I went a bit overkill with deployment and for my first backend project, there were definitely easier alternatives. It was extremely fulfilling though, as I configured a Digital Ocean droplet with CentOS to pull updates from Github, setup pm2 monitoring, NGINX, and automatic Postgres backups from scratch.

### Past Version 1

Everything mentioned above was completed for the first version of the project. Going forward, usability was improved, adjustments more advanced stock ordering features were implemented, the ability to track product usage over time, and tools for being used during the manufacturing process.
