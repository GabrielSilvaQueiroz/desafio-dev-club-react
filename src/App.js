import React from 'react'
import { ContainerPrincipal, Image, H1, ContainerItens, Label, Input, Button, Requests, RequestsOrder, ClientName, ClientOrder, TotalDiv } from './style';

import Burguer from './assets/Burguer.png'
import Sacola from './assets/Sacola.png'
import Trash from './assets/Trash.svg'

function App() {
  const requests = [{ id: Math.random(), clientOrder: "1 X-Tudo, 1 Coca Cola", clientName: "Gabriel" }, { id: Math.random(), clientOrder: "1 X-Tudo, 1 Pepsi", clientName: "Yanna" }]
  return (
    <ContainerPrincipal>
      <Image alt="Combo de Hamburguer" src={Burguer} />
      <ContainerItens>

        <H1> Faça seu pedido! </H1>

        <Label> Pedido </Label>
        <Input placeholder='1 Coca-Cola, 1-X Tudo' />

        <Label> Nome do Cliente </Label>
        <Input placeholder='Gabriel Silva Queiroz' />

        <Button> Novo Pedido </Button>

        <ul>
          {requests.map(requests => (
            <li key={requests.id}>
              <div>
                <p> {requests.clientOrder} </p>
                <p> {requests.clientName} </p>
              </div>
              <button> <img src={Trash} alt="Lata-de-Lixo" /> </button>
            </li>
          ))}
        </ul>

      </ContainerItens>
    </ContainerPrincipal >
  );
}

export default App;