import React from 'react';
import WorkInProgress from "./WorkInProgress";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionClasses: 'foregroud-layer contact'
        }
    }

    render() {
        return (
            <section className={this.props.sectionClasses}>
                <div className={'container'}>
                </div>
            </section>
        );
    }
}

export default Contact;