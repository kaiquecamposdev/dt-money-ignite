import { TransactionsContext } from '@/contexts/TransactionsContext'
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
  SpanError,
  TransactionTypeButton,
} from './styles'

const newTransactionsFormSchema = z.object({
  description: z.string().min(1),
  price: z.number().min(0),
  category: z.string().min(1),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionsFormSchema = z.infer<typeof newTransactionsFormSchema>

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<NewTransactionsFormSchema>({
    resolver: zodResolver(newTransactionsFormSchema),
  })
  const createNewTransaction = useContextSelector(
    TransactionsContext,
    ({ createNewTransaction }) => {
      return createNewTransaction
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
            <X size={24} />
          </ButtonClose>

          <input
            type="text"
            placeholder="Descrição"
            aria-invalid={errors.description ? 'true' : 'false'}
            {...register('description', { required: true })}
          />
          {errors.description && <SpanError>Digite a descrição.</SpanError>}
          <input
            type="number"
            placeholder="Preço"
            aria-invalid={errors.price ? 'true' : 'false'}
            {...register('price', { valueAsNumber: true, required: true })}
          />
          {errors.price && <SpanError>Digite o preço.</SpanError>}
          <input
            type="text"
            placeholder="Categoria"
            aria-invalid={errors.category ? 'true' : 'false'}
            {...register('category', { required: true })}
          />
          {errors.category && <SpanError>Digite a categoria.</SpanError>}
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => {
              return (
                <OptionsContainer
                  onValueChange={onChange}
                  value={value}
                  aria-invalid={errors.type ? 'true' : 'false'}
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
          {errors.type && <SpanError>Selecione o tipo.</SpanError>}

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Overlay>
  )
}
