let App = React.createClass({
  getInitialState(){
     return{
      newAnswer: "",
      correctAnswer:' ',
      rand1:Math.floor((Math.random() * 20)),
      rand2:Math.floor((Math.random() * 20)),
      score:0,
      func:["+","-","*"],
      rand3:Math.floor(Math.random()*3),
      lose: 'hidden',
      win: 'hidden'
   }
  },

  onInputChange(e){
    this.setState({newAnswer: e.target.value})
  },

  checkAnswer(){
    let answer = this.refs.newAnswer.value;
    let {rand1,rand2,rand3,score,lose,win} = this.state;
    let tempAnswer ="";
    let tempScore =0;

    if( rand3 == 0) {tempAnswer =rand1+rand2;}
    else if (rand3 ==1){tempAnswer =rand1-rand2;}
    else if (rand3 ==2){tempAnswer =rand1*rand2;}

    if( answer == tempAnswer ){tempScore= score +1;
    this.setState({
      lose:'hidden',
      win:'show'
    })
  }
    else{tempScore= score -1;
    this.setState({
      lose:'show',
      win:'hidden'
    })
  }

    this.setState({
        score: tempScore,
        correctAnswer: tempAnswer,
        newAnswer: ''
      })

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
    let { newAnswer,rand1,rand2,rand3,score,correctAnswer,func,lose,win} = this.state;

    var barStyle =score*10 + '%';
    return (
      <div>
        <h5>Mini Math Game</h5>
        <h1>Question: {rand1} {func[rand3]} {rand2} = {newAnswer} ?</h1>
        <h3 ref="correctAnswer" className={lose}>Sorry! The correct answer was {correctAnswer}</h3>
        <h2 className={win}> Yay! Way to go!</h2>
        <span className="row">
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="0">0</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="1">1</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="2">2</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="3">3</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="4">4</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="5">5</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="6">6</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="7">7</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="8">8</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="9">9</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="0">0</button>
        <button className ="btn btn-sm btn-default" onClick={this.buttonInput} value ="-">-</button>
        </span>
        <span className="row">
        <input type="text" ref="newAnswer" value = {newAnswer} onChange={this.onInputChange}/>
        </span>
        <span className="row">
        <button disabled ={newAnswer.length <1} className ="btn btn-sm btn-info" onClick={this.clear}>Clear</button>
        <button className ="btn btn-sm btn-danger" onClick={this.checkAnswer}>Skip</button>
        <button disabled ={newAnswer.length <1} className ="btn btn-sm btn-warning" onClick={this.checkAnswer}>Submit</button>
        </span>
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
