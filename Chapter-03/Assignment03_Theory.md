                                                **Chapter-03 theory_assignments_answers - Namaste React **                                                                         


**(Q1) What is `JSX`?**

**Ans:-** JSX is a **JavaScript Extension Syntax** used in React to easily write HTML and JavaScript together. It makes easier to write fanciful way of  html like syntax inside javscript. It would be wrong to say that it's way of writing exactly html inside JS. Overall JSX converts HTML tags into react elements.

**Ex-1 without using JSX:**
      const myElement = React.createElement('h2', {}, 'I do not know JSX!');
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(myElement);
      

**Ex-2 with using JSX:**

      const myElement = <h2>Introducing JSX!</h2>;
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(myElement);
      
**At the end of day, JSX code is converted into React.createElement(which is an object) and that further gets converted into HTML DOM elements.**

**(Q2) Superpowers of `JSX`.**

**Ans:- **  Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single . jsx file.
It improves user readabilty and very esay to maintain and debug the code.

**For Instance**

      function greeting(user) {
      //warning: JSX in next line...
        return <h1>{user}, How are you!!!</h1>;
      }
      
**(Q3) Role of type `attribute` in script tag? What options can I use there?  **

**Ans:- **  The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.

**type attribute can be of the following types:**

          -text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
**Syntax**
          <script type="text/javascript"></script>
          
  **-text/ecmascript :** this value indicates that the script is following the EcmaScript standards.
  
  **-module:** This value tells the browser that the script is a module that can import or export other files or modules inside it.
  
  **-text/babel :** This value indicates that the script is a babel type and required bable to transpile it.
  
  **-text/typescript:** As the name suggest the script is written in TypeScript.
      
**(Q4) `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.**

**Ans:- ** The difference is illustrated below as 


**{TitleComponent}:** This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.

**<TitleComponent/> :** This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.

<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

    **For Instance**

    <TitleComponent>
        <FirstChildComponent />
        <SecondChildComponent />
        <ThirdChildComponent />
    </TitleComponent>





      
