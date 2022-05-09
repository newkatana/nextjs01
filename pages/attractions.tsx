let baseUrl = process.env.Vercel_URL

import Link from 'next/link'
import { InferGetServerSidePropsType } from 'next'

import {
  Container, Grid, Card, CardActions, CardMedia, CardContent, Typography,Button
} from '@mui/material';

type Data = { 
    id: string,
    name: string,
    coverimage: string,
    detail: string
 }

export const getServerSideProps = async () => {
  const res = await fetch(baseUrl +'/api/attractions')
  const data: Data[] = await res.json()

  return {
    props: {
      data,
    },
  }
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
      <div>
        <Container maxWidth="lg">
        <Grid container spacing={2}>
          {data.map(attraction => (
            <Grid item xs={12} md={4} key={attraction.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={attraction.coverimage}
                  alt={attraction.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {attraction.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap={true}>
                    {attraction.detail}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={"/attractions/"+ attraction.id}>
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      </div>
  )
}

export default Page