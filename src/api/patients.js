export const searchByPatientNationalId = async id => {
  const res = await fetch(`http://localhost:4000/search?id=${id}`);
  const data = await res.json();

  if (data.id)
    return {
      id: data.id,
      name: data.name,
      diagnosis: data.diagnosis
    };

  // if (id === "12345678912345") {
  //   return new Promise((resolve, reject) => {
  //     resolve({
  //       id,
  //       name: "Ahmed Menaem",

  //       diagnosis: [
  //         {
  //           doctor: "Mohamed Ali",
  //           description: "description one",
  //           hospital: "Nile Hospital",
  //           diagnosis: "",
  //           symptoms: ["symptom1"],
  //           treatments: ["treatment1"],
  //         },
  //         {
  //           doctor: "Moustafa Mahmoud",
  //           description: "description one",
  //           hospital: "Dubai Public Hospital",
  //           diagnosis: "",
  //           symptoms: ["symptom1"],
  //           treatments: ["treatment1"],
  //         },
  //         {
  //           doctor: "Abdelrhman Saied",
  //           description: "description one",
  //           hospital: "Jeeda Hospital",
  //           diagnosis: "",
  //           symptoms: ["symptom1"],
  //           treatments: ["treatment1"],
  //         },
  //       ],
  //     });
  //   });
  // }

  return null;
};

export const addNewPatient = async (id, name) => {
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

export const addDescription = async (
  id,
  diagnose,
  description,
  symptoms,
  treatments
) => {
  const res = await fetch("http://localhost:4000/description", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: id,
      description: description,
      diagnose: diagnose,
      symptoms: symptoms,
      treatments: treatments,
      hospital: "Jeeda Hospital",
      doctor: "Abdelrhman Saied"
    })
  });
  const data = await res.json();
  return { ...data };

  // return {
  //   description,
  //   diagnosis,
  //   symptoms,
  //   treatments,
  //   hospital: "Jeeda Hospital",
  //   doctor: "Abdelrhman Saied"
  // };
};

export const savePatient = () => {};
