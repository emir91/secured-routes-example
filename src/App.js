import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import Private1 from "./Private1"
import Private2 from "./Private2"
import Public from "./Public"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/private1'>
          <Private1 />
        </Route>
        <Route path='/private2'>
          <Private2 />
        </Route>
        <Route path='/public'>
          <Public />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
