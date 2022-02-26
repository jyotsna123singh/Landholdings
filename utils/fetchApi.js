import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'c75af58741msh7862cdb2e667832p172a57jsn80cd4837c714' ,
    },
  });
    
  return data;
}

/*  */