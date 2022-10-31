import { Box, Container, Grid, } from "@mui/material"
import Typed from 'react-typed'
import { motion } from "framer-motion"
import { useState } from "react"

const Header = () => {
  const [move, setMove] = useState(false)

  return (
    <>
      <Box mt={2}>
        <Grid container spacing={2} justifyItems="center" alignItems="center">
          <Grid item xs={12} align="center">
            <Container maxWidth="sm">
              <motion.img
                src="./images/picture.jpg"
                className="avatar"
                initial={{ x: 0 }}
                animate={{ x: move ? 100 : 0 }}
                onClick={() => setMove(!move)}
              />
              <p className="title-ndr">Andra Aditiya</p>
              <Typed
                loop
                typeSpeed={80}
                className="caption-ndr"
                strings={
                  ['just like to write, either code programming or rhymes']
                }
              />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Header;