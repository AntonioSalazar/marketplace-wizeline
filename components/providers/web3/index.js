import { createContext, useContext, useEffect, useMemo, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

const Web3Context = createContext(null);

const Web3Provider = ({children}) => {
    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
        contract: null,
        isLoading: true
    })

    useEffect(() => {
        const loadProvider = async () => {
            const provider = await detectEthereumProvider()
            if (provider) {
                const web3 = new Web3(provider)
                setWeb3Api({
                    provider,
                    web3,
                    contract: null,
                    isLoading: false
                })
            } else {
                setWeb3Api(api => ({...api, isLoading: false}))
                console.error('You will need to install metamask if you want to use this application')
            }
        }

        loadProvider()
    }, [])

    const _web3Api = useMemo(() => {
        return {
            ...web3Api,
            connect: web3Api.provider 
            ? async () => {
                try {
                    await web3Api.provider.request({method: "eth_requestAccounts"})
                } catch (error) {
                    console.error(error, 'Cannot retrieve accounts')
                    location.reload()
                }
            }
            : () => console.log('Cannot connect to Metamask, check if the user is logged in')
        }
    }, [web3Api])

    return (
        <Web3Context.Provider
            value={{_web3Api}}
        >
            {children}
        </Web3Context.Provider>
    )
}

export const useWeb3 = () => {
    return useContext(Web3Context);
}

export default Web3Provider;