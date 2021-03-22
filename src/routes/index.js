import { React } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Index from '../page/index/index'
import About from '../page/about/index'
const routes = (
    <BrowserRouter>
        <ul>
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                <Link to="/about">关于</Link>
            </li>
        </ul>
        <Route exact path='/' component={Index} />
        <Route exact path='/about' component={About} />
    </BrowserRouter>
)
export default routes