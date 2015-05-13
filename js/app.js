/** @jsx React.DOM */
(function (){
/**PLurlsight Course*/
  'use strict';
  
  var data = [
    {name: 'Mark Twain',
    imageURL: 'images/authors/marktwain.jpg',
    books: ['The Adventure of Huckleberry Finn']},
    {name 'Octavia Butler',
      imageURL: 'images/authors/octaviabutler',
      books: ['Parable of the Sower', 'Wild Seed', 'Kindred', 'Fledgling']}
  ]
  var Quiz = React.createClass({
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
      return <div>
        <div className="row">
          <div className="col-md-4">
            <img src={this.state.author.imageURL} className="author">
          </div>
          <div className="col-md-7">
        {this.state.books.map(function(book){
          return <Book title={book}/>
        }, this)}            
          </div>
          <div className="col-md-1">

          </div>
        </div>

      </div>;
    }
  });
  var Book = React.createClass({
    propTypes:{
      title: React.PropTypes.string.isRequired
    },
    render: function(){
      return <div><h4>{this.props.title}</h4></div>
    }
  })
  React.render(<Quiz data={data}/>, document.getElementById('quiz'));
  
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
    propTypes: {
      text: React.PropTypes.string
    },
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