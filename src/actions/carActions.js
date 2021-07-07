


export const remove = item => {
    // dispatch an action here to remove an item
    return { type: "REMOVE_ITEMS", payload: item}
  };

  export const buy = item => {
    // dipsatch an action here to add an item

    return {type: "ADD_ITEMS", payload: item}
  };

