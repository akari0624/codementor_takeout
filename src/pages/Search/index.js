import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Input from 'components/Input';
import algoliasearch from 'algoliasearch/lite';
import ArticleListBind from './components/ArticleList'
import {useDispatch} from 'react-redux'
import {replaceArticles} from 'actions/article'

const client = algoliasearch(process.env.REACT_APP_ALGOLIA_APLICATION_ID, process.env.REACT_APP_ALGOLIA_APLICATION_KEY);
const algoliaIndex = client.initIndex(process.env.REACT_APP_ALGOLIA_INDEX_NAME);

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
  });

  const dispatch = useDispatch()

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(async (formData) => {
    const keyword = formData?.keyword;

    algoliaIndex.search(keyword).then(({ hits }) => {
      console.log(hits);
      dispatch(replaceArticles(hits))
    });

    setIsSubmitting((prev) => true);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="keyword" register={register} />
      </form>
      <div>
        <ArticleListBind />
      </div>
    </div>
  );
}

SearchAndListPage.propTypes = {};

export default SearchAndListPage;
