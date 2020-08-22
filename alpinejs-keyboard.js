function keyboardComponent() {
    return {
        capslockOn: false,
        css:
            '[x-cloak] {display: none;  }.keyboard {position: fixed;z-index: 50;width: 100%;max-width: 1280px;--bg-opacity: 1;background-color: #e5e7eb;background-color: rgba(229, 231, 235, var(--bg-opacity));box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);padding: 1rem;border-radius: 0.5rem;left: 0;right: 0;bottom: 0;margin: auto;  }.keyboard-container {position: relative;width: 100%;display: flex;flex-direction: column;  }.keyboard-row {position: relative;width: 100%;display: flex;justify-content: center;  }.keyboard-key {margin: 0.5rem;--bg-opacity: 1;background-color: #f9fafb;background-color: rgba(249, 250, 251, var(--bg-opacity));border-radius: 0.25rem;font-size: 1.5rem;--text-opacity: 1;color: #4b5563;color: rgba(75, 85, 99, var(--text-opacity));box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);width: 5rem;height: 3rem;display: flex;justify-content: center;align-items: center;cursor: pointer;  }.keyboard-key-capslock,  .keyboard-key-backspace {width: 8rem;  }.keyboard-key-space {flex-grow: 1;  }.keyboard-key-capslock.active {--text-opacity: 1;color: #0e9f6e;color: rgba(14, 159, 110, var(--text-opacity));}',
        focusedInput: null,
        inputAttribute: 'data-keyboard-input',
        isOpen: false,
        rows: [
            {
                keys: [
                    { name: '1', value: '1' },
                    { name: '2', value: '2' },
                    { name: '3', value: '3' },
                    { name: '4', value: '4' },
                    { name: '5', value: '5' },
                    { name: '6', value: '6' },
                    { name: '7', value: '7' },
                    { name: '8', value: '8' },
                    { name: '9', value: '9' },
                    { name: '0', value: '0' },
                ],
            },
            {
                keys: [
                    { name: 'q', value: 'q' },
                    { name: 'w', value: 'w' },
                    { name: 'e', value: 'e' },
                    { name: 'r', value: 'r' },
                    { name: 't', value: 't' },
                    { name: 'y', value: 'y' },
                    { name: 'u', value: 'u' },
                    { name: 'i', value: 'i' },
                    { name: 'o', value: 'o' },
                    { name: 'p', value: 'p' },
                ],
            },
            {
                keys: [
                    { name: 'a', value: 'a' },
                    { name: 's', value: 's' },
                    { name: 'd', value: 'd' },
                    { name: 'f', value: 'f' },
                    { name: 'g', value: 'g' },
                    { name: 'h', value: 'h' },
                    { name: 'j', value: 'j' },
                    { name: 'k', value: 'k' },
                    { name: 'l', value: 'l' },
                ],
            },
            {
                keys: [
                    { name: 'z', value: 'z' },
                    { name: 'x', value: 'x' },
                    { name: 'c', value: 'c' },
                    { name: 'v', value: 'v' },
                    { name: 'b', value: 'b' },
                    { name: 'n', value: 'n' },
                    { name: 'm', value: 'm' },
                ],
            },
            {
                keys: [
                    {
                        name: 'capslock',
                        icon:
                            '<svg viewBox="0 0 16 16" class="bi bi-capslock w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5L8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z"/></svg>',
                    },
                    { name: '.', value: '.' },
                    { name: '@', value: '@' },
                    { name: 'space', value: ' ' },
                    {
                        name: 'backspace',
                        icon:
                            '<svg viewBox="0 0 16 16" class="bi bi-backspace-fill w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/></svg>',
                    },
                ],
            },
        ],
        handleBackspaceClick() {
            if (!this.focusedInput) {
                return;
            }

            this.focusedInput.focus();

            let inputValue = this.focusedInput.value;

            this.focusedInput.value = inputValue.slice(0, inputValue.length - 1);
        },
        handleCapslockClick() {
            this.capslockOn = !this.capslockOn;
        },
        handleKeyClick(value) {
            if (
                !this.focusedInput ||
                (this.focusedInput.hasAttribute('data-keyboard-integer') && isNaN(value))
            ) {
                return;
            }

            this.focusedInput.focus();

            let inputValue = this.focusedInput.value.concat(
                this.capslockOn ? value.toUpperCase() : value.toLowerCase()
            );

            this.focusedInput.value = inputValue;
            this.focusedInput.dispatchEvent(
                new Event('change', {
                    bubbles: true,
                    cancelable: true,
                })
            );

            this.capslockOn = false;
        },
        init() {
            let self = this;

            self.insertCss();

            window.addEventListener('click', (e) => {
                // if (e.target.classList.contains('keyboard-input')) {
                if (e.target.hasAttribute(self.inputAttribute)) {
                    self.focusedInput = e.target;
                    self.isOpen = true;

                    if (e.target.hasAttribute('data-caps-start') && e.target.value == '') {
                        self.capslockOn = true;
                    }

                    return;
                }

                if (!self.isDescendant(self.$refs.keyboard, e.target)) {
                    self.isOpen = false;
                    self.focusedInput = null;
                }
            });
        },
        insertCss() {
            if (!window.document.getElementById('keyboard-css')) {
                var internalCSS = window.document.createElement('style');
                internalCSS.id = 'keyboard-css';
                internalCSS.innerHTML = this.css;
                window.document.head.appendChild(internalCSS);
            }
        },
        insertHtml() {},
        isDescendant(parent, child) {
            let node = child.parentNode;

            while (node != null) {
                if (node == parent) {
                    return true;
                }

                node = node.parentNode;
            }

            return false;
        },
    };
}
