export const getAllNotes = () => {
  return fetch("http://localhost:3001/api/notes").then(
    (response) => {
     
      return response.json();
    }
  );
};
