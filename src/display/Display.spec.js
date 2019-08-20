// Test away!

// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class

import React from 'react'
import { render, cleanup } from '@testing-library/react'
// import '@testing-library/react/cleanup-after-each' 
import Display from './Display'

afterEach(cleanup)

describe("<Display />", () => {
    it("renders without crashing", () => {
        render(<Display />)
    })

    it("renders unlocked/open as default values", () => {
        const { getByText } = render(<Display />)
        getByText(/unlocked/i)
        getByText(/open/i)
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

    it("displays locked if locked prop is false", () => {
        const { getByText } = render(<Display locked={false} />)
        getByText(/unlocked/i)
    })
})