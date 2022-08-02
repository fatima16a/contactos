const express = require("express");
const app = express();

app.use(express.json());

const contacts = [
  {
    id: 1,
    name: "Furia Luminosa",
  },
  {
    id: 2,
    name: "Chimuelo",
  },
  {
    id: 3,
    name: "Yoshi",
  },
  {
    id: 4,
    name: "Las chicas Superpoderosass",
  },
];

app.get("/contactos", (request, response, next) => {
  response.json(contacts);
});

app.get("/contactos/:id", (request, response, next) => {
  const id = request.params.id;
  const contact = contacts.find((contact) => contact.id == id);
  response.json(contact);
});

app.post("/contactos", (request, response, next) => {
  const nombreContacto = requej + st.body.name;
  const nuevoContacto = {
    id: contacts.length,
    name: nombreContacto,
  };
  contacts.push(nuevoContacto);
  response.status(200);
});

app.delete("/contactos/:id", (request, response, next) => {
  const id = request.params.id;
  const contact = contacts.find((contact) => contact.id == id);
  contacts.splice(id - 1, 1);
  response.json(contacts);
});

app.listen(4000, () => console.log("Servidor corriendo en el puerto 4000"));