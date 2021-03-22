import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { Button } from 'antd'
function About (props) {
    return <h2>
        this is about page
        <Button onClick={() => {props.push('/')}}>push</Button>
    </h2>
}
export default connect(null, {push})(About)