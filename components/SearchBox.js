import React from 'react';
import styled from 'styled-components/native';

export default ({ handleChangeText, handleSearch }) => (
  <SearchBox
    onChangeText={handleChangeText}
    onSubmitEditing={handleSearch}
    placeholder={'Search'}
    placeholderTextColor={'white'}
  />
);

const SearchBox = styled.TextInput`
  background-color: #ff424f;
  color: white;
  width: 100%;
  height: 50px;
  margin-top: 25px;
  padding-right: 20px;
  padding-left: 20px;
`;
