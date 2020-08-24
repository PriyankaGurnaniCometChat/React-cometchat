
import React  from 'react';
import { AuthContext } from '../context/authcontext';

export const Login = () => {
    const {login} = React.useContext(AuthContext)
    const [username, setUsername] = React.useState('')
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const formsubmit = async (e) =>{
        e.preventDefault()
        setIsSubmitting(true)
        const data = await login(username)
        if(data){
        setIsSubmitting(false)
        setUsername('')
        }
    }

    return(
        <div className="authContainer">
           
            <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <div className="formContainer-1">
                        <h3 className="mb-5">Welcome to CometChatApp</h3>
                        <div className='row'>
                            <div className='ml-5' onClick={()=>{login('superhero1')}}>
                        <img src='https://data-us.cometchat.io/assets/images/avatars/ironman.png' height='50px' width='50px' alt='superher1'/>
                            <p>superhero1</p>
                            </div>
                            <div className='ml-5' onClick={()=>{login('superhero2')}}>
                        <img src='https://data-us.cometchat.io/assets/images/avatars/captainamerica.png' height='50px' width='50px' alt='superher2'/>
                            <p>superhero2</p>
                            </div>
                            <div className='ml-5' onClick={()=>{login('superhero3')}}>
                        <img src='https://data-us.cometchat.io/assets/images/avatars/spiderman.png' height='50px' width='50px' alt='superher3' />
                            <p>superhero3</p>
                            </div>
                     </div>
                     <br></br>
                        <form onSubmit={formsubmit}>
                            <div className='form-group'>
                                <input className='form-control' value={username} type="text" placeholder="Username"  onChange={(e)=> setUsername(e.target.value)}/>
                            </div>
                            {/* <div className='form-group'> */}
                                <div className="mt-5">
                                    <button type='submit' className='button' variant="secondary btn-action" size="lg" disabled={isSubmitting}>
                                        LOGIN {isSubmitting ? (<i className="fa fa-spinner fa-spin"></i>) : null}
                                    </button>
                                </div>
                            {/* </div> */}
                        </form>
                    </div>
                </div>
            </div>
            <div className='col-md-4'></div>
            </div>

        </div>
)
    } 
