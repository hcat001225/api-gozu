const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());
// Configuración de transporte de correo


enviarEmail=async (email)=>{

  const config = {
    host : 'smtp.gmail.com',
    port: 587,
    auth: {
      user:'albertlive.15@gmail.com',
      pass:'hpcevvhglnzlpmij'
    }
  }
  
  const mensaje = {
    from:'albertlive.15@gmail.com',
    to:email,
    subject:'PROMOCION TIENDA GOZU',
    text:'En su siguiente conmpra tendra un descuento del 15 %'
  }

  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail(mensaje);

  console.log(info)
}

app.get('/',(req,res)=>{
  enviarEmail("albertlive.15@gmail.com");
  res.status(200).send('Okey');
})


app.post('/sendemail',async (req,res)=>{
  try{
    const {email} = req.body;
    const config = {
      host : 'smtp.gmail.com',
      port: 587,
      auth: {
        user:'albertlive.15@gmail.com',
        pass:'hpcevvhglnzlpmij'
      }
    }
    const mensaje = {
      from:'albertlive.15@gmail.com',
      to:email,
      subject:'PROMOCION TIENDA GOZU',
      text:'En su siguiente conmpra tendra un descuento del 15 %'
    }
  
    const transport = nodemailer.createTransport(config);
  
    const info = await transport.sendMail(mensaje);
  
    res.status(200).send('Okey');
  }catch(err){
    res.status(400).send(err);
  }
})
// Ruta POST para enviar un mensaje de correo
app.post('/enviar', async(req, res) => {
  const { destinatario, asunto, contenido } = req.body;

  // Configuración del mensaje de correo
  const mailOptions = {
    from: 'albertlive.15@gmail.com',
    to: destinatario,
    subject: asunto,
    text: contenido
  };

  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail(mailOptions);

  console.log(info)

  res.status(200).send('Okey');
});


// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});


