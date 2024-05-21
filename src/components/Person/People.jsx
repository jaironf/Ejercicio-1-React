import './People.css'

const People = (props) => {
  return (
    <div>
        <h1>People</h1>
        <p>Name: {props.person.name}</p>
        <p>Surname: {props.person.surname}</p>
        <p>Age: {props.person.age}</p>
        </div>
  )
}

export default People