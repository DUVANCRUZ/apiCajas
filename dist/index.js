"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Esta funcion inicia el servidor
const app_1 = require("./app");
function main() {
    const app = new app_1.App();
    app.listen();
}
main();
