import { fireEvent, render } from '@testing-library/react'
import {
  describe, expect, it, vi,
} from 'vitest'

import Button from './Button'

import type { ButtonProps } from './Button'

const defaultProps = {
  onClick: vi.fn(),
}

const createBtn = (props?: ButtonProps, text?: string) => {
  const wrapper = render(<Button {...(props || {})}>{ text || 'Nice' }</Button>)
  return wrapper.getByText('Nice') as HTMLButtonElement
}

describe('button component test case', () => {
  it('renders button', () => {
    const el = createBtn()
    expect(el).toBeTruthy()
    expect(el).toBeInTheDocument()
    expect(el.tagName).toEqual('BUTTON')
    expect(el).toHaveClass('btn btn-default')
  })
  it('should call the function when clicked', () => {
    const el = createBtn(defaultProps)
    expect(el).toBeInTheDocument()
    fireEvent.click(el)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const linkProps: ButtonProps = {
      btnType: 'link',
      href: 'https://www.baidu.com',
    }
    const el = createBtn(linkProps)
    expect(el).toBeInTheDocument()
    expect(el.tagName).toEqual('A')
    expect(el).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const disabledProps: ButtonProps = {
      disabled: true,
      onClick: vi.fn(),
    }
    const el = createBtn(disabledProps)
    expect(el).toBeInTheDocument()
    expect(el.disabled).toBeTruthy()
    fireEvent.click(el)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
