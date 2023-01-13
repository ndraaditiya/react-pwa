import { useState } from 'react'
import { Container, Box, Tab, Typography, Tabs, Grid, Stack, Tooltip } from '@mui/material'
import CardContainer from '../../components/card/CardContainer'
import Motion from '../../components/motion/Motion'
import { TabPanel, labelProps } from '../../components/tabPanel/TabPanel'
import { data } from '../../data'


const Content = () => {
  const height = window.innerHeight
  const styleGridCard = { flexWrap: 'wrap', display: 'flex', paddingBottom: 3, paddingRight: 2.5 }
  const styleBoxCard = { height: height - 255, width: '100%', overflow: 'auto' }
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
              indicatorColor='secondary'
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label="Home" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...labelProps(0)} />
              <Tab label="About" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...labelProps(1)} />
              <Tab label="Projects" sx={{ textTransform: 'none', fontWeight: 'bold' }}  {...labelProps(2)} />
              <Tab label="Books" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...labelProps(3)} />
              <Tab label="YouTube" sx={{ textTransform: 'none', fontWeight: 'bold' }} {...labelProps(4)} />
            </Tabs>
          </Container>
          <TabPanel value={value} index={0}>
            <Box mt={1}>
              <div className='glass-card'>
                <Motion>
                  <p style={{ fontSize: 16.5 }}>
                    Hi, I am a Software Developer with more than 3 years experience.
                  </p>
                  <p style={{ fontSize: 14 }}>
                    I Have strong knowledge about React Js, React Hooks, Axios, Material-UI, Sequelize, SQL Server and MySQL.
                    Also have good knowledge about Typescript, Express Js, React-Redux, Recoil, JSON
                    Web Token (JWT), Progressive Web App (PWA), RESTful API, MongoDB, Framer Motion and Git/GitHub.
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
                    In 2022, I've graduated as Bachelor's of Informatics Engineering from Universitas Sangga Buana YPKP Bandung.
                  </p>
                  <p>
                    In type of person, I'm a honest and humorous person, good problem solver and have good time management.<br />
                    In hobbies, i like to read a book, write a poetry or rhymes or even a novel, and also like listening to podcasts.
                    I also like excersing, such as running, cycling, swimming, badminton, and many more.
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
