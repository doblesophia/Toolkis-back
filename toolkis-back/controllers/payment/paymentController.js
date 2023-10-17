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
      to: payer.email,
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
      notification_url: 'https://00fc-168-197-200-34.ngrok-free.app/payment/webhook',
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

    // No envíes el correo electrónico aquí
    res.json(result.body);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};

export const receiveWebhook = async (req, res) => {
  try {
    // Realiza la verificación y procesamiento de la notificación de compra aquí
    const payment = req.body;
    console.log("Webhook recibido:", payment);

    if (payment.action === 'payment.created') {
      // Si el pago se ha creado, entonces puedes enviar el correo electrónico
      await sendEmailToCustomer(payment.payer);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};
