const removeFeatures = item => {
    // dispatch an action here to remove an item
    return { type: "REMOVE_ITEMS", payload: item}
  };

  const buyItems = item => {
    // dipsatch an action here to add an item

    return {type: "ADD_ITEMS", payload: item}
  };

