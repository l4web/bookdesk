import React from 'react';
import {Message} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ResetPasswordForm from '../forms/ResetPasswordForm'
import { validateToken, resetPassword } from '../../actions/auth'

class ResetPasswordPage extends React.Component {
    state= {
        loading: true,
        success: false
    };

    componentDidMount() {
        this.props.validateToken(this.props.match.params.token)
            .then(() => this.setState({loading: false, success: true}))
            .catch(() => this.setState({loading: false, success: false}))
    }
    submit = data => this.props.resetPassword(data).then(() => this.props.history.push("/login"));

    render(){
        const {loading, success} = this.state;
        const token = this.props.match.params.token;
        return (
            <div>
                {loading && <Message warning >Lodaing</Message>}
                {!loading && success && <ResetPasswordForm submit={this.submit} token={token}>Form</ResetPasswordForm>}
                {!loading && !success && <Message>Invalid token</Message>}
            </div>
        );
    }
}
ResetPasswordPage.PropTypes ={
    validateToken: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

export default connect(null,{validateToken, resetPassword })(ResetPasswordPage);