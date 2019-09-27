import React from 'react';
import { mount } from 'enzyme';

import Heroes from "./Heroes";

describe('Hero Component', () => {

    it('will contain a hero with a name and id', () => {
        const heroesComponentWrapper = mount(<Heroes id={-1} name={'TestName'} />)
        // cannot use shallow here, must be mount
        expect(heroesComponentWrapper.prop('id')).toEqual(-1)
        expect(heroesComponentWrapper.prop('name')).toEqual('TestName')
    });

})


