import React from "react"
import { ImageCard } from "./Component/ImageCard"

function App() {

  const [state, setState] = React.useState("Mobile")
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
      getData(state)
  },[])

  const onSubmit = () => {
      getData(state)
  }

  const getData = (state) => {
      fetch(`https://pixabay.com/api/?key=20896658-4515035df3d14df6c91255dea&q=${state}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => setData(data.hits))
      setLoading(false)
  }

  if(data.length === 0) {
    return (
      <>
        <h1 className="text-center mt-4 text-6xl italic">Image Search</h1>
        <div className="flex justify-center mt-10">
          <input type="text" placeholder="Type the text" onChange={e => setState(e.target.value)} value={state} className="border-gray-500 border-4 focus:border-0 rounded-full text-center p-2.5" />
        </div>
        <br/><br/>
        <div className="flex justify-center">
          <button className="inline-block -mt-4 px-6 py-2 text-white bg-green-600" onClick={onSubmit}>Submit</button>
        </div>
        <h1 className="text-center text-4xl mt-24">No Images Found</h1>
      </>
    )
  }

  return (
    <div>
      <h1 className="text-center mt-4 text-6xl italic">Image Search</h1>
      <div className="flex justify-center mt-10">
        <input type="text" placeholder="Type the text" onChange={e => setState(e.target.value)} value={state} className="border-gray-500 border-4 focus:border-0 rounded-full text-center p-2.5" />
      </div>
      <br/><br/>
      <div className="flex justify-center">
        <button className="inline-block -mt-4 px-6 py-2 text-white bg-green-600" onClick={onSubmit}>Submit</button>
      </div>
      {
        loading ? <h1 className="text-center text-4xl mt-20">Loading...</h1> :
        <div className="container mx-auto">
          <div className="md:grid md:grid-cols-4 md:gap-2 shadow:lg ml-2">
            {
              data.map((item) => {
                  return <ImageCard key={item.id} image_details={item}/>
              })
            }
          </div>
        </div>
      }
    </div>
  );
}

export default App;
