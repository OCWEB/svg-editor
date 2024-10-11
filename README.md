
# SVG Editor

This documentation assumes that you are already familiar with the basics of HTML, CSS, Javascript and ReactJS. If not, jump to the bottom and read the recommended resources.


## Install and development

The editor is built with [ReactJS](https://reactjs.org/) and [FabricJS](http://fabricjs.com/). I used [Create React App](https://create-react-app.dev) as the base to speed up the development process. It handles all build tools for you in the background, so you can focus on the coding. Here are a few benefits:

- built-in webserver
- processes and compiles your [SASS (SCSS)](https://sass-lang.com/) and [Babel JS](https://babeljs.io/) files
- gives you useful error messages instantly
- runs in the background and when you save something in the code, it automatically compiles the changed files and refreshes your browser
- builds minified CSS and uglified JS code for the production version

Before we begin, make sure you have the following developer tools installed:

- a code editor, e.g.: [Sublime Text](https://www.sublimetext.com/)
- a command line tool (terminal), e.g.: [ConEmu for Windows](https://conemu.github.io/)
- [Node.js](https://nodejs.org/en/), a Javascript runtime environment and package manager

Extract your downloaded the ZIP file from CodeCanyon, open your terminal and navigate into the **svg-editor** folder. Run the following command to install the required packages for development: `npm install`

Once it's finished, run: `npm start`. Now your default browser should open and the editor should appear at [http://localhost:3000](http://localhost:3000). That's it!


## Files and folders

All files are named nicely, so you can instantly know what they contain. Furthermore, the code is commented as well.

| Folder/file | Description |
|--|--|
|/svg-editor | |
| &ensp; /node_modules | Basic and required Javascript libraries. |
| &ensp; /public | The application's root directory. This is where the compiled files will be placed from **src** folder and this is what the browser loads while you're developing. |
| &ensp; /src | The source files. |
| &ensp;&ensp;   /components | Reusable React components and their stylings, e.g.: button, toolbar, toolbar panel, selection settings, etc. |
| &ensp;&ensp; /icons | Editor icons. |
| &ensp;&ensp; /images | Editor images. |
| &ensp;&ensp; /languages | JSON files for translation. |
| &ensp;&ensp; /shapes | Basic shapes in SVG. |
| &ensp;&ensp; /utils | Utilities, helpers, e.g.: logic to handle path drawing, zoom, demo content, font preloading, etc. |
| &ensp;&ensp; App.js | This is where you keep the states and put the components together. |
| &ensp;&ensp; index.js | The JavaScript entry point. |
| &ensp;&ensp; index.scss | Editor specific stylings. |
| &ensp; .editorconfig | [EditorConfig](https://editorconfig.org/), helps to maintain a consistent coding style. |
| &ensp; .gitattributes | Path-specific settings for Git. |
| &ensp; .gitignore | List of folders and files which shouldn't be uploaded to Git. |
| &ensp; package-lock.json | It guarantees the exact same version of every package. |
| &ensp; package.json | It holds data about the project's dependencies, scripts, version and more. |
| &ensp; readme.md | Documentation in MarkDown format. |


## How to deploy

If the editor is not going into the root folder on your webserver (e.g.: it will sit at yoursite.com/editor), then open **package.json** file and change the `homepage` setting by entering your subdirectory like this: `"homepage" : "/editor"`.

In your terminal run the following command to create an optimized production build:
`npm run build`. Once it's finished, upload the contents of the **build** folder to your server via FTP.

For more deployment options please check this page: https://create-react-app.dev/docs/deployment/


## How to translate the app
Open **src/languages/en.json** file in a code editor and save a copy with a different name, e.g.: **fr.json**. Translate the right side of the lines, e.g.: `"just a string" : "translate only this"`. Open **src/utils/translation.js** and change the import path to your language file on the top. E.g.:
`import strings from '../languages/fr.json'`


## Frequently Asked Questions

### How to remove demo content?
Open **src/components/FabricCanvas.js** file and comment out or remove the following line towards the end: `demoContent(fabricCanvas, fabric)`.

### How to add this editor to my website?
The easiest way is to follow the instructions in **How to deploy** section, then embed your uploaded editor page into an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) and style it via CSS.

Alternatively, you can build your website around the editor in **public/index.html**.

A more advanced way is to copy the compiled CSS, JS and other assets (**build/static** folder) with the required HTML code (**build/index.html**) and place them in your website.

### How to create a custom toolbar button and settings panel?
First, [find an SVG icon](https://www.flaticon.com/) for your new button and save it into **src/icons/**. Then open **src/App.js** file and import it as a React Component on the top:

`import { ReactComponent as IconNew } from './icons/new-icon.svg';`

Find the line where `<Toolbar` component is rendered (~#238) and add your button inside it like this:
`<Button name="newTool" title={__('Show this on hover')} handleClick={ () => setActiveTool('newTool') }><IconNew /></Button>`

Now let's create the toolbar panel as a component.  Make a new JS file in **src/components/** folder, e.g.: **MyNewSetting.js**, import React, create the component and export it like this:
```
import React from 'react';

const MyNewSetting = ({ canvas }) => {

  return (
    <>
      <p className="title">My New Settings</p>
      <div className="my-new-settings">Your settings go here...</div>
    </>
  )

}

export default MyNewSetting
```
Also create a CSS file and import it in the top if you want to style the component.

Finally, switch back to **App.js**, import the component and place it in the `<ToolPanel` component. Also add conditional logic, so it will only appear when the active tool is your new tool:
```
<ToolPanel ...>
  ...
  {activeTool === 'newTool' && !activeSelection && <MyNewSetting canvas={canvas} />}
</ToolPanel>
```


## Troubleshooting
Just follow the error messages provided by the terminal or the browser's development console  and fix them or Google them. :)


## Resources

[HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
[CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
[SASS basics](https://sass-lang.com/guide)
[Javascript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
[ReactJS](https://reactjs.org/)
[Create React App](https://create-react-app.dev)
[FabricJS](http://fabricjs.com/fabric-intro-part-1)
