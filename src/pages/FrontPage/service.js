const Base_Url = `https://pixabay.com/api/`;
const Api_key = `32192746-459981941dda650b5aa171a9f`;

export const fetchApi = () => {
  return fetch(
    `${Base_Url}?key=${Api_key}&image_type=photo&orientation=horizontal&per_page=40&q=notebook`
  );
};
