import "./style.css";
import Trash from "../../assets/Trash.svg";

function Home() {
  const users = [
    {
      id: "12",
      name: "Gabriel",
      email: "teste@email.com",
      senha: "123456",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Email" name="email" type="text" />
        <input placeholder="Senha" name="senha" type="password" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span></span>{user.name}</p>
            <p>Email: <span></span>{user.email}</p>
            <p>Senha: <span></span>{user.senha}</p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}


      </div>
  )
}

export default Home;
