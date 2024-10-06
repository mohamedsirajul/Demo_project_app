import logo from './logo.svg';
import React, { useEffect ,useState} from 'react'
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
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

function Home() {

  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState("");
  const [productindex, setProductindex] = React.useState("");
  const [addedData, setAddeddata] = React.useState([{}]);
  console.log(addedData);
  
  // const [selectedValue, setSelectedValue] = React.useState();
  console.log(data);
  
  const gotocart = () => () => {
    console.log("clicked cart");
    window.location.href = "/cart"
    
  };

  const addtocart = (clickedindex) => () => {
    // console.log("clicked index:",clickedindex);
    setQuantity("")
    handleClickOpen(clickedindex)
  }; 

  useEffect(() => {
    getProduct()
}, []);
const handleClickOpen = (clickedproductindex) => {
  setOpen(true);
  setProductindex(clickedproductindex)
};

const handleClose = (value) => {
  setOpen(false);
  let selectedData = [{
    ProductId : data[productindex].product_id,
    ProductName :  data[productindex].product_name ,
    ProductPrice :  data[productindex].product_price ,
    ProductQuantity : quantity
  }]
  console.log(selectedData);
  
  // setSelectedValue(value);
};

const getProduct = async () => {
  const response = await fetch
        (`http://localhost:5000/getproducts`);
  const responsedata = await response.json();
  console.log(responsedata);
  setData(responsedata)
};



  return (
    <>
     <Dialog maxWidth={"sm"} onClose={handleClose} open={open}>
      <DialogTitle>Quantity</DialogTitle>
      <TextField id="outlined-basic" variant="outlined"  value={quantity} onChange={(event) => {
          setQuantity(event.target.value);
        }}/>
      <br></br>
      <Button size="small" variant="contained" style={{width:"30%"}} onClick={handleClose}>Enter</Button>
    </Dialog>
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
        {data.map((products,index) => (
        <Col key={index} xs={12} md={4} lg={4} style={{ marginBottom: '20px' }}>
          <Card style={{width:"100%"}}>
          <CardMedia 
            sx={{ height: 200 }}
            image= {products.product_image}
          />
          <CardContent>
            <Row>
              <Col  xs={12} md={8} style={{padding:"5%"}}>
                {products.product_name}
              </Col>
              <Col xs={6} md={4}>
            </Col>
            </Row>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {products.product_description}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Price : {products.product_price}
            </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" style={{width:"100%"}} onClick={addtocart(index)}>Add to cart</Button>
              </CardActions>
            </Card> 
            </Col>
      ))}
      </Row>
      </div>
  

    </>
  );
}

export default Home;
