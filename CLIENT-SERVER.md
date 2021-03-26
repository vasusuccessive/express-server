# How web works

**The web is everywhere!**

* We use it more than we ever did before - also in many places where we might not see it. Because **the web** is more than just websites we visit by entering a URL in our browser.

* No matter if we check our e-mails on our mobile phone or if we’re sending a tweet - we are using the internet (i.e. **the web**).

**Clients and servers**: Computers connected to the web are called clients and servers. 

* Clients are the typical web user's internet-connected devices (for example, your computer connected to your Wi-Fi, or your phone connected to your mobile network) and web-accessing software available on those devices (usually a web browser like Firefox or Chrome).

* Servers are computers that store webpages, sites, or apps. When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.

* In addition to the client and the server, we also need to know about these:

    * **Our internet connection**: Internet connection allows us to send and receive data on the web.

    * **TCP/IP**: Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the internet.

    * **DNS**: Domain Name Servers are like an address book for websites. When we type a web address in our browser, the browser looks at the DNS to find the website's real address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place.

    * **HTTP**: Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.

## **So what happens, exactly? How a request gets served.**

When we type a web address into our browser:
1. The browser goes to the DNS server, and finds the real address of the server that the website lives on.

2. The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client. This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.

3. If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course we can look at that website! and then starts sending the website's files to the browser as a series of small chunks called data packets.

4. The browser assembles the small chunks into a complete web page and displays it to us.

