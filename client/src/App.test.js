import React, {useEffect} from 'react';
import App from './App';
import Hero from './Hero';
import {handleLogout} from './App';
import {authListener} from './App';
import {configure, shallow, mount} from 'enzyme';
import {act, render} from '@testing-library/react';
import fire from './fire';

describe('App component tests', ()=> {
      
    it("renders without crashing", () => {
        shallow(<App />);
    });

    test('should handle login and hero', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
        const wrapper2 = mount(<Hero handleLogout = {handleLogout}/>);
        expect(wrapper2).toMatchSnapshot();
    });

});