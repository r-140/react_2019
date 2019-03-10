import  React, {Fragment} from 'react';
import {connect} from "react-redux";
import {loadAssets} from "../../../reducers"

 class DynamicRender extends React.Component {

    state = {inputValue:""};
  componentDidMount() {
      // this.props.loadAssets(5000)
  }

  onSearch = () => {this.props.loadAssets(this.state.inputValue)};

  render() {
      const { assets} = this.props;

      console.log("asets " + assets);

      return (
        
       <ul>
      
           <input value={this.state.inputValue} onChange={(event) => this.setState({inputValue: event.target.value})}/>
           <button onClick={this.onSearch}>Search</button>
         {Object.keys(assets).map(key => (
           <li key={key}>
             {'Author:' + key + ' count: ' + assets[key]}
           </li>
         ))}
       </ul>

      );
    }
  // }
}

export default connect(state => {
    console.log(state);
    return state
}, {loadAssets})(DynamicRender)




