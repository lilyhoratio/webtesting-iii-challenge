// Test away!

// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open

import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
// import '@testing-library/react/cleanup-after-each' 
import renderer from 'react-test-renderer'
import Controls from './Controls'

afterEach(cleanup)

describe("<Controls />", () => {
    it("renders without crashing", () => {
        render(<Controls />)
    })

    it("matches snapshot", () => {
        // generate DOM tree
        const tree = renderer.create(<Controls />)

        expect(tree.toJSON()).toMatchSnapshot()
    })

    it("close gate button text changes on click", () => {
        const wrapper = render(<Controls />)
    })

    it("unlocked and open", () => {
        const lockSpy = jest.fn()
        const closeSpy = jest.fn()

        const { getByText } = render(<Controls
            closed={false}
            locked={false}
            toggleClosed={closeSpy}
            toggleLocked={lockSpy}
        />)
        const closeButton = getByText(/close gate/i)
        const lockButton = getByText(/lock gate/i)

        // determine the button status 
        expect(closeButton.disabled).toBeFalsy()
        expect(lockButton.disabled).toBeTruthy()

        // button click events
        fireEvent.click(closeButton)
        expect(closeSpy).toBeCalled()

        fireEvent.click(lockButton)
        expect(lockSpy).not.toBeCalled() // NOT called b/c is disabled
    })

    it("unlocked and closed", () => {
        const lockSpy = jest.fn()
        const closeSpy = jest.fn()

        const { getByText } = render(<Controls
            closed={true}
            locked={false}
            toggleClosed={closeSpy}
            toggleLocked={lockSpy}
        />)
        const closeButton = getByText(/open gate/i)
        const lockButton = getByText(/lock gate/i)

        // determine the button status 
        expect(closeButton.disabled).toBeFalsy()
        expect(lockButton.disabled).toBeFalsy() //changes

        // button click events
        fireEvent.click(closeButton)
        expect(closeSpy).toBeCalled()

        fireEvent.click(lockButton)
        expect(lockSpy).toBeCalled()
    })

})