const { Router } = require("express");
const homeRouter = Router();
const homeHandler = require("../handlers/homeHandler"); // importo el manejador para que realiza la accion

homeRouter.get("/", homeHandler);
//
module.exports = homeRouter;
