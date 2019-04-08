import React, { Component } from 'react';
import Notification from './components/presentational/notification';
import Confirmation from './components/presentational/confirmation';
import QuestionList from './components/container/questionlist';
import * as constants from './constants/';

class App extends Component {
    state = {
        confirmation: true
    };

    handleAccept = () => {
        this.setState({
            confirmation: false
        });
    }

    handleDecline = () => {
        this.setState({
            confirmation: false
        });
    }


    render() {
        return (
            <>
            <div className="App">
                <Notification data={constants.notificationProps} />
                {this.state.confirmation ?
                    <Confirmation message={constants.confirmationData.message} type={constants.confirmationData.type}
                        accept={this.handleAccept}
                        decline={this.handleDecline}
                    /> : <QuestionList questions={constants.questions} />
                }
            </div>
            </>
        );
    }
}

export default App;

