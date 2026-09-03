import Article from '../article/Article';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './App.css';

function App(props) {  // JSX
  let {text, slogan} = props;

  return (
    <div className="App">
      <Header title={text} slogan={slogan} />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
