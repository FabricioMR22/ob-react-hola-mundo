import logo from './logo.svg';
import './App.css';
/* import Ejercicio456 from './hooks/lifecycle/Ejercicio456'; */
/* import Ejemplo4 from './hooks/Ejemplo4'; */
/* import MiComponenteContexto from './hooks/Ejemplo3'; */

/* import ContactClass from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2'; */

/* import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF'; */
import TaskListComponent from './components/container/task_list';
/* import GreetingStyled from './components/pure/greetingStyled'; */

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="Martin"></Greeting> */}
        {/* <GreetingF name="Martin"></GreetingF> */}
        {/* <ContactClass></ContactClass> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteContexto></MiComponenteContexto> */}
        {/* <Ejemplo4 nombre='Fabricio'>
          <h3>
            Contenido del children props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Fabricio"></GreetingStyled> */}

        {/* <Ejercicio456></Ejercicio456> */}
      {/* </div></header> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
