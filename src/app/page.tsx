import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import "./ImageGrid.css";
export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box className="gallery">
        <Box className="gallery_items gallery_items-1">
          <Image
            width={"500"}
            height={"500"}
            src="/images/party1.png"
            alt="product images"
            className="gallery_img"
          />
        </Box>
        <Box className="gallery_items gallery_items-2">
          <Image
            width={"500"}
            height={"500"}
            src="/images/carrom.png"
            alt="product images"
            className="gallery_img"
          />
        </Box>
        <Box className="gallery_items gallery_items-3">
          <Image
            width={"500"}
            height={"500"}
            src="/images/santa.png"
            alt="product images"
            className="gallery_img"
          />
        </Box>
        <Box className="gallery_items gallery_items-4">
          <Image
            width={"500"}
            height={"500"}
            src="/images/party2.png"
            alt="product images"
            className="gallery_img"
          />
        </Box>
        <Box className="gallery_items gallery_items-5">
          <Image
            width={"500"}
            height={"500"}
            src="/images/cricket.png"
            alt="product images"
            className="gallery_img"
          />
        </Box>
        <Box className="gallery_items gallery_items-6">
          <Image
            width={"500"}
            height={"500"}
            src="/images/garba.png"
            alt="product images"
            className="gallery_img"
          />
        </Box>
        <Box className="gallery_items gallery_items-7">
          <Image
            width={"500"}
            height={"500"}
            src="/images/diwali.png"
            alt="product images"
            className="gallery_img"
          />
        </Box>
        <Box className="gallery_items gallery_items-8">
          <Image
            width={"500"}
            height={"500"}
            src="/images/joiners.png"
            alt="product images"
            className="gallery_img"
          />
        </Box>
      </Box>
    </Container>
  );
}

// const styles = {
//   gallery:{
//     display: 'grid',
//     gridColumn:' full-start / full-end',
//     gridTemplateColumns:' repeat(10, 1fr)',
//     gridTemplateRows: 'repeat(9, 5vw)',
//     gap: '10px',
//   },
//   gallery_img:{
//     width: '100%',
//     height: '100%',
//     display: 'block',
//     objectFit: 'cover',
//     display: 'block',
//   },
//   gallery_items-1:{
//     gridRow:' 1 / span 4',
//     gridColumn: '1 / span 2',
//   },
//   gallery_items-2 :{
//     gridRow: '1 / span 3',
//     gridColumn: '3 / 5',
//   },
//   gallery_items-3 :{
//     gridRow: '1 / span 3',
//     gridColumn: '5 / 7',
//   },
//   gallery_items-4 :{
//     gridRow: '1 / span 5',
//     gridColumn: '7 / 11',
//   },

//   gallery_items-5 :{
//     gridRow: '5 / span 3',
//     gridColumn: '1 / 3',
//   },

//   gallery_items-6 :{
//     gridRow: '4 / 8',
//     gridColumn: '3 / 7',
//   },

//   gallery_items-7 :{
//     gridRow:' 6 / 8'
//     gridColumn: '7 / 9',
//   },

//   gallery_items-8 :{
//     gridRow: '6 / 8',
//     gridColumn: '9 / -1',
//   }
// }
