import axios from "axios";
import { QueryClient } from "react-query";

export const API_URL = "https://fakestoreapi.com/";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const { data } = await axios.get(`${API_URL}${queryKey[0]}`);
        return data;
      },
      refetchOnWindowFocus: false,
    },
  },
});
