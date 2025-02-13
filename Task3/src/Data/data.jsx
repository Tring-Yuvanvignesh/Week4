export let data = [
  ];
  
  export const addData = (newEntry) => {
    data.push(newEntry);
  };
  
  export const updateData = (index, updatedEntry) => {
    data[index] = updatedEntry;
  };
  
  export const deleteData = (index) => {
    data.splice(index, 1);
  };
  