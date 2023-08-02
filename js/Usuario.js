class Usuario {
    constructor(nome, senha, id) {
        this.nome = nome;
        this.senha = senha;
        this.id = id;
    }
}

const getLocalStorage=()=>JSON.parse(localStorage.getItem('db_client')) ?? []
    const setLocalStorage=(dbClient)=>localStorage.setItem("db_client",JSON.stringify (dbClient))
    const lerUsuario=()=>getLocalStorage()



const cadastrarUsuario=(event)=> {
    event.preventDefault();
    const dbClient= getLocalStorage()
    const id = dbClient.length
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const usuario = new Usuario(nome, senha, id);
    
    dbClient.push(usuario)
    setLocalStorage(dbClient)
alert(`Usuário ${usuario.nome} cadastrado com sucesso!`);


}
const editarUsuario=(event)=>{
                
    event.preventDefault();
const index = document.getElementById('id').value;
const nome = document.getElementById('novoNome').value;
const senha = document.getElementById('novaSenha').value;
const dbClient=lerUsuario()
const usuario=new Usuario(nome, senha, index)
if(dbClient[index]){
alert(`Usuário ${dbClient[index].nome} editado com sucesso!`);
dbClient[index]=usuario
setLocalStorage(dbClient)

}
}
const novoId=(usuario,index)=>{
    if (usuario.id>index){
    usuario.id-=1
    }

}

const deletarUsuario=(event)=>{
    event.preventDefault()
    const index=document.getElementById('id').value
const dbClient=lerUsuario()
alert(`Usuário ${dbClient[index].nome} deletado com sucesso!`);
dbClient.splice(index,1)
dbClient.forEach(usuario=>novoId(usuario,index))
setLocalStorage(dbClient)


}



    
const criarLinha=(usuario)=>{
    const linha=document.createElement('tr')
    linha.innerHTML='<td>'+usuario.id+'</td><td>'+usuario.nome+'</td><td>'+usuario.senha+'</td>'
    document.querySelector('#tableClient>tbody').appendChild(linha)}
    const gerarLista=()=>{
    const dbClient=lerUsuario()
    dbClient.forEach(usuario=>criarLinha(usuario))
 }