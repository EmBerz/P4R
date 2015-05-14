/** @jsx React.DOM */
(function (){
/**Protocol For Relaxation*/
var data = [
  { day: 1,
    instructions: ["Sit for 5 seconds","Sit for 10 seconds","Sit while you take 1 step back and return","Sit while you take 2 steps back and return","Sit for 10 seconds","Sit while you take 1 step to the right and return","Sit while you take 1 step to the left and return","Sit for 10 seconds","Sit while you take 2 steps back and return","Sit while you take 2 steps to the right and return","Sit for 15 seconds","Sit while you take 2 steps to the left and return","Sit while you clap your hands softly once","Sit while you take 3 steps back and return","Sit while you count out loud to 10","Sit while you clap your hands softly once", "Sit while you count out loud to 20","Sit while you take 3 steps to the right and return","Sit while you clap your hands softly twice","Sit for 3 seconds","Sit for 5 seconds", "Sit while you take 1 step back and return","Sit for 3 seconds","Sit for 10 seconds", "Sit for 5 seconds","Sit for 3 seconds"]
    
  },
  {
    day: 2,
    instructions: ["Walk half way around the dog to the left ", "sit while you clap for 15 seconds", "sit while you jog backwards for 2 seconds"]
   
  }
]
  var Protocol = React.createClass({displayName: "Protocol",
    getInitialState: function(){
      return {
        currentDay: 1
      }
    },
    nextDay: function(){
      if(this.state.currentDay ===this.props.instructions.length){
        alert("Congrats! You've completed the protocol, start at the beginning and make your dog do more instructions in a row without a treat.")
        this.setState({currentDay: 1});
      }else{
        this.setState({currentDay: this.state.currentDay+1});
      }
    },
    render: function(){
          console.log("props ", this.props.instructions);
          var current = this.props.instructions[this.state.currentDay-1];
          return  React.createElement("div", {className: "day "}, 
                    React.createElement("h3", null, 
                      React.createElement("div", {className: "col-md-1"}, "Left"), 
                      React.createElement("div", {className: "col-md-10"}, "Day ", this.state.currentDay), 
                      React.createElement("div", {className: "col-md-1", onClick: this.nextDay}, "Right")
                    ), 
                    React.createElement("ul", null, 
                      current.instructions.map(function(i){
                        return React.createElement(Instruction, {text: i})
                      })
                    )
                  )

    }
  });
  var Instruction = React.createClass({displayName: "Instruction",
    getInitialState: function(){
      return {
        failed: false
      }
    },
    propTypes: {
      text: React.PropTypes.string
    },
    markAsFailed : function(e){
      console.log("failed ", this.props.text);
      this.setState({failed:true});
    },
    render: function(){
      return React.createElement("a", {onClick: this.markAsFailed}, 
              React.createElement("li", {className: "row"}, 
                React.createElement("span", null, this.props.text)
             )
             )
    }
  })
  var Slide = React.createClass({displayName: "Slide",
    title: 'Protocol for Relaxation',
    getInitialState: function (){
      return {
        instructions: data
      }
    },
    render: function(){
      return React.createElement("div", {className: "slide"}, 
                React.createElement("header", null, React.createElement("h1", null, this.title)), 
                React.createElement(Protocol, {instructions: this.state.instructions})
             )
    }

  });

  React.render(React.createElement(Slide, null), document.getElementById("app"))

})();