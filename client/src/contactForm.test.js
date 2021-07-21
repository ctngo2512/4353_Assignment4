import React from 'react';
import fire from './fire';
import Hero from './Hero';
import ContactForm from './contactForm';
import {shallow, mount} from 'enzyme';
import {act, render} from '@testing-library/react';


window.alert = jest.fn();

describe('Contact Form component tests', ()=> {

    window.alert.mockClear();

    let handleValidation;
    let handleFormSubmit;

    it("renders without crashing", () => {
        shallow(<Hero />);
    });

    it ('calls onSubmit prop function when form is submitted', () => {
        const wrapper = shallow(<ContactForm onSubmit={handleFormSubmit}/>);
        const form = wrapper.find('form');
        form.simulate('submit');
    })

    it('Renders user data', () => {
        let fakeUser = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }

        let snapshot = {val: () => fakeUser};
        jest.spyOn(fire, 'database').mockImplementation(() => ({
            ref: jest.fn().mockReturnThis(),
            on: jest.fn((event, callback) => callback(snapshot))
        }));
    
        act(() => {
            render(<ContactForm/>);
        });
    });

});