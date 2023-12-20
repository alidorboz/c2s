import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
    useEffect(() => {
        // Load the custom font
        Font.loadAsync({
          'Saira-Regular': require('../Saira_Expanded-Light.ttf'), // Update the path to your font file
        });
      }, []);
    
 
      return (
        <View style={styles.bg_app}>
          <ImageBackground
            source={require('../images/bg.png')} // Update the path to your image
            style={styles.backgroundImage}
          >
            <View style={styles.centeredContainer}>
              <ImageBackground
                source={require('../images/blur.png')} // Update the path to your image
                style={styles.rectangle17}
              >
                <View style={styles.logofield}>
                  <Image
                    style={styles.logoImage1}
                    source={require('../images/Layer_1.png')} // Update the path to your logo
                  />
                  <Image
                    style={styles.logoImage2}
                    source={require('../images/Union.png')} // Update the path to your logo
                  />
                </View>
                <View style={styles.shopcart}>
                  <Text style={styles.shopcartfield}>0 items</Text>
                  <View style={styles.groupe3}>
                    <Image
                      style={styles.logoImage3}
                      source={require('../images/solar_cart-2-line-duotone.png')} // Update the path to your logo
                    />
                  </View>
                </View>
                <View style={styles.frame7}>
                  {/* Chat bubble with linear gradient background */}
                  <View style={styles.bubble}>
                    <View style={styles.bubbleContainer}>
                      <LinearGradient
                        colors={['rgba(255, 255, 255, 0.80)', 'rgba(255, 255, 255, 0.32)']}
                        style={styles.gradientBackground}
                      >
                        <Text style={styles.textBubble}>Hello, I'd like to place an order.</Text>
                      </LinearGradient>
                    </View>
                  </View>
    
                  {/* Profile icon next to the bubble in a circle */}
                  <View style={styles.profileContainer}>
                    <View style={styles.profileCircle}>
                      <Image
                        style={styles.logoImage8}
                        source={require('../images/icon.png')}
                      />
                    </View>
                  </View>
                </View>
    
                <View style={styles.frame8}>
                  <Image
                    style={styles.iconImage}
                    source={require('../images/Mascot.png')} // Update the path to your icon
                  />
    
                  {/* Chat bubble with linear gradient background */}
                  <View style={styles.bubble}>
                    <View style={styles.bubbleContainer}>
                      <LinearGradient
                        colors={['rgba(0,0,0,0.32)', 'rgba(0, 0, 0, 0.80)']}
                        style={styles.gradientBackground}
                      >
                        <Text style={styles.textBubble1}>Welcome to [Fast Food] Express! How can I assist you today?</Text>
                      </LinearGradient>
                    </View>
                  </View>
                </View>
    
                <View style={styles.speaking_area}>
                  <ImageBackground
                    style={styles.bgimage}
                    source={require('../images/background.png')} // Update the path to your icon
                  >
                    <Image
                      style={styles.bgzimage}
                      source={require('../images/Animation.png')} // Update the path to your icon
                    />
                  </ImageBackground>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
      );
    }
const styles = StyleSheet.create({
  bg_app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: 720,
    height: 1280,
    resizeMode: 'cover', // or 'contain' depending on your needs
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle17: {
    marginTop: 10, // Reduced top margin
    marginBottom: 10, // Reduced bottom margin
    marginLeft: 'auto', // Center horizontally
    marginRight: 'auto', // Center horizontally
    height: '100%', // Adjust the height as needed
    width: 370,
    borderRadius: 20,
    overflow: 'hidden', // To clip the border-radius
  },
  logofield: {
    flexDirection: 'row', // Display children horizontally
    justifyContent: 'flex-start', // Align children to the left
    alignItems: 'center',
    paddingLeft: 20, // Adjust the left padding as needed
    gap: 10, // Adjust the gap between logos as needed
    marginTop : 44,
    marginLeft : 5
  },
  logoImage1: {
    width: 30, // Adjust the width of the first logo
    height: 30, // Adjust the height of the first logo
    flexShrink: 0,
  },
  logoImage2: {
    width: 50, // Adjust the width of the second logo
    height: 20, // Adjust the height of the second logo
    flexShrink: 0,
  },
  shopcart: {
    flexDirection: 'row', // Display children horizontally
    position: 'absolute',
    top: 10, // Adjust the top position as needed
    right: 10, // Adjust the right position as needed
    display: 'flex',
    alignItems: 'center',
    gap: 10, // Adjust the gap between the cart and items count as needed
    marginTop : 33,
    marginLeft : 5,
  },
  groupe3: {
    marginRight: 10, // Adjust the margin between the cart and items count as needed
  },
  logoImage3: {
    width: 30, // Adjust the width of the solar cart image
    height: 30, // Adjust the height of the solar cart image
    flexShrink: 0,
  },
  shopcartfield: {
    color: '#FFF',
  },

  frame7: {
    flexDirection: 'row',
    alignItems: 'flex-end', // Adjusted to align items at the bottom
    justifyContent: 'space-between', // Adjusted to evenly space items
    marginTop: 300,
  },
  bubble: {
    width: 280,
    padding: 16,
    justifyContent: 'center',
    overflow: 'hidden', // To clip the border-radius
    backgroundColor: 'transparent', // Set to transparent to see the gradient background
  },
  bubbleContainer: {
    borderRadius: 30,
    overflow: 'hidden', // To clip the border-radius
  },
  gradientBackground: {
    borderRadius: 20,
    padding: 16,
  },
  textBubble: {
    color: '#000',
  },

  textBubble1: {
    color: '#FFF',
  },
  
  profileContainer: {
    marginRight: 20, // Adjusted margin to create space between the bubble and the profile icon
    marginBottom : 10,
    
  },
  profileCircle: {
    backgroundColor: 'rgba(132, 0, 0, 0.40)',
    borderRadius: 50, // Adjusted for a circular shape
    padding: 10,
  },
  logoImage8: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },

  frame8: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start', // Adjusted to align items to the left
    marginTop: 20, // Adjusted margin as needed
  },
  iconImage: {
    width: 70, // Adjust the width of your icon
    height: 70, // Adjust the height of your icon
    marginRight: 10, // Adjust the margin between the icon and the bubble
    marginBottom: 15
  },
  bubble: {
    width: 280, // Set a fixed width for the bubble
    padding: 16,
    justifyContent: 'center',
    overflow: 'hidden', // To clip the border-radius
    backgroundColor: 'transparent', // Set to transparent to see the gradient background
  },
  bubbleContainer: {
    width: '100%', // Set a fixed width for the container to match the bubble
    borderRadius: 30,
    overflow: 'hidden', // To clip the border-radius
  },
  
  gradientBackground: {
    borderRadius: 20,
    padding: 16,
  },
  textBubble1: {
    color: '#FFF', // Adjusted text color for better visibility
  },
  bgimage: {
    width: 370,
    height: 204,
    flexShrink: 0,
    borderRadius: 19.5,
    overflow: 'hidden', // Ensure that the border radius is respected
  },

  bgzimage:{
    width:100,
    height:100,
    marginTop:40,
    marginLeft:140
  },

  

});
