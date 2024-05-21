import './Home.css'

const Home = (props) => {
    const dishes = props.dishes
    const menu = dishes.map(food => {
       return <div>
        <p>Name: {food.name}</p>
        <p>Description: {food.description}</p>
        <p>Price: {food.price}</p>
    </div>
    })
  return (
    <div>
        {menu}
    </div>
  )
}

export default Home