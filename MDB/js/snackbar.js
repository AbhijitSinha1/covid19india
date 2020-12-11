const snackbar = function (config = { timeout: 2000, onloadack: "" }) {
    const { timeout, onloadack } = config;
    const snackbar = document.createElement('div');
    const body = document.getElementsByTagName('body')[0];

    snackbar.id = "snackbar";
    body.appendChild(snackbar);

    const show = function (message, type = "info") {
        snackbar.innerText = message;
        snackbar.className += type + " "
        snackbar.className += "show ";

        setTimeout(() => {
            snackbar.className = "";
        }, timeout);
    }

    this.info = (message) => show(message, "info");

    this.error = (message) => show(message, "error");

    if (onloadack) {
        show(onloadack);
    }

}
