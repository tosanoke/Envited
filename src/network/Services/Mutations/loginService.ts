import { RequestResponse } from "./../../../types/index";
import { LOGIN } from "../../apiEndpoints";
import axios from "axios";
import { ILogin } from "../../../interfaces/loginInterface";

const loginService = async (payload: ILogin) => {
  let endpoint = `${process.env.REACT_APP_BASE_URL + LOGIN}`;
  const response: RequestResponse = await axios.post(endpoint, payload);
  return response;
};

export default loginService;
