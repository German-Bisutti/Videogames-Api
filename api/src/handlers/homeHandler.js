//Handler se encarga de manera interna de decidir a que controller llamar y que hacer con la informacion que me puede llegar por:
//query - params - body Y responder
const homeHandler = async (req, res) => {
  try {
    res.status(200).json("Todo joya Bro");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = homeHandler;
