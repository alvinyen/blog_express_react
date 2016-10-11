var React = require('react');

class MasterLayout extends React.Component{
    constructor(props){
        super(props);
        //this.increment = this.increment.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        this.state = { count : 0 };
    }
    handleChange(e){
        //e.preventDefault();
        //this.setState({ count : this.state.count+1 });
        //console.log('YOYO');
        this.setState({ count : e.target.count  });
    }
    render(){
        return (
            <html>
            <head>
                <title> {this.props.title} </title>
            </head>
            <body>
            <div>{this.state.count}</div>
            <button onChange={this.handleChange}>+1</button>
            {this.props.children}
            </body>
            </html>
        );
    }
}

module.exports = MasterLayout ;