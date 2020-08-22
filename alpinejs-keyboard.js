function keyboardComponent() {
    return {
        capslockOn: false,
        css:
            '[x-cloak] {display: none;  }.keyboard {position: fixed;z-index: 50;width: 100%;max-width: 1280px;--bg-opacity: 1;background-color: #e5e7eb;background-color: rgba(229, 231, 235, var(--bg-opacity));box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);padding: 1rem;border-radius: 0.5rem;left: 0;right: 0;bottom: 0;margin: auto;  }.keyboard-container {position: relative;width: 100%;display: flex;flex-direction: column;  }.keyboard-row {position: relative;width: 100%;display: flex;justify-content: center;  }.keyboard-key {margin: 0.5rem;--bg-opacity: 1;background-color: #f9fafb;background-color: rgba(249, 250, 251, var(--bg-opacity));border-radius: 0.25rem;font-size: 1.5rem;--text-opacity: 1;color: #4b5563;color: rgba(75, 85, 99, var(--text-opacity));box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);width: 5rem;height: 3rem;display: flex;justify-content: center;align-items: center;cursor: pointer;  }.keyboard-key-capslock,  .keyboard-key-backspace {width: 8rem;  }.keyboard-key-space {flex-grow: 1;  }.keyboard-key-capslock.active {--text-opacity: 1;color: #0e9f6e;color: rgba(14, 159, 110, var(--text-opacity));}',
        focusedInput: null,
        inputAttribute: 'data-keyboard-input',
        isOpen: false,
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

            let inputValue = this.focusedInput.value.concat(value);

            this.focusedInput.value = this.capslockOn ? inputValue.toUpperCase() : inputValue;
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
                let cssElement = window.document.createElement('style');
                cssElement.id = 'keyboard-css';
                cssElement.innerHTML = this.css;
                window.document.head.appendChild(cssElement);
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
