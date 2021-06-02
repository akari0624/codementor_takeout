import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Input from 'components/Input'
import algoliasearch from 'algoliasearch/lite'
import ArticleListBind from './components/ArticleList'
import Loading from 'components/Loading'
import { useDispatch } from 'react-redux'
import { replaceArticles } from 'actions/article'
import SearchAndFavoriteTabLayout from 'layout/search_and_favorite'
import styled from 'styled-components'

const client = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APLICATION_ID,
  process.env.REACT_APP_ALGOLIA_APLICATION_KEY
)
const algoliaIndex = client.initIndex(process.env.REACT_APP_ALGOLIA_INDEX_NAME)

const FormWrapper = styled.section`
  margin-left: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`
function SearchAndListPage(props) {
  const {
    register,
    handleSubmit,
    errors,
    // formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {
      keyword: '',
    },
  })

  const dispatch = useDispatch()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = useCallback(async (formData) => {
    try {
      const keyword = formData?.keyword
      setIsSubmitting((prev) => true)
      const res = await algoliaIndex.search(keyword)
      const { hits } = res

      console.log(hits)
      setIsSubmitting((prev) => false)
      dispatch(replaceArticles(hits))
    } catch (err) {
      console.log('error!!', err)
    }
  }, [])
  console.log('rerender on page???')
  return (
    <SearchAndFavoriteTabLayout>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="keyword" register={register} />
        </form>
      </FormWrapper>
      <div>{isSubmitting ? <Loading /> : <ArticleListBind />}</div>
    </SearchAndFavoriteTabLayout>
  )
}

SearchAndListPage.propTypes = {}

export default SearchAndListPage
