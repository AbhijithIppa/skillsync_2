import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./ModalQ.css"
class ModalQ extends Component {
 constructor() {
    super();
    this.state = {
      show: true,
      score: 0,
      questions: [
        {
          questionText: 'What is the output of 1+(+"1"?',
          options: [
            { optionText: '11', isCorrect: false },
            { optionText: '2', isCorrect: true },
            { optionText: '1(1', isCorrect: false },
            { optionText: 'Not defined', isCorrect: false },
       ],
},
      ],
      currentQuestionIndex: 0,
    };
 }

 handleOptionClick(option) {
    const { currentQuestionIndex, questions, score } = this.state;
    const currentQuestion = questions[currentQuestionIndex];
    if (option.isCorrect) {
      this.setState({ score: score + 10 });
    }
    if (currentQuestionIndex < questions.length - 1) {
      this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
    } else {
      this.setState({ show: false });
      setTimeout(() => {
        alert(`Quiz completed. Your score is 10`);
      }, 300);
    }
 }

 render() {
    const { show, questions, currentQuestionIndex, score } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="App">
        <Modal show={show} onHide={() => this.setState({ show: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Quiz Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="question-container">
              <h2>{currentQuestion.questionText}</h2>
              {currentQuestion.options.map((option, index) => (
                <button
                 key={index}
                 onClick={() => this.handleOptionClick(option)}
                >
                 {option.optionText}
                </button>
              ))}
            </div>
            <div className="score-container">
              <h2>Score: {score}</h2>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({ show: false })}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
 }
}

export default ModalQ;