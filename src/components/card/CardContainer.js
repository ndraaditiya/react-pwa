import { useEffect } from 'react'
import { Card, CardMedia, CardContent, Tooltip } from '@mui/material'

const style = {
  color: '#ffffff',
  cursor: 'pointer',
  margin: 1,
  borderRadius: '15px',
  boxShadow: '10px 10px 20px #00000080',
  borderTop:  '1px solid rgba(255, 255, 255, 0.5)',
  borderLeft:  '1px solid rgba(255, 255, 255, 0.5)',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
}

const CardContainer = ({ 
  picture,
  width,
  height,
  link,
  title,
  children
}) => {

  useEffect(() => {
    // fetch('http://103.148.232.131:8585/asset-it/hardware/hw1')
    // fetch('https://sdm.mamobileapps.net/get-api')
    fetch('https://api.mamobileapps.net/public/foo')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Tooltip title={title ?? "Go to Website"} placement='top'>
        <Card sx={{ minWidth: width, maxWidth: width, ...style }}>
          <a href={link} target='_blank' rel="noreferrer">
            <CardMedia
              component="img"
              height={height}
              image={`/images/${picture}`}
            />
            <CardContent>
              {children}
            </CardContent>
          </a>
        </Card>
      </Tooltip>
    </>
  );
}

export default CardContainer;
