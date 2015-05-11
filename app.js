/** @jsx React.DOM */
(function (){
  'use strict';
  var Quiz = React.createClass({

    render: function(){
      return <div>boo {this.props.data}</div>;
    }
  });
  React.render(<Quiz data={"foo"}/>, document.getElementById('app'));

})();