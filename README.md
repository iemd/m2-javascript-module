# Magento 2 JavaScript
- Magento 2 used a **complete framework** for **JavaScript solutions** in order to provide **greater performance** and **uncoupling modules** aiming for **higher reusability of codes**.
- **Good practice** and **current techniques** were also employed with the objective of facilitating the **development of solutions** in the infrastructure that Magento 2 provides both to its user and to its developers.
## Magento 2 JavaScript structure
- Use of JavaScript in **web application projects** has evolved in **recent years** because of the **functionalities, facilities, and portability** that this technology provides to users.
- Inclusion of **JavaScript files** was made exclusively through **insertion in the page headers**, which has caused a **big problem** in **performance and page loading**.
- In **previous versions of Magento** it was discussed in relation to **good practice** using JavaScript and standardization of use of libraries, such as **jQuery** (`http://jquery.com/`) and **Prototype** (`http://prototypejs.org/`).
- Magento 2 uses **RequireJS** (`http://requirejs.org/`) **as a standard to load JavaScript libraries** in order to provide **greater management power and performance** of JavaScript.
- When we speak of **JavaScript in Magento** we can hear **various terms** like **component and widget**. We can easily divide those terms by describing the **type of JavaScript in Magento** as per following list: 
1. **JavaScript component**: This can be any **single JavaScript file** decorated as an **AMD module**.
2. **UI component**: A **JavaScrip component** located in the `Magento_Ui` module.
3. **jQuery UI widget**: A **JavaScript component/widget** provided by the **jQuery UI library** used in Magento.
4. **jQuery widget**: A **custom widget** created using **jQuery UI Widget Factory** and decorated as an **AMD module**.
## Initializing and locating JavaScript component
- With the **portability provided by RequireJS**, you can specify **JavaScript resources** used in your **modules and themes**.
- **JavaScript resources** can be specified as follows:
1. **Library level** for all libraries in the **Magento code base** (`lib/web`).
2. **Module level** for all libraries in a module. (`app/code/{vendorName}/{moduleName}/view/<area>/web`).
3. **Theme** for all libraries in a theme (`app/design/{area}/{vendorName}/{theme}/{vendorName}_{moduleName}/web`).
4. All libraries in a theme (`{app/design/{area}/{vendorName}/{theme}/web`). Though possible, it is not recommended using this level to specify JavaScript resources.
- The **library level** can only contain **core Magento resources**. Do not put **custom JS files** in the `lib/web` directory.
### Initializing JavaScript
- It is **highly recommended** as **good practice** to declare the **JavaScript resources** in the **templates** instead of **layout updates**, mainly to take **advantage of the processing and loading via RequireJS**.
- There are **two ways to initialize** a **JavaScript component** on the **template**:
#### 1. Imperative Initialization:
- Use imperative initialization in the **PHTML template** to include **raw JavaScript code** on the pages to execute specified business logic.
- This method uses the `<script>` tag without the `type=”text/x-magento-init”` attribute.
- There are two ways to work with imperative initialization:
```
<script>  
    require([“jquery”], function($){
        /*code here*/ 
    });
</script>
```
- It is possible to load the **jQuery library** to the function **in the template** with this call.
```
<script>
    require([“Magento_Sales/order/create/form”], function(){
        /*code here*/
    });
</script>
```
- The `form.js` is loaded into a **determined template** through the reference `Magento_Sales/order/form` with this call.
- It is possible to **reuse the resources** in **different templates** with this type of reference.
#### 2. Declarative Initialization:
- Using the declarative initialization **to insert a JS component** prepares all the configuration on the backend and outputs it to a page source using standard tools. 
- Use declarative initialization if your **JavaScript component** requires initialization.
- There are also two ways to work with declarative initialization:
##### Using the `data-mage-init` attribute
- This is used to **target a specific HTML element**.
- It is easier to implement and is commonly used for **jQuery UI widgets**.
- This method can only be implemented on the **specified HTML tag**. For example,  
    `<nav data-mage-init='{ "<component_name>": {...} }'></nav>`
- This is preferred for its **concise syntax**, and **direct access to the HTML element**.
##### Using the `<script type=”text/x-magento-init”>...</script>` tag
- This is used to target either a `CSS selector` or `*`.
- If the `CSS selector` matches **multiple HTML elements**, the script will run for **each matched HTML element**.
- For `*`, no HTML element is selected and the script will run **once with the HTML DOM as its target**.
- This is preferred when **direct access to the HTML element is restricted**, or when there is **no target HTML element**. For example,
```
<script type=”text/x-magento-init”>
    {
        “#main-container”: {
            “navigation”: <?php echo $block->getNavigationConfig(); ?>,
            “accordion”:  <?php echo $block->getNavigationAccordionConfig(); ?>
        },
        “*”: {
            “pageCache”: <?php echo $block->getPageCacheConfig(); ?>
        }
    }
</script>
```
- You can use the declarative way for the **passage of backend parameters**, once everything has been processed on the **server-side** before delivering the **response in the template**.

