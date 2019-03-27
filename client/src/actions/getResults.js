//Get result from the selected category api
export const getWeatherResults = categoryAction => {
  axios.post("/api/category/weather", categoryAction).then(res => {});
};
