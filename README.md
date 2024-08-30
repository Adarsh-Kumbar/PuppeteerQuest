# PuppeteerQuest: Automating HackerRank with Puppeteer

PuppeteerQuest is an automation tool designed to streamline the process of solving coding challenges on HackerRank. Utilizing Puppeteer, a powerful headless browser library, this project automates the interaction with HackerRank's web interface, handling login, challenge navigation, and solution submission seamlessly.

https://github.com/user-attachments/assets/3c1b8215-0494-4684-b279-0561d13f9faf



## Features
- Automated Login: Securely logs into HackerRank using predefined credentials.
- Challenge Navigation: Automatically navigates to specific coding challenges or sections based on user input.
- Code Submission: Inputs and submits code solutions to HackerRank challenges, with support for copying code from external sources.
- Error Handling: Robust error handling for common issues such as selector timeouts or navigation problems.
- Headless and Full Browser Modes: Configurable to run in headless mode for efficiency or full browser mode for debugging.

## Technologies Used
- Puppeteer: For automating browser interactions and manipulating web pages.
- JavaScript: The primary programming language used for scripting the automation.
- Node.js: The runtime environment for executing the automation scripts.
- HTML & CSS: For understanding and interacting with the structure of HackerRank's web pages.

## How It Works
- Initialization: Launches a Puppeteer browser instance, either in headless or full mode.
- Login Process: Uses Puppeteer to navigate to the HackerRank login page and enter user credentials.
- Challenge Navigation: Automatically navigates to a specified challenge or section based on the script's instructions.
- Code Submission: Retrieves code from an external source and inputs it into the HackerRank editor, then submits the solution.
- Error Handling: Monitors for errors during automation and handles them gracefully.
