import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';

class ForgotPasswordPage extends React.Component {
    state= {
        success:false
    };

    submit = data => this.props.resetPasswordRequest(data).then(() =>
        this.setState({success: true }));

    render(){
        return (
            <div>
                {this.state.success ? <Message>Email has been seny. </Message> :
                    <ForgotPasswordForm submit={this.submit} />

                }
            </div>
        );
    }
}

ForgotPasswordPage.propTypes = {
    resetPasswordRequest: PropTypes.func.isRequired

}

export default ForgotPasswordPage;