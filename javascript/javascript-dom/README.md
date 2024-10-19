# JavaScript DOM Practice

#### Click ⭐ if you like it!!
Every contribution counts, regardless of its size. I value and appreciate the efforts of all contributors, from beginners to seasoned developers. Join me on this exciting journey of open-source collaboration. **Together, let's build something amazing!** :handshake:

---

#### Contribution Guidelines

- 👉 Please ensure that your contributions adhere to the coding style and guidelines of this project
- 👉 Include clear and concise commit messages for all your commits
- 👉 Provide a detailed description of your changes in the pull request.
- 👉 Be respectful and considerate towards other contributors.

---

Here’s an extensive list of **JavaScript DOM practice tasks** that you can work on, along with the related HTML structure for each task. You can use the HTML templates provided as a base for each task.


# Table of Contents
1. [Basic DOM Practice Tasks | Set of 1-20](#basic-dom-practice-tasks)
2. [Intermediate Level DOM Practice Tasks | Set of 21-40](#intermediate-dom-practice-tasks)
3. [Advance Level DOM Practice Tasks | Set of 21-40](#advance-dom-practice-tasks)



**[🔝 Scroll to Top](#javascript-dom-practice)**

## Basic DOM Practice Tasks
### Task 1: Change the background color of the entire page
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="changeColorBtn">Change Background Color</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to change the background color of the page when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 2: Hide and show an element
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text">Hello! Click the button to hide me.</p>
    <button id="toggleBtn">Hide</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to hide and show the paragraph text when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 3: Change text content of a paragraph
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text">Original Text</p>
    <button id="changeTextBtn">Change Text</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Change the text content of the paragraph when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 4: Change image source
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <img id="myImage" src="img1.jpg" alt="Image 1">
    <button id="changeImageBtn">Change Image</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to change the image source when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 5: Add an item to a list
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="myList">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <button id="addItemBtn">Add Item</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Add a new list item to the unordered list when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 6: Remove an item from a list
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="myList">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <button id="removeItemBtn">Remove Last Item</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Remove the last list item from the unordered list when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 7: Change the font size of a paragraph
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text">Change my font size!</p>
    <button id="increaseFontBtn">Increase Font Size</button>
    <button id="decreaseFontBtn">Decrease Font Size</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Increase or decrease the font size of the paragraph when the buttons are clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 8: Change text color of multiple elements
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p class="text">Paragraph 1</p>
    <p class="text">Paragraph 2</p>
    <button id="changeColorBtn">Change Text Color</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Change the text color of all paragraphs with the class `text` when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 9: Add a class to an element
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text">I need a class!</p>
    <button id="addClassBtn">Add Class</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Add a CSS class to the paragraph when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 10: Create a button dynamically and append it to the body
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="createBtn">Create Button</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to dynamically create a new button element and append it to the body when the existing button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 11: Remove a class from an element
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text" class="highlight">I have a class!</p>
    <button id="removeClassBtn">Remove Class</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to remove the `highlight` class from the paragraph when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 12: Add multiple elements dynamically
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="addItemsBtn">Add Items</button>
    <ul id="itemList"></ul>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Add multiple list items to the unordered list dynamically when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 13: Toggle between two CSS classes
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text" class="style1">Toggle my style!</p>
    <button id="toggleClassBtn">Toggle Class</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to toggle between two CSS classes on the paragraph when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 14: Validate a form input field
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <form id="myForm">
      <label for="username">Username:</label>
      <input type="text" id="username">
      <button id="validateBtn">Validate</button>
    </form>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to validate that the input field is not empty when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 15: Display an alert with the value of a text input
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="inputField" placeholder="Enter text">
    <button id="alertBtn">Show Alert</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Display an alert showing the value entered in the input field when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 16: Create a dropdown menu dynamically
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="createDropdownBtn">Create Dropdown</button>
    <select id="myDropdown"></select>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Create a dropdown menu dynamically and add options when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 17: Change CSS style of an element on hover
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="hoverText">Hover over me to change my style!</p>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to change the CSS of the paragraph when it is hovered over.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 18: Add and remove elements from an array using buttons
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="addItemBtn">Add Item</button>
    <button id="removeItemBtn">Remove Item</button>
    <ul id="myList"></ul>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to add and remove items from an array, and display the array items in the list.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 19: Append HTML elements inside a div container
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="appendHtmlBtn">Append HTML</button>
    <div id="container"></div>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to append new HTML content inside the `container` div when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 20: Highlight selected list item
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="myList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to highlight the clicked list item by changing its background color.

---
## Intermediate DOM Practice Tasks

Here are **more DOM manipulation tasks** to enhance your JavaScript skills:

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 21: Disable and enable a button
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="toggleBtn">Disable Button</button>
    <button id="actionBtn">Action</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to toggle between disabling and enabling the second button when the first button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 22: Count the number of clicks on a button
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="countBtn">Click me</button>
    <p id="clickCount">Click count: 0</p>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Display the number of times the button has been clicked in the paragraph.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 23: Filter list items based on user input
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="filterInput" placeholder="Search list">
    <ul id="myList">
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
      <li>Date</li>
    </ul>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Filter the list items dynamically as the user types into the input field.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 24: Update a progress bar based on user input
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <input type="range" id="progressInput" min="0" max="100">
    <progress id="progressBar" value="0" max="100"></progress>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to update the progress bar as the user moves the slider.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 25: Move an element on the screen with arrow keys
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="box" style="width:50px; height:50px; background-color:blue; position:absolute; top:50px; left:50px;"></div>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to move the box using the arrow keys on the keyboard.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 26: Display the current date and time
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="dateTime">Current Date and Time: </p>
    <button id="updateBtn">Update</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Display the current date and time when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 27: Change the text alignment of paragraphs
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text">Align me using buttons!</p>
    <button id="leftBtn">Left</button>
    <button id="centerBtn">Center</button>
    <button id="rightBtn">Right</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to align the paragraph text to the left, center, or right when the respective buttons are clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 28: Display the value of a selected option
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <select id="mySelect">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
    <button id="displayValueBtn">Display Value</button>
    <p id="display"></p>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to display the currently selected option when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 29: Change the placeholder text of an input field
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="myInput" placeholder="Old Placeholder">
    <button id="changePlaceholderBtn">Change Placeholder</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Change the placeholder text of the input field when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 30: Convert form input values to uppercase
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="inputText" placeholder="Enter text">
    <button id="convertBtn">Convert to Uppercase</button>
    <p id="outputText"></p>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to convert the input text to uppercase and display it in the paragraph when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 31: Create a countdown timer
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="timer">Countdown: 10</p>
    <button id="startTimerBtn">Start Timer</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to start a countdown from 10 to 0 when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 32: Display a message after a delay
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="message"></p>
    <button id="showMessageBtn">Show Message After 3 Seconds</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to display a message in the paragraph 3 seconds after the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 33: Toggle between images
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <img id="myImage" src="image1.jpg" alt="Image 1">
    <button id="toggleImageBtn">Toggle Image</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to toggle between two images when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 34: Sort an array of numbers and display them
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="sortArrayBtn">Sort Numbers</button>
    <p id="sortedArray"></p>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to sort an array of numbers and display the sorted array when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 35: Display the length of an input string
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="textInput" placeholder="Enter text">
    <button id="lengthBtn">Display Length</button>
    <p id="lengthDisplay"></p>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to display the length of the text entered in the input field when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 36: Highlight all input fields when a button is clicked
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" placeholder="Field 1">
    <input type="text" placeholder="Field 2">
    <button id="highlightFieldsBtn">Highlight Fields</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to highlight all input fields by changing their border color when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 37: Count the number of list items
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="myList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <button id="countItemsBtn">Count Items</button>
    <p id="itemCount"></p>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to count and display the number of items in the unordered list.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 38: Change the value of an input field
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="myInput" value="Original Value">
    <button id="changeValueBtn">Change Value</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to change the value of the input field when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 39: Create a dynamic table
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="createTableBtn">Create Table</button>
    <table id="myTable" border="1"></table>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to

 dynamically create a table with rows and cells when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 40: Toggle visibility of an element with fade effect
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="fadeText">I will fade in and out!</p>
    <button id="fadeBtn">Toggle Fade</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to toggle the visibility of the paragraph with a fade-in and fade-out effect when the button is clicked.

---


## Advance DOM Practice Tasks
Here is the continuation of the DOM manipulation tasks starting from **Task 41**:

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 41: Modify the style of the paragraph text using JavaScript
**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JS DOM Paragraph Style</title>
  </head>
  <body>
    <p id="text">JavaScript Exercises - w3resource</p>
    <button id="jsstyle" onclick="js_style()">Style</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to change the font, font size, and color of the paragraph when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 42: Get the values of first and last name from a form
**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Return First and Last Name from a Form</title>
  </head>
  <body>
    <form id="form1" onsubmit="getFormvalue()">
      First name: <input type="text" name="fname" value="David"><br>
      Last name: <input type="text" name="lname" value="Beckham"><br>
      <input type="submit" value="Submit">
    </form>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to get and display the first and last names when the form is submitted.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 43: Set paragraph background color
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="myText">Change my background color</p>
    <button id="bgColorBtn">Change Background Color</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to change the background color of the paragraph when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 44: Get the attributes of a link
**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <p>
      <a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a>
    </p>
    <button onclick="getAttributes()">Click here to get attributes value</button>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to get the `href`, `hreflang`, `rel`, `target`, and `type` attributes of the specified link and display them.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 45: Add rows to a table
**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Insert Row in a Table</title>
  </head>
  <body>
    <table id="sampleTable" border="1">
      <tr><td>Row1 cell1</td><td>Row1 cell2</td></tr>
      <tr><td>Row2 cell1</td><td>Row2 cell2</td></tr>
    </table>
    <br>
    <input type="button" onclick="insert_Row()" value="Insert row">
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to insert a new row into the table when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 46: Update a table cell's content
**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Change the Content of a Cell</title>
  </head>
  <body>
    <table id="myTable" border="1">
      <tr><td>Row1 cell1</td><td>Row1 cell2</td></tr>
      <tr><td>Row2 cell1</td><td>Row2 cell2</td></tr>
      <tr><td>Row3 cell1</td><td>Row3 cell2</td></tr>
    </table>
    <form>
      <input type="button" onclick="changeContent()" value="Change content">
    </form>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to change the content of a specified cell in the table.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 47: Create a table and populate cells with row-column numbers
**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Create a Table</title>
  </head>
  <body>
    <table id="myTable" border="1"></table>
    <input type="button" onclick="createTable()" value="Create the table">
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to create a table with specified rows and columns and populate each cell with its row-column index (e.g., Row-0 Column-0).

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 48: Remove items from a drop-down list
**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Remove Items from a Dropdown List</title>
  </head>
  <body>
    <form>
      <select id="colorSelect">
        <option>Red</option>
        <option>Green</option>
        <option>White</option>
        <option>Black</option>
      </select>
      <input type="button" onclick="removeColor()" value="Remove Color">
    </form>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to remove the selected item from the drop-down list.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 49: Count and display drop-down list items in an alert
**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Count and Display Dropdown Items</title>
  </head>
  <body>
    <form>
      Select your favorite color:
      <select id="mySelect">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
        <option>White</option>
      </select>
      <input type="button" onclick="countItems()" value="Count and Display Items">
    </form>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to count and display the number of options in the drop-down list when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 50: Calculate the volume of a sphere
**HTML:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Sphere Volume Calculator</title>
  </head>
  <body>
    <p>Enter the radius:</p>
    <input type="number" id="radius" value="0">
    <button onclick="calculateVolume()">Calculate Volume</button>
    <p id="volume"></p>
    <script src="script.js"></script>
  </body>
</html>
```


**Task:** Write JavaScript to calculate the volume of a sphere when the user enters the radius and clicks the button.
#### Sample Output of the form :
![task 50 output](https://i.ibb.co/nQNhL7v/volume-sphere-html-form.png)

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 51: Display a random image from a list
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="randomImageBtn">Show Random Image</button>
    <div id="imageContainer"></div>
    <script src="script.js"></script>
  </body>
</html>
```
```javascript
    [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }]
```
**Task:** Write JavaScript to display a random image from a list when the button is clicked.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 52: Highlight bold words in a paragraph on hover
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <a href="#" id="hoverLink">Hover here to highlight bold words</a>
    <p id="text">This is a <b>bold</b> word and another <b>bold</b> word.</p>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to highlight all bold words in the paragraph when the link is hovered over.

**[🔝 Scroll to Top](#javascript-dom-practice)**


### Task 53: Get the window's width and height when resized
**HTML:**
```html
<!DOCTYPE html>
<html>
  <body>
    <p id="dimensions">Resize the window to see the dimensions.</p>
    <script src="script.js"></script>
  </body>
</html>
```
**Task:** Write JavaScript to display the window's current width and height, updating dynamically when the window is resized.

---
