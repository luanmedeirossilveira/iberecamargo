import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Sidebar } from "../components";
import { drawerWidth } from "../constants/areas";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Box paddingLeft={drawerWidth / 7} paddingTop={4}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Seja Bem Vindo!
        </Typography>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box spacing={2} paddingTop={2}>
              <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                Conheça a fundação e seus projetos. Acesse o menu lateral para
                navegar entre suas áreas. Clique nos espaços abaixo para saber
                mais.
              </Typography>

              <a href="https://miro.com/app/board/uXjVPMwwV3g=/">
                {'>>'}
              </a>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/Gas-vxRNyuA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }} variant="elevation">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Clique abaixo para saber mais sobre a fundação
                </Typography>
                <Typography variant="h5" component="div">
                  Fundação Iberê Camargo
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  href="http://iberecamargo.org.br/"
                >
                  Saiba Mais
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }} variant="elevation">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Últimas notícias sobre a fundação
                </Typography>
                <Typography variant="h5" component="div">
                  GZH - Notícias
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  href="https://gauchazh.clicrbs.com.br/ultimas-noticias/tag/fundacao-ibere-camargo/"
                >
                  Saiba Mais
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }} variant="elevation">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Encontre uma rota para chegar até a fundação
                </Typography>
                <Typography variant="h5" component="div">
                  Google Maps
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  href="https://www.google.com/search?rlz=1C1GCEU_pt-BRBR1012BR1012&tbs=lf:1,lf_ui:1&tbm=lcl&sxsrf=ALiCzsYYU9SNmGDvc4URtPh60z8XqBnGKQ:1670240260837&q=ibere+camargo&rflfq=1&num=10&ved=2ahUKEwjN7L7rseL7AhW4pZUCHenpBQwQtgN6BAhoEAY#rlfi=hd:;si:9001424020488615597,l,Cg1pYmVyZSBjYW1hcmdvSNj2k_oBWhcQABABGAAYASINaWJlcmUgY2FtYXJnb5IBCmZvdW5kYXRpb26aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTXlka3BUU1RaM1JSQUKqATUQARoeEAEiGnCeDOjdn4UTq6hufbYWw56pjNDXJ992iZ9TKhEiDWliZXJlIGNhbWFyZ28oDA,y,0HS3RARrh9Q;mv:[[-29.664288199999998,-50.9997408],[-30.1013228,-53.978410999999994]]"
                >
                  Clique Aqui
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
