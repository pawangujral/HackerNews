import * as React from 'react';
import List from '_/components/list';
import { StoriesPropType, ModelResponseType } from '_/utils/types';
import { NEWS_API_ENDPOINT_BASE } from '_/utils/constants';
import Loader from '_/components/loader';
import { LoadMore } from './stories.style';

const Stories: React.FC<StoriesPropType> = ({
  collection,
}: StoriesPropType): JSX.Element => {
  const ITEM_TO_FETCH: number = 21;
  const [data, setData] = React.useState<ModelResponseType[]>([]);
  const [isFetching, setFetching] = React.useState<boolean>(false);

  const fetchStories = async (): Promise<void> => {
    setFetching(true);
    const collectData: ModelResponseType[] = [];
    const sliceArray = collection.slice(
      data.length,
      data.length + ITEM_TO_FETCH,
    );
    await Promise.all(
      sliceArray.map(async (id) => {
        const data = await fetch(
          `${NEWS_API_ENDPOINT_BASE}/item/${id}.json?print=pretty`,
        );
        const parseStory = await data.json();
        collectData.push(parseStory);
      }),
    );
    setData((prevState) => [...prevState, ...collectData]);
    setFetching(false);
  };

  React.useEffect((): void => {
    fetchStories();
  }, []);

  const handleFetchMore = () => {
    fetchStories();
  };

  return (
    <>
      {data.length && <List collection={data} />}
      {isFetching ? (
        <Loader />
      ) : (
        <LoadMore onClick={handleFetchMore}>Load More</LoadMore>
      )}
    </>
  );
};

export default Stories;
