# XSS-Keylogger-PoC

This repository contains a Proof of Concept (PoC) application for Cross-Site Scripting (XSS) vulnerability, demonstrating a simple XSS Keylogger server built with Flask and Socket.IO. 

**Description**

This project aims to demonstrate a Proof of Concept (PoC) application for Cross-Site Scripting (XSS) vulnerability by creating a simple XSS Keylogger server using Flask and Socket.IO. Please use this project responsibly and only for ethical hacking testing or educational purposes.

**Requirements**

Flask

Flask-SocketIO

Ngrok: To expose the local server to the internet, you need Ngrok. Download and install Ngrok from the official website: https://ngrok.com/download

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

1. Generate a public URL for the server using Ngrok:
```bash
ngrok http 5000
```
After running Ngrok, obtain the public URL (e.g., https://xxxxx.ngrok.io).
2. Start the XSS Keylogger server:
```bash
python server.py
```
3. Open http://localhost:5000 in your browser to view the interface.
4. Enter the public URL obtained from Ngrok into the "Enter Server URL" box and click the "Get Payload" button.
5. The generated XSS payload will appear in the "Generated Payload" box. You can use this payload to perform an XSS attack on the target site.
**Contribution**

Contributions to enhance the tool or report issues are welcomed. Please feel free to submit pull requests or create issues.
