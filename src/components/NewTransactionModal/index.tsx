import { defaultTheme } from '@/styles/themes/default'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  ButtonClose,
  Content,
  OptionsContainer,
  Overlay,
  TransactionTypeButton,
} from './styles'

const newTransactionsFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome']),
})

type NewTransactionsFormSchema = z.infer<typeof newTransactionsFormSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionsFormSchema>({
    resolver: zodResolver(newTransactionsFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionsFormSchema) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <Overlay>
      <Content>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <h1>Nova Transação</h1>

          <ButtonClose>
            <X size={24} fill={defaultTheme['gray-500']} />
          </ButtonClose>

          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          <OptionsContainer>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              <span>Entrada</span>
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              <span>Saída</span>
            </TransactionTypeButton>
          </OptionsContainer>
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Overlay>
  )
}
