import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Some text indicating what should be done',
    done: false,
  }

  render(
    <Todo todo={todo} onClickDelete={() => {}} onClickComplete={() => {}} />,
  )

  const element = screen.getByText('Some text indicating what should be done')
  expect(element).toBeDefined()
})
