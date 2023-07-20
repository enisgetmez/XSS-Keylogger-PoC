# XSS-Keylogger-PoC
This repository contains a Proof of Concept (PoC) application for Cross-Site Scripting (XSS) vulnerability, demonstrating a simple XSS Keylogger server built with Flask and Socket.IO. 

**Description**
This project aims to demonstrate a Proof of Concept (PoC) application for Cross-Site Scripting (XSS) vulnerability by creating a simple XSS Keylogger server using Flask and Socket.IO. Please use this project responsibly and only for ethical hacking testing or educational purposes.

**Installation**
Clone the repository to a local folder:
```bash
git clone https://github.com/enisgetmez/XSS-Keylogger-PoC.git
cd XSS-Keylogger-PoC/
```
Install the required Python packages:
```bash
pip install -r requirements.txt
```
**Usage**
1. Open [http://localhost:5000](http://localhost:5000) in your browser to view the interface.
2. Enter the ngrok address (or any other URL) of the site you want to target for the XSS attack in the "Enter Server URL" box and click the "Get Payload" button.
3. The generated XSS payload will appear in the "Generated Payload" box. You can use this payload to perform an XSS attack on the target site.

**Contribution**

Contributions to enhance the tool or report issues are welcomed. Please feel free to submit pull requests or create issues.
