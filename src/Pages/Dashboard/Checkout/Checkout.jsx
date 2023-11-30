import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import useCarts from './../../../Hook/useCarts';
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const Checkout = () => {
  const [cart, ,refetch] = useCarts();
  const [loading, setLoading] = useState(false);
  const [pdfData, setPdfData] = useState(null);
  const [showPDF, setShowPDF] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleDelete = () => {
    setLoading(true);
    axiosSecure
      .patch(`/carts/${user?.email}`)
      .then(() => {
        setLoading(false);
        refetch(); 
        generatePDF(); 
      })
      .catch(err => {
        setLoading(false);
        console.error("Checkout failed:", err); // Handle error state
      });
  };

  const generatePDF = () => {
    const data = (
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text>Checkout Information:</Text>
            {cart &&
              cart.map(product => (
                <View key={product._id}>
                  <Image  src={product.image} style={{ width:100, height: 100 }} />
                  <Text>Product Name: {product.name}</Text>
                  <Text>Product Discount: {product.discount}</Text>
                  <Text>Product sellingPrice: {parseFloat(product.sellingPrice).toFixed(2)}</Text>
                  <Text>Product CurrentAddDate: {product.currentAddDate}</Text>
                </View>
              ))}
          </View>
        </Page>
      </Document>
    );

    setPdfData(data);
    setShowPDF(true);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <div >
      <Helmet>
        <title>V Inventory | Check Out</title>
      </Helmet>
      <SectionTitle
        heading={"Check Out"}
        subHeading={"Sell The Products"}
      ></SectionTitle>
      <div className="grid justify-center">
        <button onClick={handleDelete} className="bg-blue-300 rounded-md p-4 text-xl font-bold btn-primary">Get Paid</button>
      </div>
      <div>{loading ? <p className="text-red-500">Loading</p> : ''}</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 mt-10">
        {cart &&
          cart.map(product => (
            <div key={product._id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={product.image}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Id : {product._id}</h2>
                <p>Product Name : {product.name}</p>
                <p>Product Quantity : {product.quantity}</p>
                <p>Product Discount : {product.discount}</p>
                <p>Product Selling Price : {product.sellingPrice}</p>
                <p>Product Date : {product.currentAddDate}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Conditionally render PDF */}
      {showPDF && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
          <PDFViewer style={{ width: '100%', height: '100%' }}>
            {pdfData}
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default Checkout;
