import styled from 'styled-components';

export const ListBlock = styled.ol`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListItem = styled.li`
  border: 1px solid var(--accent-color);
  color: var(--text-color);
  cursor: pointer;
  display: grid;
  font-size: 24px;
  font-weight: 300;
  grid-template-rows: 1fr 30px;
  padding: 30px;

  h2 {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.1em;
    line-height: 1.5em;
    margin: 0 0 20px 0;
  }

  &:hover {
    background: #e5ceaf;
    color: #000;
  }
`;

export const PostInfo = styled.ul`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 10px;

    span {
      align-items: center;
      background: var(--date-color);
      border-radius: var(--base-radius);
      display: inline-flex;
      justify-content: center;
      padding: 5px 10px;
    }

    &:last-child {
      text-align: right;
      span {
        background: var(--highlight-color);
      }
    }
  }
`;
