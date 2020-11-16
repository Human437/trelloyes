// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the List component available
import List from './list.js';

//makes renderer available, needed for snapshot test to work
import renderer from 'react-test-renderer';

// this is the smoke test
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List header = 'test' cards = {[{title: 'test', content: 'test content'}]} />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

//this is the snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header = 'test' cards = {[{title: 'test', content: 'test content'}]}  />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });