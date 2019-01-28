import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {BurgerBuilder} from './index';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls';

configure({ adapter: new Adapter() });

describe('BurgerBuilder', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder initIngredients={() => {}} totalPrice={0} />)
    });

    it('should render BurgerBuildControls when props has ingredients', () => {
        wrapper.setProps({ ingredients: { salad: 0 } })
        expect(wrapper.find(BurgerBuildControls)).toHaveLength(1);
    });
});