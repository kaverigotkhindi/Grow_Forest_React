import React, { Component } from 'react'
import sprout from './components/sprout.png'
import tree from './components/tree.png'

class Forest extends Component {
 constructor (props){
     super(props)

     this.state = {
         imageURL : sprout,
         text : 'this is sprout'

     };
     
 }
 Grow = () =>{
     console.log('Clicked');

    this.setState  ({
        imageURL : tree,
        text : 'this is tree'
    })
}

  render() {
    return (
      <div>
        <img 
        style = {{width : '300px', height : '300px'}}
        src = {this.state.imageURL} 
        onClick = {this.Grow}
        alt='' 
        />
        <h3 style={{fontSize : '50px'}}>{this.state.text}</h3>
      </div>
    )
  }
}

export default Forest
