import { formatCurrency } from '@/utils/format-currency'
import { CalendarBlank, TagSimple } from '@phosphor-icons/react'
import dayjs from 'dayjs'
import { CardContainer, PriceHighlight } from './styles'

interface TransactionPropsType {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: Date
}

export function Card({
  description,
  price,
  type,
  category,
  createdAt,
}: TransactionPropsType) {
  return (
    <CardContainer>
      <h1>{description}</h1>
      <PriceHighlight variant={type}>
        {type === 'outcome' && '- '}
        {formatCurrency(price)}
      </PriceHighlight>
      <span>
        <p>
          <TagSimple size={16} />
          {category}
        </p>
        <p>
          <CalendarBlank size={16} />
          {dayjs(createdAt).format('DD/MM/YYYY HH:mm')}
        </p>
      </span>
    </CardContainer>
  )
}
