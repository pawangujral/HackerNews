import Loader from '_/components/Loader';
import { NEWS_API_ENDPOINT_TOP_STORIES } from '_/utils/constants';
import * as React from 'react';
import Stories from '_/views/stories';

const Collections: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState<number[]>([]);

  React.useEffect((): void => {
    const fetchTopStoriesIDs = async () => {
      try {
        const respose = await fetch(NEWS_API_ENDPOINT_TOP_STORIES);
        const parseIDs = await respose.json();
        setData(parseIDs);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchTopStoriesIDs();
  }, []);

  return (
    <main>{data.length ? <Stories collection={data} /> : <Loader />}</main>
  );
};

export default Collections;
