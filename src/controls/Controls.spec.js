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
})