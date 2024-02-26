import { PriceHighlight, RowContent } from './styles.ts'

interface RowProps {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  date: Date
}

export function Row({ category, date, price, description, type }: RowProps) {
  return (
    <RowContent>
      <td width="50%">{description}</td>
      <td>
        <PriceHighlight variant={type}>{price}</PriceHighlight>
      </td>
      <td>{category}</td>
      <td>{JSON.stringify(date)}</td>
    </RowContent>
  )
}
