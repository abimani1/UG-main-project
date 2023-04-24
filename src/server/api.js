import axios from "axios";

const URL = "http://localhost:4000/api/user";

export const vendorSignup=async(user)=>{
  try{
    return await axios.post(`${URL}/vendor/signup`,user);
  }catch(error){
    console.log("Error while Sigin",error);
  }
}

export const vendorSignin=async(user)=>{
  try{
    return await axios.post(`${URL}/vendor/signin`,user);
  }catch(error){
    console.log("Error while Sigin",error);
  }
}

export const signin = async (user) => {
  try {
    return await axios.post(`${URL}/signin`, user);
  } catch (error) {
    console.log("Error while login", error);
    alert("email or password is'nt exit");
  }
};

export const clientData = async (email) => {
  try {
    return await axios.post(`${URL}/userData`, email);
  } catch (error) {
    console.log("Error while lget client Data", error);
    alert("email id is not get");
  }
};


export const addRfq = async (user) => {
  return await axios.post(`${URL}/postRfq`, user);
};

export const getRfq = async (email) => {
  try {
    return await axios.post(`${URL}/viewRfq`, email);
    // console.log(email);
  } catch (error) {
    console.log("Error while calling  api", error);
  }
};

export const getOneRfq = async (id) => {
  id = id || "";
  return await axios.get(`${URL}/viewRfq/${id}`);
};

export const updateRfq = async (id, user) => {
  try {
    return await axios.post(`${URL}/rfq/update/${id}`, user);
  } catch (error) {
    console.log("Error while calling update api", error);
  }
};

export const postQuot = async (user, item) => {
  try {
    return await axios.post(`${URL}/vendor/Quotion`, {user, item});
  } catch (error) {
    console.log("Error while calling update api", error);
  }
};

export const viewVendorRfq = async (service) => {
  try {
    return await axios.post(`${URL}/vendor/viewRfq`,service);
  } catch (error) {
    console.log("Error while calling update api", error);
  }
};

export const getQuot = async (email) => {
  try {
    return await axios.post(`${URL}/viewQuot`, email);
    // console.log(email);
  } catch (error) {
    console.log("Error while calling  api", error);
  }
};

export const getVendorQuot = async (email) => {
  try {
    return await axios.post(`${URL}/client/viewQuot`,email);
    // console.log(email);
  } catch (error) {
    console.log("Error while calling  api", error);
  }
};

export const VendorQuot = async (data) => {
  try {
    return await axios.post(`${URL}/vendor/viewQuot`,data);
    // console.log(email);
  } catch (error) {
    console.log("Error while calling  api", error);
  }
};

export const VendorQuotEdit = async (id) => {
    
    try{
      return await axios.get(`${URL}/vendor/viewquot/${id}`);
    }catch(error){
      console.log("Error while calling  api", error);
    }
    //   try {
//     let id = idvalue;

//     console.log(id);
//     if (id.length > 0) {
//       const respone = await axios.get(
//         "http://localhost:4000/api/user/vendor/quot/viewById/" + `${id}`
//       );
//       return respone;
//     }
//     return "id is required";
//     // console.log(email);
//   } catch (error) {
//     console.log("Error while calling  api", error);
//   }
};

//quote Accpcet

export const quoteAccpcet=async(data)=>{
  try{
    return await axios.post(`${URL}/accpte/quot/vendor`,data);
  }catch(error){
    console.log("Error while calling  api", error);
  }
}

//get accpet client data

export const getAccpcetQuot=async()=>{
  try{
    return await axios.post(`${URL}/vendor/wnp/client/rfq`);
  }catch(error){
    console.log("Error while calling  api", error);
  }
}