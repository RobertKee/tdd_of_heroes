import React from 'react';
import { shallow, mount } from 'enzyme';

import Hero from "./Hero";

describe('Hero Component', () => {

    // setup
    it('will contain props with a name and id', () => {
        const heroComponentWrapper = mount(<Hero id={-1} name={'TestName'} />)
        // cannot use shallow here, must be mount
        expect(heroComponentWrapper.prop('id')).toEqual(-1)
        expect(heroComponentWrapper.prop('name')).toEqual('TestName')
    });

    it('will set the hero name as placeholder text in state', () => {
        const heroComponentWrapper = mount(<Hero id={-1} name={'Test Name'} />)
        expect(heroComponentWrapper.state().placeholderName).toBe('Test Name')
    })

    // rendering
    it('will render an h2 with the hero name', () => {
        const heroComponentWrapper = mount(<Hero id={-1} name={'Test Name'} />)
        expect(heroComponentWrapper.find('h2').text()).toBe('TEST NAME Details')
    })

    it('will render a div with the hero id', () => {
        const heroComponentWrapper = mount(<Hero id={-1} name={'Test Name'} />)
        expect(heroComponentWrapper.find('div').at(1).text()).toBe('id: -1')
    })

    it('will render a label for the hero name', () => {
        const heroComponentWrapper = mount(<Hero id={-1} name={'Test Name'} />)
        expect(heroComponentWrapper.find('label').text()).toBe('name:')
    })

    it('will render an input for the hero name', () => {
        const heroComponentWrapper = mount(<Hero id={-1} name={'Test Name'} />)
        expect(heroComponentWrapper.find('input').prop('defaultValue')).toBe('Test Name')
    })

})


