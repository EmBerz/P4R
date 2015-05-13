/** @jsx React.DOM */
(function (){
/**PLurlsight Course*/
  'use strict';
  var Quiz = React.createClass({

    render: function(){
      return <div>
        {this.props.books.map(function(book){
          return <Book title={book}/>
        })}
      </div>;
    }
  });
  var Book = React.createClass({
    render: function(){
      return <div><h4>{this.props.title}</h4></div>
    }
  })
  React.render(<Quiz books={["foo", "Parable of the Sower", "Anciliary Sword", "Blindess"]}/>, document.getElementById('quiz'));
  
/**Protocol For Relaxation*/
  var Protocol = React.createClass({
    render: function(){
      return <ul>              
                {this.props.instructions.map(function(instruction){
                return <Instruction text={instruction} />
              })}
              </ul>
    }
  });
  var Instruction = React.createClass({
    render: function(){
      return <li>
                <a>@ </a><span>{this.props.text}</span>
             </li>
    }
  })
  var Slide = React.createClass({
    render: function(){
      return <div><h1>"Protocol for Relaxation"</h1>
              <h2> Day {this.props.day}</h2>
              <Protocol instructions={this.props.instructions}/>
              </div>
    }

  });

  React.render(<Slide day="1" instructions={["Walk clockwise around the dog", "sit while you clap for 5 seconds", "sit while you jog backwards for 5 seconds"]}/>, document.getElementById("app"))

})();