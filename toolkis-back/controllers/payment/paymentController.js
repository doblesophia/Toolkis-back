import mercadopago from "mercadopago"



export const createOrder = async (req, res) => {
    mercadopago.configure({
        access_token: "TEST-49302068954519-101418-57c79085800490a3734710c93a6f669b-1489548840",
    })
    try {
      const { products } = req.body;

      const items = products.map((product) => ({
          title: product.title,
          description: product.description,
          currency_id: product.currency_id,
          unit_price: product.unit_price,
          quantity: product.quantity,
      }));

      const preference = {
          items,
          back_urls: {
              success: 'http://localhost:5173/post-payment',
          },
          notification_url: 'https://00fc-168-197-200-34.ngrok-free.app/webhook',
      };

      const result = await mercadopago.preferences.create(preference);

      res.json(result.body);
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Something goes wrong' });
  }
};


export const receiveWebhook = async (req, res) => {
    const payment = req.query;
    
    try {
      
      if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment["data.id"]);
      
      }
  
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
