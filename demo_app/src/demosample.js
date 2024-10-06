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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Home() {

  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);

  
  
  const gotocart = () => () => {
    console.log("clicked cart");
    window.location.href = "/cart"
    
  };


  useEffect(() => {
    getProduct()
}, []);

const getProduct = async () => {
  const response = await fetch
        (`http://localhost:5000/getproducts`);
  const responsedata = await response.json();
  console.log(responsedata);
  setData(responsedata)
};

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


  return (
    <>
  
  <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
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
        <br></br>
      <Button variant="contained" onClick={handleClickOpen}>Add Product</Button>
      {/* <Row style={{marginTop:"2%"}}>
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
                <Button size="small" variant="contained" style={{width:"100%"}} >Add to cart</Button>
              </CardActions>
            </Card> 
        </Col>
      ))}
      </Row> */}

<TableContainer component={Paper} style={{marginTop:"2%"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ProductId</TableCell>
            <TableCell  >ProductName</TableCell>
            <TableCell  >ProductDescription</TableCell>
            <TableCell  >ProductPrice</TableCell>
            <TableCell  >ProductImage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product_id}
              </TableCell>
              <TableCell >{row.product_name}</TableCell>
              <TableCell  >{row.product_description}</TableCell>
              <TableCell  >{row.product_price}</TableCell>
              <TableCell  ><img style={{width:"100px",height:"100px"}} src={row.product_image}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </div>
  

    </>
  );
}

export default Home;
