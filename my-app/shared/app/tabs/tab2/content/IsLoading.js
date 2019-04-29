// import React from 'react';

// class IsLoading extends React.Component { 
//   constructor(props) {
//     super(props);
//     // initialise our state
//     this.state = { isLoading: false };
//   }
  
//   componentDidCatch(error, info) {
//     // if we have a promise then we can deal with it
//     if(error instanceof Promise) {
//       // we have a promise so lets update our state
//       this.setState({ isLoading: true });
//       // once the promise has resolved we can update our state again and grab the data
//       error.then((data) => this.setState({ isLoading: false, data }));
//     } 
//   }
  
//   render() {
//     // as props.children is a function, let's invoke it and p ass in out state
//     return this.props.children(this.state) }
//   }
// }

// const Loader = props => (
//   <IsLoading>
//     // this is the function that gets called in the render met hod above
//     {({isLoading, data}) => (
//       isLoading
//       // show some loading text if we're loading
//       ? "Loading..."
//       // copy our children and pass in the data as a prop : 
//       React.cloneElement(props.children, {data})
//     )}
//   </IsLoading>
// );