import React, {Component} from 'react'

import Aux from '../Aux'


import Modal from '../../components/UI/Modal/Modal'
import Axios from 'axios';

const withErrorHandler = ( WrappedComponent, axis ) => {
    return class extends Component{

        state = {
            error: null
        }

        componentDidMount () {
            Axios.interceptors.request.use( req => {
                this.setState({error:null});
                return req;
            });
            Axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render(){
            return(
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        { this.state.error ? this.state.error.message : null }
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler