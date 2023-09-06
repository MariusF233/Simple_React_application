/*
o componenta este de fapt o functie care returneaza 
cod,template JSX,similar unui cod html si apoi aceasta 
functie o exportam la finalul file



la style={{}} pot adauga valori CSS in JSX
primul set de {} spune ca folosesc un dynamic value
al doilea set {} e pentru javascript object
*/
//sfc+tab(imi da un arrow function fara params)

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blogul meu</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
         color:"white",
         backgroundColor:'#f1356d',
         borderRadius:'12px'

        }}>Creaza un nou blog</a>
       
      </div>
    </nav>
  );
};

export default Navbar;

/* nu uitam sa punem aceasta functie in root 
sau parinte:App.js (nesting)

o punem in functia parinte unde vrem 

*/