export const getElement = selector => {
  return document.querySelector(selector);
}

export const getAllElements = selector => {
  return document.querySelectorAll(selector);
}

export const setValueElement = (elementId, value) => {
  document.getElementById(elementId).value = value;
}

export const getValueForm = (form, property) => {
  const formData = new FormData(form);
  let value = formData.get(property);
  if(!value.length) return null;
  return value;
}