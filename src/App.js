import logo from './logo.svg';


import Navbar from './Navbar';
import Home from './Home';
//nu uitam sa facem import al functiei Navbar si Home


//aici 
function App() {//trebuie sa inceapa cu litera mare 
  //returneaza cod JSX
  //in JSX folosesc className,nu class ca in html
  //cand se converteste in html,devine class

  const titlu= 'Welcome to my new simple React application!';
  const likes=50;
  const link="http://www.google.com";

/*App.js este commponenta root a aplicatiei
component tree:
App.js=root
-navbar.js
-blog.js
-sidebar.js:-a.js
            -b.js


<h1>{titlu}</h1>
       <p>Liked {likes} times </p>
  

      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random()*100}</p>
*/
  //pot face return si la variabile
  //folosim {} pt output al variabile
  //cu {} va afisa orice tip de variabila ,si string si int,array
  //obiecte nu se pot afisa cu {}


  return (
    <div className="App">
     
      <Navbar></Navbar>


      <div className="content">

         <Home></Home>
       

      </div>


    </div>
  );
}
  
export default App;
//intotdeauna fac export componentei ca sa o folosesc in 
//in index.js