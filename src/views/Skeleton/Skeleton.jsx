import React, {  useEffect, useState } from 'react'

import { Skeleton, Stack, Typography, Grid, Card, Avatar } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function SkeletonTest() {

    const [loading, setLoading] = useState(true);
    const [data, setdata] = useState({
        name: "Phinahas Philip",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
         make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.`
    })

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 1500);
      
    }, [])
    

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>

                <Typography children='SKELETON' variant='h4' />

            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5.5} mt={5} bgcolor={'white'} p={2}>

                {loading ? <Skeleton variant='circular' width={45} height={45} animation={'wave'} /> :
                    <Avatar sx={{ marginTop: '10px', bgcolor: 'blue', color: 'white' }}>P</Avatar>
                }

                {
                    loading ? <Skeleton variant='text' width={165} height={45} animation={'wave'} /> :
                        <Typography children='Phinahas Philip' variant='h4' mt={1} />
                }

                {
                    loading ? <Skeleton variant='text' height={55} width={'95%'} animation={'wave'} /> :
                        <Typography
                            children={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
         make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.`} variant='caption' mt={1} />
                }



                <Stack width={'100%'} bgcolor={''} mt={3} flexDirection={'row'} justifyContent={'flex-end'} >

                    <Grid item sm={2} md={2} lg={1.8} bgcolor={''}  >

                        <EditIcon sx={{ margin: '3px', color: 'darkblue' }} />
                        <DeleteIcon sx={{ margin: '3px', color: 'red' }} />
                    </Grid>



                </Stack>

            </Grid>

        </Grid>
    )
}

export default SkeletonTest