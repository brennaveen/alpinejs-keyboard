function formComponent() {
    return {
        formData: {
            name: '',
            number: '',
            superhero: '',
        },
        handleSubmit() {
            console.log(this.formData.name);
            console.log(this.formData.number);
            console.log(this.formData.superhero);
        },
        init() {
            var self = this;

            // Detect keyboard events so model is set to the proper value
            document.querySelectorAll('[data-keyboard-input]').forEach((element) => {
                element.addEventListener('change', (e) => {
                    console.log(e.target.getAttribute('x-model'));
                    let property = e.target.getAttribute('x-model').split('.');

                    self[property[0]][property[1]] = e.target.value;
                });
            });
        },
    };
}
