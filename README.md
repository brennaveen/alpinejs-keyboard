# alpinejs-keyboard

Virtual keyboard using alpinejs

## Requirements

-   AlpineJS

## Installation

1. Add script tag to the end of your body tag. Styles are automatically injected so you don't need a link tag

```html
<script src="alpinejs-keyboard.js"></script>
```

2. Add the html in `keyboard.html` near the bottom of your page.

3. Add attribute `data-keyboard-input` to any inputs you would like to have the virtual keyboard

## Configuation

Use these data attributes to customize the keyboard for each input

`data-caps-start` - The first character will be capitalized

`data-keyboard-integer` - Users will only be allowed to input numbers

## Using the keyboard with AlpineJS form components

You have to watch for changes on the inputs so values can be updated in your AlpineJS models. If you don't complete this step your values will be cleared the next time the model refreshes.

### Example

```js
function formComponent() {
    return {
        formData: {
            name: '',
            visitor: '',
        },
        handleSubmit() {
            console.log(this.formData.name);
        },
        init() {
            var self = this;

            // Detect keyboard events so model is set to the proper value
            document.querySelectorAll('[data-keyboard-input]').forEach((element) => {
                element.addEventListener('change', (e) => {
                    let property = e.target.getAttribute('x-model').split('.');

                    self[property[0]][property[1]] = e.target.value;
                });
            });
        },
    };
}
```
