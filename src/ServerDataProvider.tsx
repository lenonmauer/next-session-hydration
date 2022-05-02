import { createContext, useContext, ReactNode, useRef } from 'react'

type ServerData = {
  user: {
    id: number
    name: string
  }
}

type ServerDataProviderProps = {
  children: ReactNode
  serverProps: ServerData
}

const ServerDataContext = createContext<ServerData>(null! as ServerData)

export function ServerDataProvider({
  children,
  serverProps,
}: ServerDataProviderProps) {
  // Necessário salvar em um ref para não perder o state durante a troca de rota
  const serverState = useRef(serverProps)

  return (
    <ServerDataContext.Provider value={serverState.current}>
      {children}
    </ServerDataContext.Provider>
  )
}

export function useServerData() {
  return useContext(ServerDataContext)
}
