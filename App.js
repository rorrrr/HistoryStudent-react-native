import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, children} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <StatusBar
      barStyle="dark-content"
      backgroundColor="#FFFCF2"
      />
      <Text style={styles.whiteHeading}>Testing Text Title</Text>

      <Text style={styles.blueSubHeading}>Sub Heading</Text>

      <Text style={styles.pinkText}> This has been by far the most challenging few weeks in my professional life. I understood cognitively that I was facing a crossroads in my evolution as a player and as a man, and that it came with exceptionally difficult choices. What I didn’t truly understand, however, was the range of emotions I would feel during this process. {"\n"}
      {"\n"}
      The primary mandate I had for myself in making this decision was to have it based on the potential for my growth as a player — as that has always steered me in the right direction. But I am also at a point in my life where it is of equal importance to find an opportunity that encourages my evolution as a man: moving out of my comfort zone to a new city and community which offers the greatest potential for my contribution and personal growth. With this in mind, I have decided that I am going to join Cloud9.{"\n"}
      {"\n"}
      This has been by far the most challenging few weeks in my professional life. I understood cognitively that I was facing a crossroads in my evolution as a player and as a man, and that it came with exceptionally difficult choices. What I didn’t truly understand, however, was the range of emotions I would feel during this process.
      The primary mandate I had for myself in making this decision was to have it based on the potential for my growth as a player — as that has always steered me in the right direction. But I am also at a point in my life where it is of equal importance to find an opportunity that encourages my evolution as a man: moving out of my comfort zone to a new city and community which offers the greatest potential for my contribution and personal growth. With this in mind, I have decided that I am going to join Cloud9.{"\n"}
      {"\n"}
      This has been by far the most challenging few weeks in my professional life. I understood cognitively that I was facing a crossroads in my evolution as a player and as a man, and that it came with exceptionally difficult choices. What I didn’t truly understand, however, was the range of emotions I would feel during this process.
      The primary mandate I had for myself in making this decision was to have it based on the potential for my growth as a player — as that has always steered me in the right direction. But I am also at a point in my life where it is of equal importance to find an opportunity that encourages my evolution as a man: moving out of my comfort zone to a new city and community which offers the greatest potential for my contribution and personal growth. With this in mind, I have decided that I am going to join Cloud9.</Text>
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({

  center: {
    alignItems: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFCF2',
    padding: 2
  },

  whiteHeading: {
    color: '#CCC5B9',
    marginTop: 20,
    backgroundColor: '#FFFCF2',
    width: '100%',
    textAlign: 'center',
    fontSize: 40,
    padding: 5,
    alignItems: 'center'
  },

  blueSubHeading: {
    color: '#403D39',
    fontSize: 30,
    width: '100%',
    backgroundColor: '#CCC5B9',
    textAlign: 'center',
    padding: 5,
    alignItems: 'center'
  },

  pinkText: {
    color: '#CCC5B9',
    backgroundColor: '#403D39',
    padding: 5,
    alignItems: 'center'
  }
});

<ScrollView contentContainerStyle={styles.center}>
    {children}
</ScrollView>
