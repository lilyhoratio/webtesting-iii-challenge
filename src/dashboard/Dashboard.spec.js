// Test away

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Dashboard from './Dashboard'

afterEach(cleanup)

describe("<Display />", () => {
    it("renders without crashing", () => {
        render(<Dashboard />)
    })

    it("shows controls buttons". () => {
        //shit
    })
})