import React from 'react';
import { shallow, mount } from 'enzyme';

import Hero from "./Hero";

describe('Hero Component', () => {

    it('will contain a hero with a name and id', () => {
        const heroComponentWrapper = mount(<Hero id={-1} name={'TestName'} />)
        // cannot use shallow here, must be mount
        expect(heroComponentWrapper.prop('id')).toEqual(-1)
        expect(heroComponentWrapper.prop('name')).toEqual('TestName')
    });

})


