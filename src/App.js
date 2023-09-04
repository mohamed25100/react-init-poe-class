import logo from "./logo.svg";
import "./App.css";
import  {Counter} from "./components/Counter";
import { Component, Fragment } from "react";
import { InfoTitle } from "./components/InfoTitle";
import { Mapping } from "./components/Mapping";
import { Form } from "./components/Form";

class App extends Component {

  listUsers =  [
    {id: 0, name: "Ibra", age: 30},
    {id: 1, name: "Jean Leon", age: 30},
    {id: 2,name: "Mohamed", age: 30},
    {id: 3,name: "Bastien", age: 30},
    {id: 4,name: "Adrien", age: 30},
    {id: 5,name: "Maxime", age: 30},
    {id: 6,name: "Jordan", age: 30},
]   
  constructor() {
    super();
    console.log("constructor called");
    this.state = {
      name: "Rachid",
      age: 12,
      background: "bg-white text-slate-800 mr-2 p-2",
      condition: true,
      isLogged: false,
      users : this.listUsers
    };
  }
  changeName = () => {
    // setState est asyncrone
    this.setState(
      {
        name: "Yanis",
      },
      () => {
        console.log(this.state.name);
      }
    );
  };
  incrementAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  changeCondition = () => {
    this.setState({
      condition: !this.state.condition, // inverser l'ancienne valeur
    });
  };

  handleLogin = () => {
    this.setState({
      isLogged : !this.state.isLogged
    })
  }

  render() {
    console.log("render called");

    return (
      <div className="text-white bg-gray-900 font-mono">
        <main className="container mx-auto min-h-screen space-y-3">
          <section>
            <div className="flex items-center gap-4">
              <img src={logo} alt="" className="App-logo" />
              <h1 className="text-3xl font-bold text-cyan-300">
                Apprendre React by Dawan
              </h1>
            </div>

         {/* this.state.isLogged ?
          <button
             className={this.state.background}
             onClick={this.handleLogin}
          >Logout</button> :
          <button
          className={this.state.background}
          onClick={this.handleLogin}
           >Login</button>
    */ }   

           <button
              className={this.state.background}
              onClick={this.handleLogin}
           >
             {this.state.isLogged ? "Logout" : "Login"}
           </button>


         {this.state.isLogged ? 
           <p 
           className="bg-emerald-300 text-slate-800 p-3">
            Vous êtes connecté !!!!</p> : 
            <p 
             className="bg-red-300 text-slate-800 p-3">
             Connectez-vous pour voir le contenu</p>
         }    

        { this.state.isLogged &&
            <>
            {/* Fragment est un conteneur qui n'existe que dans le VD */}
            <p className="">
              Un expression en JSX se met entre accolade {/* {expression} */} :{" "}
              {12 + 10}
            </p>
            {/* Ceci est un commentaire */}
            <p className="text-lg">
              Bonjour je m'appelle {this.state.name} et j'ai{" "}
              {this.state.age + 10} ans
            </p>

            <button className={this.state.background} onClick={this.changeName}>
              Changer de nom
            </button>
            <button
              className={this.state.background}
              onClick={this.incrementAge}
            >
              {" "}
              incrementAge{" "}
            </button>

            <h2 className="text-xl my-3">Rendu conditionel</h2>
            {/* Opérateur ternaire : (condition ? true : false) */}
            {this.state.age <= 35 ? (
              <p>Je suis plus tout jeune</p>
            ) : (
              <p>Je suis jeune</p>
            )}

            {this.state.age <= 35 ? <p>Je suis plus tout jeune</p> : null}

            {this.state.condition && <p>Je m'affiche si c'est true </p>}

            <button 
              className={this.state.background}
              onClick={this.changeCondition}
            >
              Changer condition{" "}
            </button>
            </>
          }
          </section>
          <section>

           <InfoTitle text={"Les composants"} />
             <Counter initCount={10} title={"Mon super titre"} />
             <Counter initCount={20} title={"Mon super titre"} />
             <Counter title={"Mon super titre"} />
            <InfoTitle text={"List et Mapping"} />
            <Mapping users={this.state.users} />

            <InfoTitle text={"Les formulaires"} />
            <Form />


          </section>
        </main>
      </div>
    );
  }
}

export default App;