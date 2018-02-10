import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { SignupForm } from '../forms/SignupForm';
import { signup } from '../../actions/users';
import {login} from '../../actions/auth'
{/* kiedy klikniemy na login ta funkcja jest wywolywana
    // wołamy dyspozytora z auth.js  danymi data - sa to dane z formularza*/}
class SignUpPage extends React.Component{


    submit = data =>
        this.props.signup(data).then(() => this.props.history.push("/dashboard"));

    render(){
        return(
            <div>
                <h1>SignUp Page</h1>

                <SignupForm submit={this.submit}/>
            </div>
        )
    }
}
SignUpPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};

export default connect(null, {signup})(SignUpPage);