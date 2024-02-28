import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
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

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
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
