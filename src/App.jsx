import './App.css'
import data from "./data"
import Header from "./Header"
import Card from "./Card"

function App() {
  const item = data.map(item =>
    <Card
      key={item.title}
      item={item}
    />
  )
  return (
    <div className="app">
      <Header />
      {item}
    </div>
  )
}

export default App
