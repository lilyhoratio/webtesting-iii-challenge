// Test away!

// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class

import React from 'react'
import { render, cleanup } from '@testing-library/react'
// import '@testing-library/react/cleanup-after-each' 
import 'jest-dom/extend-expect'
import Display from './Display'

afterEach(cleanup)

describe("<Display />", () => {
    it("renders without crashing", () => {
        render(<Display />)
    })

    it("displays unlocked/open as default values", () => {
        const { getByText } = render(<Display />)
        const unlockDisplay = getByText(/unlocked/i)
        getByText(/open/i)

        // expect(unlockDisplay.className).toMatch(/red-led/i) // using jest
        expect(unlockDisplay).toHaveClass('green-led')

        // expect(queryByText(/open/i)).toBeTruthy() // don't need this extra layer b/c?
        // expect(queryByText(/closed/i)).toBe(null) // check that closed is not in the page
    })

    // closed prop
    it("displays closed if closed prop is true", () => {
        const { getByText } = render(<Display closed={true} />)
        getByText(/locked/i)
    })

    it("displays open if closed prop is false", () => {
        const { getByText } = render(<Display closed={false} />)
        getByText(/open/i)
    })

    // locked prop
    it("displays locked if locked prop is true", () => {
        const { getByText } = render(<Display locked={true} />)
        getByText(/locked/i)
    })

    it("displays unlocked if locked prop is false", () => {
        const { getByText } = render(<Display locked={false} />)
        getByText(/unlocked/i)
    })

    it("use red-led class when locked or closed", () => {
        const wrapper = render(<Display locked={true} closed={true} />)
        const lockDisplay = wrapper.getByText(/locked/i)
        expect(lockDisplay).toHaveClass('red-led')
    })

    it("use green-led class when unlocked or closed", () => {
        const wrapper = render(<Display locked={false} closed={false} />)
        const unlockDisplay = wrapper.getByText(/unlocked/i)
        expect(unlockDisplay).toHaveClass('green-led')
    })
})