import React, { useState } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';

import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';

export default () => {
  const apiUrl = 'http://www.omdbapi.com/?apikey=YOUR_API_KEY';
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const handleChangeText = text => setInput(text);

  const handleSearch = () =>
    input === ''
      ? null
      : axios(`${apiUrl}&s=${input}`).then(({ data }) =>
        setResults(data.Search)
      );

  return (
    <App>
      <SearchBox
        handleChangeText={handleChangeText}
        handleSearch={handleSearch}
      />
      <SearchResults results={results} />
    </App>
  );
};

const App = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #212121;
`;
