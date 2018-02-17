import React from 'react';
import { FormattedMessage } from "react-intl";


class Footer extends React.Component {
    state= {}

    render(){
        return (
            <footer
                style={{
                    height: "100px",
                    color: "white",
                    background: "linear-gradient(25deg, #002d5d,#005b8a)",
                    position: "fixed",
                    bottom: "0",
                    width: "100%"
                }}
            >
                <div className="container d-flex h-100 justify-content-end">
                    <div className="row align-self-center ">
                        <small className="text-white">
                            <FormattedMessage
                                id="footer.disclaimer"
                                defaultMessage="Nurture Book App 2018"
                            />
                        </small>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;