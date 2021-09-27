import List from '_/components/list';
// import Loader from '_/components/loader';
import { NEWS_API_ENDPOINT_BASE } from '_/utils/constants';
import {
  ModelResponseType,
  StoriesPropType as StoriesPropertyType,
} from '_/utils/types';
import * as React from 'react';

import { LoadMore } from './stories.style';

const Stories: React.FC<StoriesPropertyType> = ({
  collection,
}: StoriesPropertyType): JSX.Element => {
  const ITEM_TO_FETCH: number = 21;
  const [data, setData] = React.useState<ModelResponseType[]>([]);
  const [isFetching, setFetching] = React.useState<boolean>(false);

  const fetchStories = async (sliceArray: number[]): Promise<void> => {
    setFetching(true);
    const collectData: ModelResponseType[] = [];
    await Promise.all(
      sliceArray.map(async (id) => {
        const response = await fetch(
          `${NEWS_API_ENDPOINT_BASE}/item/${id}.json?print=pretty`,
        );
        const parseStory = await response.json();
        collectData.push(parseStory);
      }),
    );
    setData((previousState) => [...previousState, ...collectData]);
    setFetching(false);
  };

  React.useEffect((): void => {
    fetchStories(collection.slice(0, ITEM_TO_FETCH));
  }, [collection]);

  const handleFetchMore = () => {
    const sliceArray = collection.slice(
      data.length,
      data.length + ITEM_TO_FETCH,
    );
    fetchStories(sliceArray);
  };

  return (
    <>
      {data.length > 0 && <List collection={data} />}
      {isFetching ? (
        <p>loading...</p>
      ) : (
        <LoadMore onClick={handleFetchMore}>Load More</LoadMore>
      )}
    </>
  );
};

export default Stories;
