import { PriceHighlight, RowContent } from './styles.ts'

interface RowProps {
  transaction: string
  variant: 'income' | 'outcome'
  price: number
  category: string
  date: Date
}

export function Row({ category, date, price, transaction, variant }: RowProps) {
  return (
    <RowContent>
      <td width="50%">{transaction}</td>
      <td>
        <PriceHighlight variant={variant}>{price}</PriceHighlight>
      </td>
      <td>{category}</td>
      <td>{JSON.stringify(date)}</td>
    </RowContent>
  )
}
