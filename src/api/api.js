export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:8000/data");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteContactsAPI = async (id) => {
  try {
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
  try {

    const response = await fetch(`http://localhost:8000/data/${action.id}`, {
      method: "PATCH",
      body: JSON.stringify(action.payload),
      headers: {
        ["Content-Type"]: "application/json",
      },
    }).then((res) => res.json());
    return response;
  } catch (e) {
  }
};



export const addContactsAPI = async (action) => {
  try {

    const response = await fetch(`http://localhost:8000/data/`, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        ["Content-Type"]: "application/json",
      },
    }).then((res) => res.json());
    return response;
  } catch (e) {
    console.log("error in final", e);
  }
};