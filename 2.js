window.addEventListener('loaded', () => {
  const Jugadores = prompt(
    'Introduzca número de jugadores',
    'mínimo 2, máximo 5'
  );
});

const contenedor = document.getElementById('root');
const root = ReactDOM.createRoot(contenedor);
const useState = React.useState;

const componente = <Contador />;

const Jugadores = prompt(
  'Introduzca número de jugadores',
  'mínimo 2, máximo 5'
);

function Contador() {
  let contadorEstado = useState(0);
  let valorContador = contadorEstado[0];
  let valorActualizado = contadorEstado[1];

  return (
    <div className="creado">
      <button
        onClick={() => {
          valorActualizado(valorContador + 5);
        }}
      >
        {' '}
        contador+5{' '}
      </button>
      <button
        onClick={() => {
          valorActualizado(valorContador + 3);
        }}
      >
        {' '}
        contador+3{' '}
      </button>
      <button
        onClick={() => {
          valorActualizado(valorContador + 1);
        }}
      >
        {' '}
        contador+1{' '}
      </button>{' '}
      <span>{valorContador}</span>
      <button
        onClick={() => {
          valorActualizado(valorContador - 1);
        }}
      >
        Contador -1
      </button>
      <button
        onClick={() => {
          valorActualizado(valorContador - 3);
        }}
      >
        {' '}
        contador-3{' '}
      </button>
      <button
        onClick={() => {
          valorActualizado(valorContador - 5);
        }}
      >
        {' '}
        contador-5{' '}
      </button>
    </div>
  );
}

root.render(<div className="creado">{componente}</div>);

console.log(Jugadores);
