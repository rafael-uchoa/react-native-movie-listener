import React from 'react';
import styled from 'styled-components/native';

export default ({ results }) => (
  <SearchResults>
    {results.map(result => (
      <Result key={result.imdbID}>
        <Thumbnail source={{ uri: result.Poster }} />
        <TextContainer>
          <Title>{result.Title}</Title>
          <Year>{result.Year}</Year>
        </TextContainer>
      </Result>
    ))}
  </SearchResults>
);

const SearchResults = styled.ScrollView`
  width: 100%;
`;

const Result = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-color: #333;
  border-bottom-width: 1px;
`;

const Thumbnail = styled.Image`
  width: 100px;
  height: 100px;
`

const TextContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 10px;
  padding-left: 10px;
`

const Title = styled.Text`
  color: white;
  font-size: 14px;
`
const Year = styled.Text`
  color: #FF424F;
  font-size: 14px;
`