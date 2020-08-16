
import React  from 'react';
import { Form, Col, Row, Container, Button} from 'react-bootstrap'
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
           
            <Container>
            <Row>
                <Col xs={12} md={4}></Col>
                <Col xs={6} md={4}>
                    <div className="formContainer-1">
                        <h3 className="mb-5">Welcome to CometChatApp</h3>
                        <Row>
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
                     </Row>
                     <br></br>
                        <Form onSubmit={formsubmit}>
                            <Form.Group>
                                <Form.Control value={username} type="text" placeholder="Username"  onChange={(e)=> setUsername(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                            </Form.Group>

                            <Form.Group>
                                <div className="mt-5">
                                    <Button type='submit' variant="secondary btn-action" size="lg" disabled={isSubmitting} block>
                                        LOGIN {isSubmitting ? (<i className="fa fa-spinner fa-spin"></i>) : null}
                                    </Button>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
            <Col xs={12} md={4}></Col>
            </Container>


        </div>
)
	}
   
       

