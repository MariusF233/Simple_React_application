import { useState } from "react";
//nu uitam sa faem import la useState hook
/*
<button onClick={react_la_click}> 
dau o referinta la functie {function_name}


*/

const Home = () => {
  // let nume='mario';//nume nu ar fi REACTIV
  //nu il updateaza in pagina
  //-->facem un HOOK
  const [name, setName] = useState("mario");
  const [age, setAge] = useState("10");
  //valoarea 10 va fi initiala
  //se schimba cu ce imi da functia setAge la click

  /*
fac un array [] ca sa salvez ce imi returneaza useState
al doilea param e o functie care modifica acel nume
ordinea:
1.click
2.apel react_la_click
3.functia setName
4.useState

HOOK:da o valoare initiala,se poate afisa acea val
la click,apelam functia react_la_click->setName 


*/
  const [blogs, setBlogs] = useState([
    { title: "My new app!", body: "Cogito,ergo sum", author: "mario", id: 1 },
    { title: "Simple react app!", body: "Lorem ipsum", author: "luigi", id: 2 },
    { title: "Good morning!", body: "Acta,non verba", author: "luci", id: 3 },
    { title: "Hello!", body: "Carpe diem", author: "tiziano", id: 4 },
  ]);

  const react_la_click = () => {
    setName("luci");
    setAge("30");
  };

  const react_la_click2 = (nume, e) => {
    console.log("hello" + nume, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <h5>written by:{blog.author}</h5>
        </div>
      ))}

      <div className="exercitii">
        <p>
          {name} is {age}
        </p>

        <button onClick={react_la_click}>Click</button>
      </div>
    </div>
  );
};
/*
map():pot itera prin obiecte 
map va putea lista mai multe obiecte 
la div afisate trebuie sa pun key={blog.id} pentru a distinge 
in lista de divs

array.map((item)=>(<div key={item.id}>...</div>))


*/

/*
eventul e:
pentru functia 2 care nu e referentiata dupa nume,
are acces automat la eventul e:(e)=>react_la_click2('mario',e)

cand apelez o functie dupa numele ei,
primeste automat ca primul param eventul e 
evetul e are si el parametri,informatii despre el
informatii event:clintX,clientY,cancelable,isTrusted...
*/

export default Home;
