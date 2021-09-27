import * as React from 'react';
import { ModelResponseType } from '_/utils/types';
import moment from 'moment';
import { MdUpdate } from 'react-icons/md';
import { FaUserAstronaut } from 'react-icons/fa';
import { ListBlock, ListItem, PostInfo } from './list.style';

interface DataType {
  collection: ModelResponseType[];
}

const List: React.FC<DataType> = ({ collection }: DataType): JSX.Element => {
  const handleStoryClick = (url: string) => {
    window.open(url);
  };
  return (
    <ListBlock>
      {React.Children.toArray(
        collection.map((item) => (
          <ListItem onClick={(e) => handleStoryClick(item.url)}>
            <h2>
              <FaUserAstronaut />
              {item.title}
            </h2>
            <PostInfo>
              <li>
                <span>
                  {item.by}
                  {item.kids && ` [ ${item.kids.length} ] `}
                </span>
              </li>
              <li>
                <span>
                  <MdUpdate />
                  {moment.unix(item.time).format('MMM Do YY')}
                </span>
              </li>
            </PostInfo>
          </ListItem>
        )),
      )}
    </ListBlock>
  );
};

export default List;
