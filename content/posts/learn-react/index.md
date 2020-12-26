---
title: 'Learn React'
date: '2020-01-10'
---

![React Logo](./react-logo.png)

In this post you'll learn React.

### Topics Covered

1. JSX
2. Components and Props
3. State and Lifecycle

## Introducing JSX

```
const element = <h1>Hello, world!</h1>;
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a explicabo laudantium cum aut aperiam magnam cupiditate accusamus nisi nam labore, officia delectus porro facere totam assumenda. Ad, dicta sed.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a explicabo laudantium cum aut aperiam magnam cupiditate accusamus nisi nam labore, officia delectus porro facere totam assumenda. Ad, dicta sed.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a explicabo laudantium cum aut aperiam magnam cupiditate accusamus nisi nam labore, officia delectus porro facere totam assumenda. Ad, dicta sed.

## Components and Props

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a explicabo laudantium cum aut aperiam magnam cupiditate accusamus nisi nam labore, officia delectus porro facere totam assumenda. Ad, dicta sed.

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a explicabo laudantium cum aut aperiam magnam cupiditate accusamus nisi nam labore, officia delectus porro facere totam assumenda. Ad, dicta sed.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a explicabo laudantium cum aut aperiam magnam cupiditate accusamus nisi nam labore, officia delectus porro facere totam assumenda. Ad, dicta sed.

## State and Lifecycle

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a explicabo laudantium cum aut aperiam magnam cupiditate accusamus nisi nam labore, officia delectus porro facere totam assumenda. Ad, dicta sed.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a explicabo laudantium cum aut aperiam magnam cupiditate accusamus nisi nam labore, officia delectus porro facere totam assumenda. Ad, dicta sed.

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a explicabo laudantium cum aut aperiam magnam cupiditate accusamus nisi nam labore, officia delectus porro facere totam assumenda. Ad, dicta sed.
