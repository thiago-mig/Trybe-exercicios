const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

//Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá Sra ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, ${order.address.apartment}`);
}

//Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const cliente = order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  const total = order.payment.total = 50;
  console.log(`Olá ${cliente}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${bebida} é R$ ${total},00.`);
}

orderModifier(order);