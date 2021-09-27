import * as React from 'react';
import Stories from '_/views/stories';
import useToasts from '_/hooks/use-toasts';
import { NEWS_API_ENDPOINT_TOP_STORIES } from '_/utils/constants';
import Loader from '_/components/Loader';

const Collections: React.FC = (): JSX.Element => {
  const { addToast } = useToasts();
  const [data, setData] = React.useState<number[]>([]);

  const fetchTopStoriesIDs = async () => {
    try {
      const respose = await fetch(NEWS_API_ENDPOINT_TOP_STORIES);
      const parseIDs = await respose.json();
      setData(parseIDs);
    } catch (err: any) {
      addToast({ message: err.message, variant: 'error' });
    }
  };

  React.useEffect((): void => {
    fetchTopStoriesIDs();
  }, []);

  return (
    <main>{!data.length ? <Loader /> : <Stories collection={data} />}</main>
  );
};

export default Collections;
