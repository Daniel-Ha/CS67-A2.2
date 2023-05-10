import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    marginRight:10,
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  // ...
  // ...
  menuContainer: {
    position: 'absolute',
    top: '100%',
    backgroundColor: 'white',
    width: 200, // Set the fixed width for the menu container
    overflow: 'hidden',
    // Add any styling for the menu container
    borderRadius: 5, // Add border radius if you want rounded corners
  },
// ...

  menuItem: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
    // Add any styling for the menu items
  },
  menuItemText: {
    fontSize: 16,
    // Add any styling for the menu item text
  },
// ...
});

export default styles;
