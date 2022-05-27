//import model from "../../models/model";

const apiPort = "3001";
const apiURL = "http://localhost:" + apiPort + "/";

const fetchData = async (urlParam) => {
  const fullUrl = apiURL + "user" + "/" + urlParam;
  const getRequest = await fetch(fullUrl);
  // convert data to json format
  const jsonResponse = await getRequest.json();

  if (jsonResponse === "can not get user") {
    return false;
  }

  // Utilisation d'un objet key value pour remplacer le switch
  /* A key value object. */
  const route = {
    login: new loginModel(jsonResponse.data.email, jsonResponse.data.password),
    signup: new signupModel(
      jsonResponse.data.email,
      jsonResponse.data.password,
      jsonResponse.data.firstName,
      jsonResponse.data.lastName
    ),
    profile: new profileModel(
      jsonResponse.data.status,
      jsonResponse.data.message,
      jsonResponse.data.body
    ),
  };
  return route[urlParam];
};
export default fetchData;
