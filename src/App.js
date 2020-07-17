import React,{Component} from 'react';
import Detail from'./Detail';
import Axios from 'axios';
import './App.css';
import './bootstrap.css';

class App extends Component {

  constructor(porps){
    super(porps)
      this.state={rows:[]}
  }
  componentDidMount(){
    this.search('ทะเล')
  }
  onClick = val => {
    this.search(val);
  }

  search = (keyword) =>{
    console.log(keyword)
    var dataArray=[]
    var url = 'http://localhost:9000/api/trips?keyword='+ keyword;
    Axios.get(url).then(result=>{
      console.log(JSON.stringify(result.data))
      result.data.forEach(item => {
        dataArray.push(item) 
      })
      this.setState({rows : dataArray})
     })
  }

  render(){
      return <div> <h1 class = "header">เที่ยวไหนดี</h1>
        <div class="md-form">
          <div>
          <input type="text" id="form1" class="form-control" width ="50%" placeholder="หาที่เที่ยวแล้วไปกัน..." 
          onChange = {(event)=>{ this.search(event.target.value) }}></input>
            <div>
              { this.state.rows.map(item => (
                <Detail trips= {item} onClick = {this.onClick}/>
              )) }
            </div>
            <div><p class = "font" style = {{textAlign : "right"}}> Created by BoomMazachii</p></div>
          </div>
        </div>
    </div>
    
   }
}

export default App;
