import ReactDOM from 'react-dom';
import Footer from '../Footer.jsx';
import { expect } from 'chai';

let { TestUtils } = ReactDOM;

describe('Footer', () => {
  it('Should have the correct footer element', () => {
    let footer = TestUtils.renderIntoDocument(
      <Footer />
    );
    let footerElem = React.findDOMNode(footer);
    expect(footerElem.tagName.toLowerCase()).to.equal('footer');
  });
});
