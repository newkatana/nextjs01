import Link from 'next/link'
import { useEffect, useState } from 'react'
import { InferGetServerSidePropsType } from 'next'
import {
  Container, Grid, Card, CardActions, CardMedia, CardContent, Typography,Button,Skeleton
} from '@mui/material';
import configData from "../components/config.json";

type Data = { 
    id: string,
    name: string,
    coverimage: string,
    detail: string
 }

 const Page = () => {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(configData.SERVER_URL+'/api/attractions')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return (
  <>
  <Container maxWidth="lg">
    <Skeleton variant="rectangular" width={210} height={118} />
    <Skeleton />
    <Skeleton width="60%" />
  </Container>
  </>
  )
  if (!data) return <p>No data</p>

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
                  <Link href={"attractions/"+ attraction.id}>
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
