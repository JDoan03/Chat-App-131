# Chat-App-131
## Header
- Release Notes
- Alt - F4
- Dat Mai, Jackson Martin, Jason Yu, Joseph Doan, Miguel Lopez, Niketa Kosyuk
- Chat-App-131
- May 17, 2022
## Overview
We are building a chat app to allow students to communicate with their teacher. The teacher wants to restrict certain student’s capabilities within the app to ensure the app is for school purposes. We have been requested by our client to a chat application that is better fitted for her needs.
## Purpose
The current chat application platform that our client uses are not user friendly and/or have their limitations on what they are capabable of. Our teacher wants a single page application to enable teacher to student real-time messaging during remote instruction.
## Customer/Client
Our client is a fifth grade teacher that currently uses other chat platforms to assist during remote instruction.
## Feature Summary (list and describe each feature)
- Functional Chat: Users will be able to chat to one another in real time locally. 
- Teacher View: Standard view of our application. Teacher users will have access to all of
    the features that app has to offer.
- Student View: Very minimal view without features like searching for students and creating
    breakout rooms.
- Breakout Chats: Teacher users will be able to create breakout rooms (group chats) containing
    other teachers or students.
- Search Users: Teacher users will be able to search for other users. Student users do not have
    access to this feature.
- Log in/log out functionality: Users will be able to log in and log out of the application.
- Account Validation: Account creation is validated and checked that its user name and password
    is unique.
- Account Creation: Users will be able to create their own teacher/student accounts.
    Teacher accounts have access to create student accounts for their class that the students
    can then log into.
- Emoji Support: Emoji's can be sent within our chat, however, a emoji interface has not been
    implemented.
## Issue Summary (list and describe all issues)
- Log in refresh bug: Loggin in causes either an error, or being logged into the last account.
    Steps to Reproduced: Logging out then loggin into another account causes the bug.
    End-User Impact: User needs to refresh their application to remove the bug. Functionality
        not impacted.
## Installation
NPM is needed for installation.
1. You can start installation by typing into your command prompt `git clone https://github.com/JDoan03/Chat-App-131.git`
2. You can install all needed npm packages by running the command `npm install`. This will install all needed dependencies.
## Resources
- Chakara UI Website `https://chakra-ui.com/`
- MERN Stack Explained `https://www.mongodb.com/mern-stack`
## Disclaimers
- N/A
## Contact
- Scrum Master Niketa Kosyuk: nkosyuk@csus.edu