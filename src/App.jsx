export default function App() {

    const name = 'Peywan'

    const peywanInfo =
        {
            name: name,
            age: 25,
            hobbies: ['football', 'basketball', 'cricket']
        }

    return (

        <div className="flex ">

            <h1 className="text-3xl font-bold underline rounded-xl border-8 grey border-black bg-gray-300 px-20 m-20">
                Hello {name}
                <p>Namn: {peywanInfo.name}</p>
                <p>Ålder: {peywanInfo.age}</p>
            </h1>
        </div>
    )
}

