// CREATE - cria um novo registo
exports.create = (req, res) => {
    console.log("Create", req.body);
    if (!req.body) {
      return res.status(400).send({
        message: "O conteúdo não pode ser vazio!",
      });
    }
    return res.send({
      message: "Criou um novo registo!",
    });
  };
  
  // READ all - busca todos os registos
  exports.findAll = (req, res) => {console.log("FindAll")}
  
  // READ one - busca o item com um certo id (chave primária)
  exports.findOne = (req, res) => {};
  
  // UPDATE - atualiza o item com o id recebido
  exports.update = (req, res) => {
    console.log("Update");
    if (!req.body) {
      return res.status(400).send({
        message: "O conteúdo não pode ser vazio!",
      });
    }
    return res.send({
      record : req.body,
      id : req.params.id,
      message : "O registo foi atualizado com sucesso!"
    });
  };
  
  // DELETE one - elimina o item com o id recebido
  exports.delete = (req, res) => {
    console.log("Delete");
    if (!req.body) {
      return res.status(400).send({
        message: "O conteúdo não pode ser vazio!",
      });
    }
    return res.send({
      message: "Eliminou um registo!",
    });
  };
  
  // DELETE all - elimina todos os itens
  exports.deleteAll = (req, res) => {};
  
  // READ with condition - encontra todos os itens com uma certa condição = true
  exports.findAllMarked = (req, res) => {};
  