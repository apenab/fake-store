import axios from "axios";
import { QueryClient } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

export const API_URL = "https://fakestoreapi.com/";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const { data } = await axios.get(`${API_URL}${queryKey[0]}`);
        return data;
      },
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: false,
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
});

// persistQueryClient is a utility for persisting the state of the queryClient and its caches for later use
// https://react-query.tanstack.com/plugins/persistQueryClient
persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});
