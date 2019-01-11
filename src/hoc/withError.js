import React, {Component} from 'react';
import Modal from '../components/UI/Modal';

const withError = (WrappedComponent, axios) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                error: null,
            }
        }

        componentDidMount = () => {
            this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({ error });
            })
        }

        componentWillUnmount = () => {
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        closeError = () => {
            this.setState({error: null});
        }

        render() {
            return(
                <>
                    <Modal show={this.state.error} modalClosed={this.closeError}>
                        {(this.state.error) ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </>
            )
        }
    }
}

export default withError;