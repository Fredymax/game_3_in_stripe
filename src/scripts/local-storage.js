export const getPropertyLocalStorage = (property) => {
  window.localStorage.getItem(property);
}

export const setPropertyLocalStorage = (property, value) => {
  window.localStorage.setItem(property, value);
}