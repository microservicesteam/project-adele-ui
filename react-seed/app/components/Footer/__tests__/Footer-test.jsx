import ReactTestUtils  from 'react-dom/test-utils';
import ReactDOM  from 'react-dom';
import React  from 'react';
import Footer from '../Footer.jsx';
import { expect } from 'chai';

describe('Footer', () => {
  it('Should have the correct footer element', () => {
    let footer = ReactTestUtils.renderIntoDocument(
      <Footer />
    );
    let footerElem = ReactDOM.findDOMNode(footer);
    expect(footerElem.tagName.toLowerCase()).to.equal('footer');

  });
});
