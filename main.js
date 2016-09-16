let App = React.createClass({
  getInitialState(){
     return{
      newAnswer: "",
      correctAnswer:'',
      rand1:Math.floor((Math.random() * 20)),
      rand2:Math.floor((Math.random() * 20)),
      score:0,
      func:["+","-","*"],
      rand3:Math.floor(Math.random()*3),
   }
  },

  onInputChange(e){
    this.setState({newAnswer: e.target.value})
  },

  checkAnswer(){
    let answer = this.refs.newAnswer.value;
    let {rand1,rand2,rand3} = this.state;
    if( rand3 == 0) {
    if( answer == (rand1+rand2)){
      this.setState({
        score: this.state.score +1,
        correctAnswer: rand1+rand2,
        newAnswer: ''
      })
    }
    else{
      this.setState({
        score: this.state.score -1,
        correctAnswer: rand1+rand2,
        newAnswer: ''
      })
    }
  }
  else if (rand3 ==1){
    if( answer == (rand1-rand2)){
      this.setState({
        score: this.state.score +1,
        correctAnswer: rand1-rand2,
        newAnswer: ''
      })
    }
    else{
      this.setState({
        score: this.state.score -1,
        correctAnswer: rand1-rand2,
        newAnswer: ''
      })
    }

  }
  else if (rand3 ==2){
    if( answer == (rand1*rand2)){
      this.setState({
        score: this.state.score +1,
        correctAnswer: rand1*rand2,
        newAnswer: ''

      })
    }
    else{
      this.setState({
        score: this.state.score -1,
        correctAnswer: rand1*rand2,
        newAnswer: ''
      })
    }

  }
    setTimeout(() => {
    this.setState({
      rand1:Math.floor((Math.random() * 20)),
      rand2:Math.floor((Math.random() * 20)),
      rand3:Math.floor(Math.random()*3)
    })},500);

  },

  clear(){
    this.setState({
      newAnswer: ''
    })
  },
  buttonInput(event){

    let pButton =event.target.value;
    let newAnswer=this.state.newAnswer;
    this.setState({
      newAnswer:newAnswer.concat(pButton),
    })
  },
  render(){
    let { newAnswer,rand1,rand2,rand3,score,correctAnswer,func} = this.state;

    var barStyle =score*10 + '%';
    return (
      <div>
        <h1>Math Game</h1>
        <h4>Question: {rand1} {func[rand3]} {rand2} = ?</h4>
        <span className="row">
        <button onClick={this.buttonInput} value ="0">0</button>
        <button onClick={this.buttonInput} value ="1">1</button>
        <button onClick={this.buttonInput} value ="2">2</button>
        <button onClick={this.buttonInput} value ="3">3</button>
        <button onClick={this.buttonInput} value ="4">4</button>
        <button onClick={this.buttonInput} value ="5">5</button>
        <button onClick={this.buttonInput} value ="6">6</button>
        <button onClick={this.buttonInput} value ="7">7</button>
        <button onClick={this.buttonInput} value ="8">8</button>
        <button onClick={this.buttonInput} value ="9">9</button>
        <button onClick={this.buttonInput} value ="0">0</button>
        </span>
        <span className="row">
        <input type="text" ref="newAnswer" value = {newAnswer} onChange={this.onInputChange}/>
        <button disabled ={newAnswer.length <1} onClick={this.clear}>Clear</button>
        <button onClick={this.checkAnswer}>Skip</button>
        <button disabled ={newAnswer.length <1} className ="btn btn-sm btn-warning" onClick={this.checkAnswer}>Submit</button>
        </span>
        <h4 id="showAnswer">Correct Answer: {correctAnswer}</h4>
        <h4>Total Score: {score} </h4>
        <div className="progress">
        <div className="progress-bar progress-bar-striped active" role="progressbar"
  aria-valuenow={score} aria-valuemin="1" aria-valuemax="10" style={{width : barStyle}}></div>
</div>
      </div>
    )
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
