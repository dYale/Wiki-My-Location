import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import Article from '../containers/Article.js';


export default class Articles extends React.Component {


  render() {
    let listItems = this.props.articles.map((item) => {
      const url = `https://en.wikipedia.org/?curid=${item.pageid}`;
      return (
        <Article parentNavigation={this.props.parentNavigation} key={item.pageid} pageid={item.pageid}
                 title={item.title} url={url} dist={item.dist}/>
      );
    });

    return (
      <View>
        {listItems}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lemonchiffon'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue'
  }
});
