export const searchByPatientNationalId = async (id) => {
  if (id === "12345678912345") {
    return {
      id,
      name: "Ahmed Menaem",
      descriptions: [
        {
          doctor: "Mohamed Ali",
          description: "description one",
          hospital: "Nile Hospital",
        },
        {
          doctor: "Moustafa Mahmoud",
          description: "description one",
          hospital: "Dubai Public Hospital",
        },
        {
          doctor: "Abdelrhman Saied",
          description: "description one",
          hospital: "Jeeda Hospital",
        },
      ],
    };
  }

  return null;
};

export const addNewPatient = async (id, name) => {
  return {
    id,
    name,
  };
};

export const addDescription = async (description) => {
  return {
    description,
    hospital: "Jeeda Hospital",
    doctor: "Abdelrhman Saied",
  };
};

export const savePatient = () => {};
