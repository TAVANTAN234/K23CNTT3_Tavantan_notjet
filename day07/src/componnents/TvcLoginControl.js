import React, { Component } from 'Tạ Văn Tân';
import TvcLoginComp from './TvcLoginComp';
import TvcLogoutComp from './TvcLogoutComp';

class TvcLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    tvcHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let tvcElement = isLoggedIn?<TvcLoginComp /> : <TvcLogoutComp />
        return (
            <div className='alert alert-danger'>
                {tvcElement}
                {
                    isLoggedIn? 
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
                        :<button onClick={this.tvcHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default TvcLoginControl;