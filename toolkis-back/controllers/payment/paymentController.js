import nodemailer from 'nodemailer';
import mercadopago from 'mercadopago';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'manuelpebay@gmail.com',
    pass: 'jetn qnnq uruz hila',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmailToCustomer = (payer) => {
  console.log(payer, "informacion payer")
  if (payer) {

    const mailOptions = {
      from: 'manuelpebay@gmail.com',
      to: "manupebay@hotmail.com",
      subject: 'Comprobante de compra',
      text: 'Contenido del correo electrónico',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo electrónico:', error);
      } else {
        console.log('Correo electrónico enviado:', info.response);
      }
    });
  } else {
    console.error('La información del pagador es insuficiente o indefinida.');
  }
};

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: 'TEST-49302068954519-101418-57c79085800490a3734710c93a6f669b-1489548840',
  });
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
      notification_url: 'https://2a0d-2803-c180-2002-63e3-79a0-6519-7a5c-136b.ngrok.io/payment/webhook',
      payer: {
        phone: { area_code: '123', number: 4567890 },
        address: { street_name: 'Calle Ejemplo', street_number: 123 },
        email: 'manupebay@hotmail.com',
        identification: { type: 'DNI', number: '12345678' },
        name: 'Manuel',
        surname: 'Pebay',
        date_created: null,
        last_purchase: null,
      },
    };

    const result = await mercadopago.preferences.create(preference);

    console.log(result);
    res.json(result.body);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};

export const receiveWebhook = async (req, res) => {
  console.log(req.query);
  try {
    //   // Realiza la verificación y procesamiento de la notificación de compra aquí
    const payment = req.query;
    //   console.log("Webhook recibido:", payment);

    if (payment.type === 'payment') {
      console.log(payment["data.id"], "será este el error?");
      const data = await mercadopago.payment.findById(payment["data.id"])
      console.log(data)

      //     // Si el pago se ha creado, entonces puedes enviar el correo electrónico
    await sendEmailToCustomer(data.body.payer);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
