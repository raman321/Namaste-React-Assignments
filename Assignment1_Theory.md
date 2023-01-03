# Namaste-React-Assignments

**(Q1) What is Emmet ?**

**Ans:-** Emmet (formerly known as Zen Code) is basically code editor plug-in or we can say it as shorthand, with it one can easily write a lot of code quickly. It dramatically speeds up your   HTML & CSS workflow.

For instance **div#hero.wrapper** can also be written below using emmet as

           <div id="hero" class="wrapper"></div>

**(Q2) Difference between a Library and Framework?**

**Ans:- **  The difference lies between inversion of control, which provide what.

           **Library**

           We can simply say library consists of set of functions and that being used repeatedly which are written by us, those functions are controlled by us. So,When we use libarary, we control the flow of our code.
           
           **Framework**

           Where as framework consists of lot of libraries, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.

**(Q3) What is CDN? Why do we use it?**

**Ans:-** A content delivery network(CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of internet content. It is used because it allows quick transfer of assests needed for loading internet content including HTML pages, javascript files, stulesheets, images, and videos.

![cdn_working snapshot](https://user-images.githubusercontent.com/32253692/210316106-f03f12bb-8056-4536-b911-91cca427c60d.PNG)


**(Q4) Why is React known as React?**

Ans:- React is named React because of its ability to react to changes in data. As it was developed for applications (like Facebook) that have constantly behaviour of changing data. The name "React" was chosen by facebook developers because this JS library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

**(Q5) What is crossorigin in script tag?**

Ans:- In web development field, web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request that checks whether it is safe to allow for sharing resources (e.g. style sheets, iframes, images, fonts, or scripts) from another domains. The **crossorigin** attribute sets the mode of the request to an HTTP CORS Request. 

Its declarative syntax is like:  <script crossorigin="anonymous|use-credentials">
           
           
**(Q6) What is diference between React and ReactDOM ?**

Ans:- In order to work with React in the browsers, we need to include 2 libraries: React and ReactDOM. React is a JS library for building User Interfaces whereas ReactDOM is also a JavaScript library that allows React to interact with the DOM. The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. We can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render() which is responsible for actually render UI and to manipulate the DOM structure and objects in the browser, and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().
           
**(Q7) What is difference between react.development.js and react.production.js files via CDN?**
 
Ans:- react.development.js is a larger not minimised version of React that is usually used to build the apps during development phase. react.production.js is smaller minimised version of React used during production phase to minimise the import time in live React webApps. Which is why Development build is several times (maybe 3-5x) slower than the production build.
    
React and ReactDOM CDN Syntax for both development and production phase are below
           
Dev Phase -   <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
              <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>    
     
Prod Phase -  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
              <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
           
**(Q8) What is async and defer?**
           
Ans:- The key difference between these two are like , async executes the script by halting the html rendering and post script execution, html rendering resumes while defer executes the script code after html rendering is completed. async doesn't follow a particular order of execution while importing the script (wherever dependencies for other scripts are being imported, async should be avoided) but defer maintains the order of the execution of the scripts and hence it is generally used in dependent scripts.

Syntax for both are like :- <script src="demo_async.js" async></script> && <script src="demo_defer.js" defer></script>    
           
           
![aynsc vs defer](https://user-images.githubusercontent.com/32253692/210324669-31fcf791-2e77-4a3d-a9d0-9c8af08b5c84.PNG)
