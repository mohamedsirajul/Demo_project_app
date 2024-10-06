import logo from './logo.svg';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import food from '../public/assets/food.jpeg';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { click } from '@testing-library/user-event/dist/click';
function Home() {
  const gotocart = () => () => {
    console.log("clicked cart");
    window.location.href = "/cart"
    
  };
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zomato
          </Typography>
          {/* <ShoppingCart style={{fontSize:"30px"}}/> */}
          <Button onClick={gotocart()}>
            <Badge badgeContent={3} style={{fontSize:"35  px"}} color="secondary">
              <ShoppingCart color="action" />
            </Badge>
          </Button>

        </Toolbar>
      </AppBar>
    </Box>



      <div style={{marginLeft:"5%",marginRight:"5%"}}>
   
      <Row style={{marginTop:"2%"}}>
        <Col >   
        <Card style={{width:"100%"}}>
      <CardMedia
        sx={{ height: 200 }}
        image= "http://localhost:3001/assets/food.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Upma
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" style={{width:"100%"}}>Add to cart</Button>
          </CardActions>
        </Card>
        </Col>
        <Col >   
        <Card style={{width:"100%"}}>
      <CardMedia
        sx={{ height: 200 }}
        image= "http://localhost:3001/assets/food.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Naan
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" style={{width:"100%"}}>Add to cart</Button>
          </CardActions>
        </Card>
        </Col>
        <Col >   
        <Card style={{width:"100%"}}>
      <CardMedia
        sx={{ height: 200 }}
        image= "http://localhost:3001/assets/food.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Grill Chicken
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" style={{width:"100%"}}>Add to cart</Button>
          </CardActions>
        </Card>
        </Col>
      </Row>
      </div>
  

    </>
  );
}

export default Home;
