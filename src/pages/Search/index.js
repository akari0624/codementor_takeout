import { useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Input from 'components/Input'
import algoliasearch from 'algoliasearch/lite'
import ArticleListBind from './components/ArticleList'
import Loading from 'components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { replaceArticles } from 'actions/article'
import { keepSearchKeyword } from 'actions/extra_data'
import SearchAndFavoriteTabLayout from 'layout/search_and_favorite'
import styled from 'styled-components'
import _debounce from 'lodash.debounce'

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
const SEARCH_KEYWORD_NAME = 'keyword'

const searchKeywordSelector = (state) => state?.extraData?.searchKeyword
function SearchAndListPage(props) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    // formState: { isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      keyword: '',
    },
  })
  const searchKeyword = useSelector(searchKeywordSelector)
  const dispatch = useDispatch()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = _debounce(async (evt) => {
    console.log('show')
    try {
      const keyword = evt.target.value
      setValue(SEARCH_KEYWORD_NAME, keyword)
      // const keyword = getValues(SEARCH_KEYWORD_NAME)
      console.log('keyword', keyword)
      if (keyword === '') {
        return
      }
      setIsSubmitting((prev) => true)
      const res = await algoliaIndex.search(keyword)
      const { hits } = res
      setIsSubmitting((prev) => false)
      dispatch(replaceArticles(hits))
    } catch (err) {
      console.log('error!!', err)
    }
  }, 500)

  const onSubmit = useCallback(async (formData) => {
    try {
      const keyword = formData?.keyword
      setIsSubmitting((prev) => true)
      const res = await algoliaIndex.search(keyword)
      const { hits } = res
      setIsSubmitting((prev) => false)
      dispatch(replaceArticles(hits))
    } catch (err) {
      console.log('error!!', err)
    }
  }, [])

  useEffect(() => {
    // 只有在first mount的時候有值的話 取值 update欄位上的值
    if (searchKeyword) {
      setValue(SEARCH_KEYWORD_NAME, searchKeyword)
    }
    return () => {
      dispatch(keepSearchKeyword(getValues(SEARCH_KEYWORD_NAME)))
    }
  }, [searchKeyword])

  return (
    <SearchAndFavoriteTabLayout>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name={SEARCH_KEYWORD_NAME} register={register} onChange={handleChange} />
        </form>
      </FormWrapper>
      <div>{isSubmitting ? <Loading /> : <ArticleListBind />}</div>
    </SearchAndFavoriteTabLayout>
  )
}

SearchAndListPage.propTypes = {}

export default SearchAndListPage
