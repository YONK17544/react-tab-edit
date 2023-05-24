import { Tab, Tabs } from "react-bootstrap";
import {useState,useEffect} from 'react'
import Cards from '../components/Cards'
import Users from '../components/Users';
import Posts from '../components/Posts';
import { getData } from "../services/axios.service";
import EditModal from "../components/EditModal";
import { upload } from "@testing-library/user-event/dist/upload";

function TabComp() {
    const [key, setKey] = useState('products');
    const [prod, setProd]=useState([])
    const [users, setUsers] = useState([]);
   const [posts, setPosts] = useState([]);
   const [show, setShow] = useState(false);
   const [editProduct, setEditProduct] = useState({});


   const handleShow = () => setShow(true);

   const handleClose = () => setShow(false);
   
  
   const handleDeleteProduct = (e,id) =>{
    e.preventDefault()
    const filteredProducts = prod.filter((p) =>{
      return p.id !== id;
    })
    setProd(filteredProducts);
   }
   

   const handleEditProduct = (e,product) =>{
    e.preventDefault();
    setEditProduct(product);
    console.log(product);
    setShow(true);
   }

   const handleChange = (e) =>{
      let updatedData = {
        ...editProduct,
        [e.target.name]: e.target.value,
      }
      setEditProduct(updatedData);
   }

   const handleEditChanges = (e) =>{
      const updatedProds = prod.map((item) =>{
         return item.id === editProduct.id ? editProduct : item;
      })
      setProd(updatedProds);
      setShow(false);
   };
   
   useEffect(()=>{
    getData(key).then((res)=>{
      if (key==='products'){
        setProd(res.data.products)
      }
        else if (key==='users') {
          setUsers(res.data.users)
        }
        else {
          setPosts(res.data.posts)
        }
    
       
      
//       setPosts(res.data.posts)
    })
   },[key])
  
    return (
      <> 
      {/* {JSON.stringify(editProduct)} */}
       <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="products" title="Product">
        <Cards prod={prod} 
        handleDeleteProduct={handleDeleteProduct}
        handleEditProduct = {handleEditProduct}/>
        </Tab>
        <Tab eventKey="users" title="Users">
          <Users users={users}/>
          
        </Tab>
        <Tab eventKey="posts" title="Posts" >
         <Posts posts={posts} />
        </Tab>
      </Tabs>

      <EditModal show = {show} handleClose ={handleClose} product = {editProduct} 
      handleChange = {handleChange} handleEditChanges={handleEditChanges}/>
      </>
     
    );
  }
  

export default TabComp;