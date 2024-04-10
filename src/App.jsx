export default function App() {

const names = ["John", "Doe", "Smith", "Jones", "Williams", "Brown", "Davis",]
const loggedIn = true
const styles = {
    color: 'purple',
    fontSize: '202px',
}
    return (

        <div className="flex ">
            <div>
                <p style={{color: 'red', fontSize: 90, fontWeight: 'bold'}}>hello styled john</p>
                <ul>
                    {names.map((name, namesIndex) => (<li
                        key={namesIndex}>
                        {name}</li>))}
                </ul>

                { loggedIn ? <h1 style={styles}>hello member</h1> : <h1>hello guest</h1>}
            </div>
        </div>)
}

