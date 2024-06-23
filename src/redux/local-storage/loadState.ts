export const loadState = () => {
  const serializedState = localStorage.getItem("companyFormProcess");
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};
