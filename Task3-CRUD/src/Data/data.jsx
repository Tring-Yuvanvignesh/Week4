// export let data = [
//   ];


const loadData = () => {
  const storedData = localStorage.getItem("appData");
  return storedData ? JSON.parse(storedData) : [];
};

export let data = loadData();

const saveData = () => {
  localStorage.setItem("appData", JSON.stringify(data));
};
  
  export const addData = (newEntry) => {
    data.push(newEntry);
    saveData();
  };
  
  export const updateData = (index, updatedEntry) => {
    data[index] = updatedEntry;
    saveData();
  };
  
  export const deleteData = (index) => {
    data.splice(index, 1);
    saveData();
  };
  