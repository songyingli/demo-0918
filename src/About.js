import React, { PropTypes } from 'react';
import {searchGit} from './utils/helpers';


class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      inputValue:'username'
    }
  }
  componentDidMount(){
    // searchGit()
    // .then((data)=>{
    //   console.log(data)
    //   this.setState({
    //     data:data.data,
    //     wait:false
    //   })
    //   console.log(this.state.data)
    // })
  }
  handleInput(e){
    // console.log(e);
    let value=e.target.value;
    this.setState({inputValue:value})
  }
  handleClick(){
    let name=this.state.inputValue;
    console.log(name);
    searchGit(name)
    .then((data)=>{
      console.log(data)
      this.setState({
        data:data.data,
        wait:false
      })
      console.log(this.state.data)
    })
  }
  render () {
    let gitInfo=(
      <div>
        <h3>{this.state.data.login}</h3>
        <h3>{this.state.data.url}</h3>
        <img src={this.state.data.avatar_url}/>
      </div>
    )
    return(
      <div>
        <input type='text' value={this.state.inputValue} onChange={this.handleInput.bind(this)}/ ><button onClick={this.handleClick.bind(this)}>搜索</button><br/>
        {
          this.state.wait ? '正在获取数据' :gitInfo
        }
      </div>
    )
  }
}

export default About;
