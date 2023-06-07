
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import './style/index.css';

function App() {
  return (
    <main>
      <div className='container'>
        <section>
          
          <Dialog />
          <StarRating />
        </section>
      </div>
    </main>
  );
}

export default App;
