import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer';
class QuestionList extends Component {
  constructor(props) {
    super(props);
  }
  questionList = this.props.questions.map(function (val, index) {
    return (
      <QuestionContainer key={index} question={val.question} answer={val.answer} />
    );
  })
  render() {
      return (
      <div>
        {this.questionList}
      </div>
    );
  }
}
export default QuestionList;