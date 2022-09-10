const getDetail = (req, res) => {
  res.send({ data: "Hola detail" });
};

const getList = (req, res) => {
  res.send({ data: "Hola lista" });
};

const createItem = (req, res) => {
  res.send({ data: "Hola create" });
};

module.exports = { getDetail, getList, createItem };
