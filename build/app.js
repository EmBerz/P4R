/** @jsx React.DOM */
(function (){
/**PLurlsight Course*/
  'use strict';
  var Quiz = React.createClass({displayName: "Quiz",

    render: function(){
      return React.createElement("div", null, 
        this.props.books.map(function(book){
          return React.createElement(Book, {title: book})
        })
      );
    }
  });
  var Book = React.createClass({displayName: "Book",
    render: function(){
      return React.createElement("div", null, React.createElement("h4", null, this.props.title))
    }
  })
  React.render(React.createElement(Quiz, {books: ["foo", "Parable of the Sower", "Anciliary Sword", "Blindess"]}), document.getElementById('quiz'));
  
/**Protocol For Relaxation*/
  var Protocol = React.createClass({displayName: "Protocol",
    render: function(){
      return React.createElement("ul", null, 
                this.props.instructions.map(function(instruction){
                return React.createElement(Instruction, {text: instruction})
              })
              )
    }
  });
  var Instruction = React.createClass({displayName: "Instruction",
    render: function(){
      return React.createElement("li", null, 
                React.createElement("a", null, "@ "), React.createElement("span", null, this.props.text)
             )
    }
  })
  var Slide = React.createClass({displayName: "Slide",
    render: function(){
      return React.createElement("div", null, React.createElement("h1", null, "\"Protocol for Relaxation\""), 
              React.createElement("h2", null, " Day ", this.props.day), 
              React.createElement(Protocol, {instructions: this.props.instructions})
              )
    }

  });

  React.render(React.createElement(Slide, {day: "1", instructions: ["Walk clockwise around the dog", "sit while you clap for 5 seconds", "sit while you jog backwards for 5 seconds"]}), document.getElementById("app"))

})();