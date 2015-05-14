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

  var Quiz = React.createClass({
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
      return (<div>
        <div className="row">
          <div className="col-md-4">
            <img src={this.state.author.imageURL} className="author" alt={this.state.author.name}/>
          </div>
          <div className="col-md-7">
        {this.state.books.map(function(book){
          return <Book OnBookSelected={this.handleBookSelected} title={book}/>
        }, this)}            
          </div>
          <div className={"col-md-1 "+ this.state.bgClass}>

          </div>
        </div>
      {this.state.showContinue ? 
          (<div className="row">
              <div className="col-md-12">
                <input onClick={this.handleContinue} type="button" value="Continue"></input>
              </div>
            </div>) : <span/>
      }
      </div>
      );
    }
  });
  var Book = React.createClass({
    propTypes:{
      title: React.PropTypes.string.isRequired
    },
    handleClick: function(){
      console.log("Handle CLick");
      this.props.OnBookSelected(this.props.title);
    },
    render: function(){
      return <div onClick={this.handleClick} className="answer"><h4>{this.props.title}</h4></div>
    }
  })
  React.render(<Quiz data={data}/>, document.getElementById('quiz'));
 })(); 
