const { Router } = require("express");
const genresRouter = Router();
const genresHandler = require("../handlers/genresHandler"); // importo el manejador para que realiza la accion

genresRouter.get("/", genresHandler);
//
module.exports = genresRouter;
