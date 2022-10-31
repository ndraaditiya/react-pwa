import { useState } from 'react'
import { Container, Box, Tab, Typography, Tabs, Grid, Stack, Tooltip } from '@mui/material'
import CardContainer from '../../components/card/CardContainer'
import Motion from '../../components/motion/Motion'
import { TabPanel, labelProps } from '../../components/tabPanel/TabPanel'
import { data } from '../../data'


const Content = () => {
  const height = window.innerHeight
  const styleGridCard = { flexWrap: 'wrap', display: 'flex', paddingBottom: 3, paddingRight: 2.5 }
  const styleBoxCard = { height: height-255, width: '100%', overflow: 'auto' }
  const styleFontSoftware = { fonWeight: 'bold', my: 1, color: '#ffffff' }
  const styleFontTitleProject = { fontWeight: 'bold', fontSize: 15, color: '#ffffff' }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ width: '100%' }}>
          <Container maxWidth="sm">
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='none'
              indicatorColor='primary'
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label="Home" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...labelProps(0)} />
              <Tab label="About" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...labelProps(1)} />
              <Tab label="Project" sx={{ textTransform: 'none', fontWeight: 'bold' }}  {...labelProps(2)} />
              <Tab label="Book" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...labelProps(3)} />
              <Tab label="YouTube" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...labelProps(4)} />
            </Tabs>
          </Container>
          <TabPanel value={value} index={0}>
            <Box mt={1}>
              <div className='glass-card'>
                <Motion>
                  <p style={{ fontSize: 16.5 }}>
                    Hi, I am a Full Stack JavaScript Developer. In development an app, I usually use React, 
                    React Native, NodeJs, Express, Sequelize and Material-UI.
                  </p>
                  <p style={{ fontSize: 14  }}>
                    From 2017 - Present, I work at PT. Medika Antapani as a software  developer,
                    a company who engaged in the health sector.
                  </p>
                  <p style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 5 }}>You can also see me on:</p>
                  <div className="contact">
                    {data[0]?.contactDetails && data[0]?.contactDetails.map((c) =>
                      <Stack direction="row" alignItems="center" key={c?.id}>
                        <a href={c?.url} target='_blank' rel="noreferrer">
                          {c?.icon}
                        </a>
                        <Tooltip title={c?.title} arrow placement="top">
                          <a href={c?.url} target='_blank' rel="noreferrer">
                            <span className="contact-details">{c?.caption}</span>
                          </a>
                        </Tooltip>
                      </Stack>
                    )}
                  </div>
                </Motion>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box mt={1}>
              <div className="glass-card">
                <Motion>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                    I live in Bandung, Indonesia. 
                  </Typography>
                  <p style={{ fontSize: 16 }}>
                    I am a Bachelor of Informatics Engineering.
                  </p>
                  <p>
                    In hobbies, i like to read a book, write a poetry or rhymes or even a novel.
                    I also like excersing, such as running, cycling, swimming and many more
                  </p>
                  <p>
                    I have a segment on my partner YouTube called sudutRenungan,
                    it's a rhyme musical video where i am being a writer and a voice over
                  </p>
                </Motion>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box mt={1} sx={{ ...styleBoxCard }}>
              <Motion>
                <Stack direction="row" justifyContent="center">
                  <Grid justifyContent="center" sx={{ ...styleGridCard }}>
                    {data[0]?.project && data[0]?.project.map((p) =>
                      <CardContainer
                        key={p?.id}
                        picture={p?.picture}
                        width={225}
                        height={120}
                        link={p?.url}
                      >
                        <Typography variant="body2" sx={{ mt: -1, color: '#ffffff' }}>
                          {p?.versi}
                        </Typography>
                        <Typography variant='caption' sx={{ ...styleFontSoftware }}>
                          {p?.software}
                        </Typography>
                        <Typography sx={{ ...styleFontTitleProject }}>
                          {p?.title}
                        </Typography>
                      </CardContainer>
                    )}
                  </Grid>
                </Stack>
              </Motion>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box mt={1} sx={{ ...styleBoxCard }}>
              <Motion>
                <Stack direction="row" justifyContent="center">
                  <Grid justifyContent="center" sx={{ ...styleGridCard }}>
                    {data[0]?.book && data[0]?.book.map((b) =>
                      <CardContainer
                        key={b?.id}
                        picture={b?.picture}
                        width={150}
                        height={170}
                        link={b?.url}
                      >
                        <Typography variant="body2" sx={{ mb: 1, color: '#ffffff' }}>
                          {b?.base}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                          {b?.title}
                        </Typography>
                      </CardContainer>
                    )}
                  </Grid>
                </Stack>
              </Motion>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Box mt={1} sx={{ ...styleBoxCard }}>
              <Motion>
                <Stack direction="row" justifyContent="center">
                  <Grid justifyContent="center" sx={{ ...styleGridCard }}>
                    {data[0]?.youtube && data[0]?.youtube.map((y) =>
                      <CardContainer
                        key={y?.id}
                        picture={y?.picture}
                        width={250}
                        height={120}
                        link={y?.url}
                        title={'Go to Channel'}
                      >
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                          {y?.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1, color: '#ffffff' }}>
                          {y?.caption}
                        </Typography>
                      </CardContainer>
                    )}
                  </Grid>
                </Stack>
              </Motion>
            </Box>
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}

export default Content;
