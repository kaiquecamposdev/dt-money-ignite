import { TransactionsContext } from '@/contexts/TransactionsContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SearchButton, SearchContainer, SearchInput } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  const { fetchTransactions } = useContext(TransactionsContext)

  async function handleSearchTransactions(data: SearchFormInputs) {
    fetchTransactions(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <SearchInput
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <SearchButton disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        <span>Buscar</span>
      </SearchButton>
    </SearchContainer>
  )
}
