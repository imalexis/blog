---
slug: aws-service
title: aws 
tags: [cloud]
---

- Amazon S3 can be used to store and retrieve any type of data. By default all Amazon S3 resources are private. Only the resource owner can optionally grant access permissions to others by writting an access policy.

- Amazon EC2 uses public key cryptography to encrypt and decript login information. Public key cruptography uses a public key to encrypt a piece of data, and then the recipient uses their private key to decrypt the data. The public and private keys are known as a key pair.

A virtual private cloud (VPC) is a virtusl network dedicated to an AWS account. While a VPC resides in an AWS Region, a subnet must reside within a single Availability Zone.

- ### Change the Amazon EC2 instance type:
We must stop your Amazon EBS-backed **instance** before we can change its instance type. Plan for downtime while our instance is stopped. Stopping the instance and changing its instance type might take a variable amount of time depending on our application's startup scripts.