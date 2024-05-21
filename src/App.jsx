import './App.css';
import People from './components/Person/People';
import Home from './components/Home/Home';
import Header from './components/Header/Header';


function App() {
const person1 ={
  name: 'Juan',
  surname: 'Gacrcia',
  age: 23
}
const person2 ={
  name: 'Maria',
  surname: 'Maria',
  age: 34
}
const person3 ={
  name: 'Pedro',
  surname: 'Perez',
  age: 26
}

const dishes = [
  {
    id:1,
    name:'Calamares a la romana',
    description:'Calamares rebozados',
    price:10
  },
  {
    id:2,
    name:'Paella',
    description:'Paella de pollo y conejo',
    price:20
  },
  {
    id:3,
    name:'Ensaladilla rusa',
    description:'Ensaladilla con papata y cosas',
    price:15
  }
]

return (
      <div>
        <People person={person1}/>
        <People person={person2}/>
        <People person={person3}/>
        <Header/>
        <Home dishes={dishes}/>
      </div>
      
  )
}

export default App
