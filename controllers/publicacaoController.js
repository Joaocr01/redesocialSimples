const listar = function(req, res){
  res.render('publicacoes/listar', {
    title: "Titulo"
  })
}

const visualizar = function(req, res){
  const id = req.params.id
  const descricao = 'Publicado em 14/11/2024'
  res.render('publicacoes/visualizar', {
    titulo: id,
    descricao: descricao
  })

}

module.exports = { listar, visualizar}
