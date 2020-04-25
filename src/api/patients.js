export const searchByPatientNationalId = async id => {
  const res = await fetch(`http://localhost:4000/search?id=${id}`);
  const data = await res.json();

  if (data.id)
    return {
      id: data.id,
      name: data.name,
      descriptions: data.descriptions
    };

  // if (id === "12345678912345") {
  //   return {
  //     id,
  //     name: "Ahmed Menaem",
  //     descriptions: [
  //       {
  //         doctor: "Mohamed Ali",
  //         description: "description one",
  //         hospital: "Nile Hospital"
  //       },
  //       {
  //         doctor: "Moustafa Mahmoud",
  //         description: "description one",
  //         hospital: "Dubai Public Hospital"
  //       },
  //       {
  //         doctor: "Abdelrhman Saied",
  //         description: "description one",
  //         hospital: "Jeeda Hospital"
  //       }
  //     ]
  //   };
  // }

  return null;
};

export const addNewPatient = async (id, name) => {
  console.log(id, name);
  const res = await fetch("http://localhost:4000/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id, name: name })
  });
  const data = await res.json();

  return {
    id: data.id,
    name: data.name
  };
  // return {
  //   id,
  //   name
  // };
};

export const addDescription = async (id, description) => {
  const res = await fetch("http://localhost:4000/description", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id, description: description })
  });
  const data = await res.json();

  return data.description;

  // return {
  //   description,
  //   hospital: "Jeeda Hospital",
  //   doctor: "Abdelrhman Saied"
  // };
};

export const savePatient = () => {};
