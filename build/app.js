/** @jsx React.DOM */
(function (){
/**PLurlsight Course*/
  'use strict';
  
  var data = [
    { name: 'Octavia Butler',
      imageURL: 'images/authors/octaviabutler',
      books: ['Parable of the Sower', 'Wild Seed', 'Kindred', 'Fledgling']
    },
    { name: 'Mark Twain',
      imageURL: 'images/authors/marktwain.jpg',
      books: ['The Adventure of Huckleberry Finn']
    }
  ]
  var Quiz = React.createClass({displayName: "Quiz",
    propTypes: {
      books: React.PropTypes.array.isRequired
    },
    getInitialState: function(){
      return {
        author: this.props.data[0],
        books: this.props.data[0].books
      };
    },
    render: function(){
      return React.createElement("div", null, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-md-4"}, 
            React.createElement("img", {src: this.state.author.imageURL, className: "author"})
          ), 
          React.createElement("div", {className: "col-md-7"}, 
        this.state.books.map(function(book){
          return React.createElement(Book, {title: book})
        }, this)
          ), 
          React.createElement("div", {className: "col-md-1"}

          )
        )

      );
    }
  });
  var Book = React.createClass({displayName: "Book",
    propTypes:{
      title: React.PropTypes.string.isRequired
    },
    render: function(){
      return React.createElement("div", {className: "answer"}, React.createElement("h4", null, this.props.title))
    }
  })
  React.render(React.createElement(Quiz, {data: data}), document.getElementById('quiz'));
  
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
    propTypes: {
      text: React.PropTypes.string
    },
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