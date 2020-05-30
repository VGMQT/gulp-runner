const addClassnameAfterDelay = (selector, classname, delay = 1000) => {
  setTimeout(() => {
    document.querySelector(selector).classList.add(classname);
  }, delay);
};

export default addClassnameAfterDelay;
