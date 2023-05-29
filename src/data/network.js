import fetcher from "./_fetcher"
import useSWR from 'swr'

export default function useNetwork () {
    const { data, error, isLoading } = useSWR(`api`, fetcher)
   
    return {
      network: data?.network,
      isLoading,
      isError: error
    }
  }