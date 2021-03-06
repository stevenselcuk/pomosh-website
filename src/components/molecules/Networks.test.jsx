import React from 'react'
import { render } from '@testing-library/react'
import Networks from './Networks'

describe('Networks', () => {
  it('renders correctly from data file values', () => {
    const { container } = render(<Networks />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild.nodeName).toBe('ASIDE')
  })

  it('renders correctly in small variant', () => {
    const { container } = render(<Networks small={true} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.querySelector('.small')).toBeInTheDocument()
  })

  it('can be hidden', () => {
    const { container } = render(<Networks hide={true} />)
    expect(container.firstChild).not.toBeInTheDocument()
  })
})
