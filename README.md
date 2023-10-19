# SAP UI5 Demo Component Configuration

The Component Configuration is a set of metadata and settings that define how a UI5 component behaves. It typically includes information like the component's name, version, dependencies, and various settings. Here are some key aspects of Component Configuration in SAPUI5:

- Component Name: This is a unique name for your component, and it plays a crucial role in component registration and instantiation.

- Dependencies: You can specify dependencies on other UI5 libraries or components. This ensures that the required resources are loaded before your component starts running.

- Models: You can configure models that will be available within the component. Models are essential for managing data and binding it to the user interface.

- Routing Configuration: You can define routes to handle navigation within your application. The routing configuration includes the mapping of URLs to specific views and controllers.

- Event Handling: You can configure event handlers and listeners for various events in the component's lifecycle.


### Folder Structure


```
📂 webapp
  📄 index.js
  📄 component.js
  📂 view
    📄 App.view.xml
  📂 controller
    📄 App.controller.js

```
---

### Why Component?

Component Configuration (Component Js) is used by Fiori launchpad to run your app without index.html. So it can share reusable codes across the UI5 Application.

----

### Code Explaination:

Refer to [/webapp/index.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Component-Configuration/blob/master/webapp/index.js "index.js")

1. `sap.ui.define([...], function(...) {...});`: This is the standard way to define a module in SAP UI5. It takes two arguments: an array of dependencies and a function. The function is executed once all dependencies are loaded, and the exports of the dependencies are passed as arguments to this function.

2. `"sap/ui/core/ComponentContainer"`: This is a dependency that the module requires. The `ComponentContainer` class is a helper class that allows you to embed a UIComponent into your application.

3. `new ComponentContainer({...}).placeAt("content");`: This creates a new instance of `ComponentContainer` with the specified settings and places it at the HTML element with the id "content". The settings include:
    - `name: "com.vaibhavmojidra.componentdemo"`: This is the name of the component to be loaded.
    - `settings: { id: "componentdemo" }`: These are additional settings for the component. In this case, it sets the id of the component to "componentdemo".
    - `async: true`: This indicates that the component should be loaded asynchronously.

In summary, this code loads a UI5 component named "com.vaibhavmojidra.componentdemo" asynchronously and places it into an HTML element with the id "content". The id of the component itself is set to "componentdemo".


Refer to [/webapp/Component.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Component-Configuration/blob/master/webapp/Component.js "Component.js")


1. `sap.ui.define([...], function(...) {...});`: This is the standard way to define a module in SAP UI5. It takes two arguments: an array of dependencies and a function. The function is executed once all dependencies are loaded, and the exports of the dependencies are passed as arguments to this function.

2. `"sap/ui/core/UIComponent"` and `"sap/ui/model/json/JSONModel"`: These are the dependencies that the module requires. The `UIComponent` class is the base class for all UI components in SAP UI5, and `JSONModel` is a client-side model which supports two-way data binding.

3. `return UIComponent.extend("com.vaibhavmojidra.componentdemo.Component", {...});`: This creates a new UI component that extends the base `UIComponent`. The new component is given the name "com.vaibhavmojidra.componentdemo.Component".

4. `metadata: {...}`: This object defines the metadata for the new component. It includes:
    - `"interfaces": ["sap.ui.core.IAsyncContentCreation"]`: This indicates that the component implements the `IAsyncContentCreation` interface, which supports asynchronous content creation.
    - `"rootView": {...}`: This specifies the root view of the component. The view's name is "com.vaibhavmojidra.componentdemo.view.App", its type is "XML", and its id is "app".

5. `init: function() {...}`: This is the initialization function for the new component. It first calls the initialization function of the base `UIComponent`, then creates a new JSON model with some data and sets it as the model for this component.

In summary, this code defines a new SAP UI5 component that extends `UIComponent`, implements the `IAsyncContentCreation` interface, has a root view named "com.vaibhavmojidra.componentdemo.view.App", and initializes with a JSON model containing some data.

---

##### NOTE: IN THIS DEMO WE HAVE USED INDEX.HTML JUST FOR ENTRY POINT FOR STANDALONE APP BUT ITS ONLY USED TO LOAD INDEX.JS IN THIS DEMO. FOR FIORI LAUNCHPAD WE CAN USE COMPONENT JS. 

---

[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Component-Configuration/master/screenshots/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 2.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Component-Configuration/master/screenshots/2.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)
