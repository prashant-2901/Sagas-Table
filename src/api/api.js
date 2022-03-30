export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:8000/data");
    const data = await response.json();
    // console.log("fetched success", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteContactsAPI = async (id) => {
  try {
    // console.log("fetched success delete data", data);
    const response = await fetch(`http://localhost:8000/data/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateContactsAPI = async (action) => {
  console.log(action);
  try {
    console.log(
      "updateContactAPI payload - ",
      action,
      "payload.payload",
      action.payload,
      action.id
    );
    const response = await fetch(`http://localhost:8000/data/${action.id}`, {
      method: "PATCH",
      body: JSON.stringify(action.payload),
    }).then((res) => res.json());
    console.log("response", response);
    return response;
  } catch (e) {
    console.log("error in final", e);
  }
};
