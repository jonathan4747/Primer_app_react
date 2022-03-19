import Ideas from './componentes/Ideas/Ideas';

const App = () => {
  const titulo = "Hello Dojo!"
  const subtitulo = "Things I need to do:"
  return (
    <div className="App">
      <h1>{titulo}</h1>
      <h3>{subtitulo}</h3>

      <Ideas ideas="* Learn React" />
      <Ideas ideas="* Climb Mt. Everest" />
      <Ideas ideas="* Run a marathon" />
      <Ideas ideas="* Feed the dogs" />
    </div>
  );
}

export default App;
