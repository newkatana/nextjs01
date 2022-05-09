import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    Container, Grid, Card, CardActions, CardMedia, CardContent, Typography,Button
  } from '@mui/material';

type Data = { 
    id: string,
    name: string,
    coverimage: string,
    detail: string,
    latitude: string,
    longtitude: string
 }

const Page = () => {
  const router = useRouter()
  const { id } = router.query

  const [data, setData] = useState<Data>({
      id:'', name:'', coverimage: '', detail: '', latitude:'', longtitude:''
  })
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if(id){
        setLoading(true)
    fetch('http://localhost:3000/api/attractions/'+id)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0])
        setLoading(false)
      })
    }
  }, [id])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} key={data.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="500"
                  image={data.coverimage}
                  alt={data.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap={false}>
                    {data.detail}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap={false}>
                    {data.latitude}, {data.longtitude}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default Page