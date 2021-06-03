import ArtileItem from 'components/ArticleItem'

export const ITEM_TEST_ID = 'id_article'

function ArticleList({ data }) {
  if (data?.length === 0 || !data) {
    return <div>no result</div>
  }
  return (
    <div>
      {data.map((d) => (
        <ArtileItem data-testid={ITEM_TEST_ID} key={d.id} articleData={d} />
      ))}
    </div>
  )
}

export default ArticleList
