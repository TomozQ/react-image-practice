import '../App.css'
import Sample from './Sample'

const App = () => {
  const style = {
    width: '50%',
    margin: '0 auto',
    marginTop: '150',
  }
  return (
    <>
      <div style={ style }>
        <Sample />
      </div>
    </>
  );
}

export default App
