import ReactTestUtils  from 'react-dom/test-utils';
import ReactDOM  from 'react-dom';
import React  from 'react';
import { expect } from 'chai';

import Menu from '../Menu.jsx';
import MenuItem from '../MenuItem.jsx';

describe('Menu', () => {

  let events = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' }
  ];

  describe('Rendering', () => {

    // Here we create a mocked MenuItem component.
    class MockedMenuItem extends MenuItem {
      render() {
        return (
          <li className={'mocked-menu-item'}>{this.props.event.name}</li>
        );
      }
    }

    // Here we set the mocked MenuItem component.
    Menu.__Rewire__('MenuItem', MockedMenuItem);

    let menu = ReactTestUtils.renderIntoDocument(
      <Menu events={events} />
    );
    let menuElem = ReactDOM.findDOMNode(menu);
    let items = menuElem.querySelectorAll('li');

    it('Should render the menu items', () => {
      expect(items.length).to.equal(2);
    });

    it('Should render the menu item labels', () => {
      Array.prototype.forEach.call(items, (item, i) => {
        expect(item.textContent.trim()).to.equal(events[i].name);
      });
    });

    it('Should render the mocked menu item', () => {
      expect(menuElem.querySelectorAll('li')[0].className).to.equal('mocked-menu-item');
    });
  });

  describe('Events', () => {

    // Example of simulating browser events.
    it('Should handle click events', () => {

      var clicked = 0;

      class MockedMenuItemWithClickHandler extends MenuItem {
        onItemClick = () => {
          clicked++;
        }
      }

      Menu.__Rewire__('MenuItem', MockedMenuItemWithClickHandler);

      let menu = ReactTestUtils.renderIntoDocument(
        <Menu events={events} />
      );
      let menuElem = ReactDOM.findDOMNode(menu);
      let items = menuElem.querySelectorAll('li');
      let node = items[0].querySelector('a');

      ReactTestUtils.Simulate.click(node);
      ReactTestUtils.Simulate.click(node);

      expect(clicked).to.equal(2);
    });
  });
});
