var React = require('react');
var ReactDOM = require('react-dom');

class HelloMessage extends React.Component {
    render(){
        return <div>
                    <h1>YOYOIOIO</h1><br/>
                    <div> Hello {this.props.age}</div>
                 </div> ;
    }
}

// var HelloMessage = React.createClass({
//     render: function(){
//         return <div>Hello {this.props.name}</div>;
//     }
// });

// ReactDOM.render(<HelloMessage/>,document.getElementsBy..);

module.exports = HelloMessage ;