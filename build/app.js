/** @jsx React.DOM */
(function (){
/**PLurlsight Course*/
  'use strict';
  
  var data = [
    { name: "Ramez Naam",
      imageURL: "images/authors/rameznaam.jpg",
      books: ["Nexus","Crux","Apex"]
    },
    { name: 'Mark Twain',
      imageURL: 'images/authors/marktwain.jpg',
      books: ['The Adventure of Huckleberry Finn']
    },
    { name: 'Octavia Butler',
      imageURL: 'images/authors/octaviabutler',
      books: ['Parable of the Sower', 'Wild Seed', 'Kindred', 'Fledgling']
    },
  ]
  data.selectGame = function(){
    var books = _.shuffle(this.reduce(function(p,c,i){
        return p.concat(c.books);
    }, [])).slice(0,4);

    var answer = books[_.random(books.length-1)];

    return{
      books: books,
      author: _.find(this, function(author){
        return author.books.some(function(title){
          return title ===answer;
        });
      }),
      checkAnswer: function(title){
        console.log("CHECK ANSWER ", title);
        return this.author.books.some(function (t){
          return t ===title;
        });
      }
    }
  }

  var Quiz = React.createClass({displayName: "Quiz",
    propTypes: {
      data: React.PropTypes.array.isRequired
    },
    getInitialState: function(){
      console.log(data.selectGame());
      return _.extend({bgClass: 'neutral', showContinue: false}, this.props.data.selectGame());
    },
    handleBookSelected: function(title){
      console.log("Handle Book Selected: ", title);
      var isCorrect = this.state.checkAnswer(title);
      
      this.setState({
        bgClass: isCorrect ? 'pass' : 'fail',
        showContinue: isCorrect 
      });
    },
    handleContinue: function(){
      this.setState(this.getInitialState());
    },
    render: function(){
      return (React.createElement("div", null, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-md-4"}, 
            React.createElement("img", {src: this.state.author.imageURL, className: "author", alt: this.state.author.name})
          ), 
          React.createElement("div", {className: "col-md-7"}, 
        this.state.books.map(function(book){
          return React.createElement(Book, {OnBookSelected: this.handleBookSelected, title: book})
        }, this)
          ), 
          React.createElement("div", {className: "col-md-1 "+ this.state.bgClass}

          )
        ), 
      this.state.showContinue ? 
          (React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-md-12"}, 
                React.createElement("input", {onClick: this.handleContinue, type: "button", value: "Continue"})
              )
            )) : React.createElement("span", null)
      
      )
      );
    }
  });
  var Book = React.createClass({displayName: "Book",
    propTypes:{
      title: React.PropTypes.string.isRequired
    },
    handleClick: function(){
      console.log("Handle CLick");
      this.props.OnBookSelected(this.props.title);
    },
    render: function(){
      return React.createElement("div", {onClick: this.handleClick, className: "answer"}, React.createElement("h4", null, this.props.title))
    }
  })
  React.render(React.createElement(Quiz, {data: data}), document.getElementById('quiz'));
 })(); 
