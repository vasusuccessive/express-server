# 5 features of VS Code

1. **Live Unit testing**: As we're developing an application, Live Unit Testing automatically runs any impacted unit tests in the background and presents the results and code coverage in real time. As we modify our code, Live Unit Testing provides feedback on how our changes impacted existing tests and whether the new code we've added is covered by one or more existing tests. This gently reminds us to write unit tests as we're making bug fixes or adding new features.
    * **Configure**: Configure Live Unit Testing by selecting **Tools > Options** from the top-level Visual Studio menu bar, and then selecting Live Unit Testing in the left pane of the Options dialog.



2. **Find and Replace**: VS Code allows us to quickly find text and replace in the currently opened file. Press **Ctrl+F** to open the Find Widget in the editor, search results will be highlighted in the editor, overview ruler and minimap.
If there are more than one matched result in the current opened file, you can press Enter and **Shift+Enter** to navigate to next or previous result when the find input box is focused.

3. **Search across files**: VS Code allows us to quickly search over all files in the currently opened folder. Press **Ctrl+Shift+F** and enter your search term. Search results are grouped into files containing the search term, with an indication of the hits in each file and its location. Expand a file to see a preview of all of the hits within that file. Then single-click on one of the hits to view it in the editor.
    * We can configure advanced search options by clicking the ellipsis (Toggle Search Details) below the search box on the right (or press Ctrl+Shift+J). This will show additional fields to configure the search.

4. **Search and replace**: We can also Search and Replace across files. Expand the Search widget to display the Replace text box.When you type text into the Replace text box, you will see a diff display of the pending changes. You can replace across all files from the Replace text box, replace all in one file or replace a single change.

5. **Debugging**: The built in debugger helps us accelerate editing, compiling, and debugging by adding breakpoints and watchers. By default it comes with support for NodeJS and can debug anything that is transpiled to JavaScript.

# 8 Useful plugin for VS Code

1. **GitLens**: When we are working in a team, there are other developers as well and you want to know, who was on any particular line of code in a recent while and who made these changes, If you want to know such things. Gitlens can help us out while informing, who were own in this piece of code and what was the PR actually introduced the changes. It is a very good plugin to help us out in our day-to-day development.
* **Here are just some of the features that GitLens provides.**
    * on-demand file annotations in the editor gutter, including.
    * blame — shows the commit and author who last modified each line of a file
    * changes — highlights any local (unpublished) changes or lines changed by the most recent commit
    * heatmap — shows how recently lines were changed, relative to all the other changes in the file and to now (hot vs. cold)

* **Many rich Side Bar views**
    * Commits view to visualize, explore, and manage Git commits
    * Repositories view to visualize, explore, and manage Git repositories
    * File History view to visualize, navigate, and explore the revision history of the current file or just the selected lines of the current file
    * Line History view to visualize, navigate, and explore the revision history of the selected lines of the current file
    * Branches view to visualize, explore, and manage Git branches
    * Remotes view to visualize, explore, and manage Git remotes and remote branches
    * Stashes view to visualize, explore, and manage Git stashes
    * Tags view to visualize, explore, and manage Git tags
    * Contributors view to visualize, navigate, and explore contributors
    * Search & Compare view to search and explore commit histories by message, author, files, id, etc, or visualize comparisons between branches, tags, commits, and more.

2. **REST Client**: If you are developing Web applications, then you have to deal with REST. I usually used tools like Postman, SOAP UI as a REST client until I found this VS Code extension. With this simple yet powerful extension, it is very easy to REST request, It also supports sending cURL commands. In this way, this extension helped me to focus on using only the VS Code and reduced switching to other tools like Postman.

* **Main Features**
    * Main Features Send/Cancel/Rerun HTTP request in editor and view response in a separate pane with syntax highlight.
    * Send cURL command in editor and copy HTTP request as cURL command
    * Auto save and view/clear request history
    * Organize MULTIPLE requests in the same file (separated by ### delimiter)
    * View image response directly in pane
    Save raw response and response body only to local disk.
    * Preview response with expected parts(headers only, body only, full response and both request and response)
    * **Authentication support for:**
    * Basic Auth
    * SSL Client Certificates
    * **Environments and custom/system variables support**
    * Use variables in any place of request(URL, Headers, Body).
    * Support both environment, file and request custom variables.
    * Auto completion and hover support for both environment, file and request custom variables.
    * Generate code snippets for HTTP request in language like JavaScript and more.
    * Remember Cookies for subsequent requests.

3. **JavaScript (ES6) code snippets**: Many times you have to type the same Code again and again. Fortunately, VS Code comes with a solution in the form of Code snippets. Code snippets help dramatically reduce typing the same Code and instead give time to focus on the real Code.
JavaScript (ES6) code snippets offer code snippets for ES6 syntax.

* **Example**
    * clg→	console log console.log(object)
    * imp→	imports entire module import fs from 'fs'; .
    * env→	exports name variable export const nameVariable = localVariable; .
    * con→	adds default constructor in the class constructor() {} .

4. **ESLint**: ESLint is a Static Code Analyzer that Analyzes and quickly find problems in our Code. Rules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues. As a bonus, ESLint can also fix the problems. This extension seamlessly integrates with the VS Code.

5. **Code Spell Checker**: “Code Spell Checker” is a convenient extension both for Native and non-Native English speakers. With this extension, we will get a warning when there is a Spelling mistake.

6. **Paste JSON as Code**: In Web development, we usually have to deal with API. Whether we develop a Client or Server, we often will get a JSON data structure and need to develop the Class from that JSON data. With “Paste JSON as Code”, we can easily generate JavaScript class from the JSON data Structure. Thus you can spare the manual and tedious generation of Code from the JSON data. This extension offers Code Generation for JavaScript, and almost in all popular programming languages.

7. **Path Intellisence**: If we work on backend development, then we have to deal with the files. Usually, another context switching task during file operation is to visit the actual file path, copy it, and paste it in VSCode. The extension “Path intesllisence” can help us by autocompleting file paths when we type.

8. **Live Server**: when we change our code, we need to refresh our browser to see the effect of our changes. The “Live Server” extension can help us immensely by automatically refresh our browser when something is changed. Thus it can both gives us fun in development and boost productivity. Live Server is another gem of Extensions and must-have for Web Developers.



