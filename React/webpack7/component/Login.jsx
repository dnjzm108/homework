import React,{Component} from 'react'
import Button from './Button'

class Login extends Component {
    onClickHandle = (data) =>{
        console.log(this.props.v , data)
    }
    arrwFunction(i){
        console.log(i);
    }
    render() {
        return (
            <>
                <Button onClick={(i)=>this.arrwFunction(i)}>
                    {this.props.v}
                    </Button>
            </>
        )
    }
}

export default Login