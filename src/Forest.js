import React, { Component } from 'react'
import sprout from './components/sprout.png'
import tree from './components/tree.png'

export class Forest extends Component {
 constructor (props){
     super(props);

     this.state ={
         imageURL : sprout,
         text : 'this is sprout'

     }
     
 }
 grow = () =>{
     console.log('Clicked');
    this.setState = ({
        imageURL : tree,
        text : 'this is tree'
    })
}

  render() {
    return (
      <div>
        <img 
        style = {{width : '100px', height : '100px'}}
        src={this.state.imageURL} 
        onClick={this.grow}
        alt='' 
        />
        <h3>{this.state.text}</h3>
      </div>
    )
  }
}

export default Forest
