import React, { PropTypes } from 'react';
import marked from 'marked'
import { getMd } from './utils/helpers'
import hgls from 'highlight.js'


class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    let add=this.props.params.title;
    getMd(add)
    .then( (recData)=>{

      this.setState({
        data:recData.getMd,
        wait:false
      })
    //  console.log(this.state.data)
    });
  }


  render () {
    marked.setOptions({
      highlight: function (code) {
        return hgls.highlightAuto(code).value;
      }
    });
    // console.log(this.props);
    let content=this.state.wait ? "数据下载中，请等待……" : marked(this.state.data);
    return(

      <div>
        <div dangerouslySetInnerHTML={{__html:content}} className="post-content" />
      </div>
    )
  }
}

export default Blog;
