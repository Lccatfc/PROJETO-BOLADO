import { Box, Card, CardContent, CardHeader, Typography, TextField, Button} from "@mui/material";
import { useState } from "react";

const Contato = () => {
  const [Email, setEmail] = useState('')
  const [Nome, setNome] = useState('')
  const [Idade, setIdade] = useState('')

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangeNome = (event) => {
    setNome(event.target.value);
  }

  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  }

  const Enviar = () => {
    console.log('Esses são os dados enviados', Email, Nome, Idade)
  }


  return (
    <>
      <Box>
        <Card>
          <CardHeader title="Contatos" subheader="Lista de contatos" />
          <CardContent>
            <Box sx={{m:3}}>
              <TextField id="standard-basic" label="Email" variant="standard" onChange={onChangeEmail}/>
            </Box>
            <Box sx={{m:3}}>
              <TextField id="standard-basic" label="Nome" variant="standard" onChange={onChangeNome}/>
            </Box>
            <Box sx={{m:3}}>
              <TextField id="standard-basic" label="Idade" variant="standard" onChange={onChangeIdade}/>
            </Box>

            <Button onClick={Enviar}>Enviar</Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Contato;
