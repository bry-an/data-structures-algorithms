# What's the difference between `imperative` and `declarative` programming?

## Basic definitions

**Declarative programming** expresses the logic of computation without describing its control flow. Languages often cited as declarative examples: C, C++, Java

**Imperative programming** uses statements that change a program's state. Languages often cited as imperative examples: SQL, HTML

## Analogy: Make a sandwich

**Declarative approach**: I'd like you to make a peanut butter and jelly sandwich.

**Imperative approach**: I'd like you to take two pieces of bread, apply peanut butter to one slice and jelly to another. Then combine the two pieces of bread together.

Another one liner: imperative is *how* something should be done; declarative is *what* should be done.

## Example in code using JavaScript

### Imperative - DOM

```js
btn.className = ‘btn red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};
container.appendChild(btn);
```

### Declarative - DOM

```js
class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}
```

As you can see, the first example (imperative) specifies exactly what should happen step by step to change the color of the button. The second example (declarative) simply specifies how you'd like the end state of the button to be after interaction. It does not specifify how to do so; in fact, the "how," which is DOM-manipulation, is explicitly abstracted away from the programmer while using React.

### Imperative - Function

```js
function double (arr) {
  let results = []
  for (let i = 0; i < arr.length; i++){
    results.push(arr[i] * 2)
  }
  return results
}
```

### Declarative - Function

```js
function double (arr) {
  return arr.map((item) => item * 2)
}
```

Typically, declarative solutions are an abstraction over some imperative implementation. This is the case with using `map()` instead of a for-loop.

## More contrasting

1. Declarative programming is the "act of programming in languages that conform to the mental model of the developer rather than the operational model fo the machine."

2. Imperative languages "specify explicit manipulation of the computer's internal state" or "specify an explicit sequence of steps to follow."

3. If you can't trace the code as it runs, it's declarative. For example, Regex is 100% declarative since it's untraceable while the pattern is being executed.
