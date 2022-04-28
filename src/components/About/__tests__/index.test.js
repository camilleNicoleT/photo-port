import React from "react";
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

const portrait = { name: "portraits", description: "Portraits of people in my life" };

describe('About component', () => {
    //renders About Test
    it('renders', () => {
        render(<About />);
        // render(<Nav
        //     categories={categories}
        //     setCurrentCategory={mockSetCurrentCategory}
        //     currentCategory={mockCurrentCategory}
        //   />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})