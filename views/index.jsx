var React = require('react');
var MasterLayout = require('./masterlayout');

var HelloMessage = React.createClass({


    render:function(){
        return (
            <MasterLayout title={this.props.title}>
                <div>
                    <h1>YOYOIOIO</h1><br/>
                    <div> Hello {this.props.age} </div>
                </div>
            </MasterLayout>
        );
    }
});

module.exports = HelloMessage ;