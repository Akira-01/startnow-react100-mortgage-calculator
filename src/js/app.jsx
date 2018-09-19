import React from 'react';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      balance: '', 
      rate: '', 
      output: '', 
      term: ''
    };

    this.updateBalance = this.updateBalance.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.calculateMonthly = this.calculateMonthly.bind(this);
  };
  
  updateBalance(event) {
    this.setState({balance: Number(event.target.value) });
  };

  updateRate(e) {
    this.setState({rate: Number(e.target.value) });
  }


  updateTerm(e){
    this.setState({term: Number(e.target.value) });
}

  calculateMonthly() {
  let { balance , rate, term } = this.state
  rate = rate / 100 / 12
  let monthly = balance * rate * (Math.pow(1 + rate, term*12)) / (Math.pow(1 + rate, term*12) - 1)
  monthly = monthly.toFixed(2)

  this.setState({ output: monthly}) 
}
  
  render() {
    return (
      <div>
        <div className='container'>
          <h3>Mortgage Calculator</h3>
          <hr />
          <input type='number' value={ this.state.balance } name='balance' onChange={ this.updateBalance }/> 
          <input type='number' value={ this.state.rate } name='rate' step='0.01' onChange={ this.updateRate } /> 
          <div name='output' id='output' >  This is your calculated monthly payment: { this.state.output }</div>
          
        </div>
        <select value={ this.state.term } name='term' onChange={ this.updateTerm }>
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <button name='submit'onClick={ this.calculateMonthly }>Submit</button>
      </div>
    );
  }
}

