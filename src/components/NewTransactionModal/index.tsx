import { TransactionsContext } from '@/contexts/TransactionsContext'
import { defaultTheme } from '@/styles/themes/default'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
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
  type: z.enum(['income', 'outcome']),
})

type NewTransactionsFormSchema = z.infer<typeof newTransactionsFormSchema>

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionsFormSchema>({
    resolver: zodResolver(newTransactionsFormSchema),
  })
  const createNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createNewTransaction
    },
  )

  async function handleCreateNewTransaction(data: NewTransactionsFormSchema) {
    const { description, category, price, type } = data

    await createNewTransaction({
      description,
      price,
      category,
      type,
    })

    reset()
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
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <OptionsContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    <span>Entrada</span>
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    <span>Saída</span>
                  </TransactionTypeButton>
                </OptionsContainer>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Overlay>
  )
}
