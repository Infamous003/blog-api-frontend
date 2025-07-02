import Header from './components/Header';
import PageTemplate from './components/PageTemplate';
import Hero from './components/Hero';
import './App.css'

function App() {
  return (
    <div className='main-container'>
      <Header />
      <PageTemplate heading={"Home"}>
        <Hero />
      </PageTemplate>
    </div>
  )
}

export default App
