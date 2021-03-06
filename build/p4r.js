/** @jsx React.DOM */
(function (){
/**Protocol For Relaxation*/
var data = [
  { day: 1,
    instructions: ["Sit for 5 seconds","Sit for 10 seconds","Sit while you take 1 step back and return","Sit while you take 2 steps back and return","Sit for 10 seconds","Sit while you take 1 step to the right and return","Sit while you take 1 step to the left and return","Sit for 10 seconds","Sit while you take 2 steps back and return","Sit while you take 2 steps to the right and return","Sit for 15 seconds","Sit while you take 2 steps to the left and return","Sit while you clap your hands softly once","Sit while you take 3 steps back and return","Sit while you count out loud to 10","Sit while you clap your hands softly once", "Sit while you count out loud to 20","Sit while you take 3 steps to the right and return","Sit while you clap your hands softly twice","Sit for 3 seconds","Sit for 5 seconds", "Sit while you take 1 step back and return","Sit for 3 seconds","Sit for 10 seconds", "Sit for 5 seconds","Sit for 3 seconds"]
    
  },
  {
    day: 2,
    instructions: ["Sit for 10 seconds","Sit while you take 1 step back and return","Sit while you take 3 steps back and return ","Sit for 10 seconds","Sit while you take 3 steps to the right and return ","Sit while you take 3 steps to the left and return ","Sit for 10 seconds","Sit while you take 3 steps to the right and clap your hands ","Sit while you take 3 steps to the left and clap your hands","Sit for 5 seconds","Sit for 10 seconds","Sit while you walk one fourth of the way around the dog to the right ","Sit while you take 4 steps back","Sit while you walk one fourth of the way around the dog to the left ","Sit for 10 seconds","Sit while you take 5 steps back from the dog, clapping your hands, and return","Sit while you walk halfway around the dog to the right and return ","Sit while you walk halfway around the dog to the left and return ","Sit for 10 seconds","Sit while you jog quietly in place for 3 seconds ","Sit while you jog quietly in place for 5 seconds ","Sit while you jog quietly in place for 10 seconds ","Sit for 10 seconds","Sit while you jog one fourth of the way around the dog to the right and return","Sit while you jog one fourth of the way around the dog to the left and return","Sit for 5 seconds","Sit for 10 seconds"]
   
  }
]
  var Protocol = React.createClass({displayName: "Protocol",
    getInitialState: function(){
      return {
        currentDay: 1
      }
    },
    prevDay: function(){
      if(this.state.currentDay >1){
        this.setState({currentDay: this.state.currentDay-1});
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
                    React.createElement("header", {className: "nav"}, 
                      React.createElement("div", {className: "col-md-2", onClick: this.prevDay}, React.createElement("div", {className: "arrow-left"})), 
                      React.createElement("div", {className: "col-md-8"}, "Day ", this.state.currentDay), 
                      React.createElement("div", {className: "col-md-2", onClick: this.nextDay}, React.createElement("div", {className: "arrow-right"}))
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
      return React.createElement("li", {className: "row", onClick: this.markAsFailed}, 
                React.createElement("i", {className: this.state.failed? "col-md-1 fa fa-thumbs-o-down" : "col-md-1 "}), 
                React.createElement("span", {className: "col-md-11"}, this.props.text)
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