export const getCategories = state => state.categories.categories;
export const getCategoriesLoadingState = state =>
  state.categories.categoriesLoading;
export const getCategoriesErrorState = state =>
  state.categories.categoriesError;
export const getCategoriesData = state =>
  state.categories.categories.map(obj => {
    return {
      label: obj.name,
      value: obj.amount,
    };
  });
