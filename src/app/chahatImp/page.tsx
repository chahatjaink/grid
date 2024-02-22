"use client";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const images = [
  { file: "party1", size: { width: 342, height: 420 } },
  { file: "carrom", size: { width: 277, height: 300 } },
  { file: "santa", size: { width: 285, height: 300 } },
  { file: "party2", size: { width: 464, height: 480 } },
  { file: "cricket", size: { width: 342, height: 300 } },
  { file: "garba", size: { width: 586, height: 420 } },
  { file: "diwali", size: { width: 220, height: 240 } },
  { file: "joiners", size: { width: 220, height: 240 } },
];

const responsiveImages = [
  { file: "party1", size: { width: 168, height: 220 } },
  { file: "carrom", size: { width: 167, height: 106 } },
  { file: "santa", size: { width: 167, height: 106 } },
  { file: "party2", size: { width: 343, height: 220 } },
  { file: "cricket", size: { width: 168, height: 106 } },
  { file: "garba", size: { width: 343, height: 220 } },
  { file: "diwali", size: { width: 168, height: 106 } },
  { file: "joiners", size: { width: 167, height: 220 } },
];

export default function LifeSection() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));
  const gridPositions = [
    { row: "1 / span 2", col: "1 / span 1" },
    { row: "1 / span 1", col: "2 / span 1" },
    {
      row: isWideScreen ? "1 / span 1" : "2 / span 1",
      col: isWideScreen ? "4 / span 1" : "2 / span 1",
    },
    {
      row: isWideScreen ? "1 / span 2" : "3 / span 2",
      col: isWideScreen ? "6 / span 2" : "1 / span 2",
    },
    {
      row: isWideScreen ? "3 / span 1" : "5 / span 1",
      col: isWideScreen ? "1 / span 2" : "1 / span 1",
    },
    {
      row: isWideScreen ? "2 / span 1" : "7 / span 2",
      col: isWideScreen ? "2 / span 3" : "1 / span 2",
    },
    {
      row: isWideScreen ? "4 / span 1" : "6 / span 1",
      col: isWideScreen ? "6 / span 1" : "1 / span 1",
    },
    {
      row: isWideScreen ? "4 / span 1" : "5 / span 2",
      col: isWideScreen ? "7 / span 1" : "2 / span 1",
    },
  ];

  return (
    <Stack
      sx={{
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        padding: { xl: "0 4rem" },
      }}
      gap={3}
      direction="column"
    >
      <Typography
        sx={{
          fontSize: isWideScreen ? "4rem" : "2.3rem",
          fontFamily: "inherit",
          lineHeight: "73.6px",
          color: "#0D0C0C",
        }}
      >
        Life at Deqode
      </Typography>
      <Box
        sx={{
          margin: isWideScreen ? "auto" : "0",
          maxHeight: isWideScreen ? "744px" : "unset",
          display: "grid",
          gridTemplateRows: isWideScreen ? "42% 16% 6%" : "repeat(8, 12.5%)",
          gridTemplateColumns: isWideScreen
            ? "25% 9.8% 10% 11% 10% 15.4%"
            : "50% 50%",
          gap: 2,
        }}
      >
        {gridPositions.map((position, index) => (
          <Box
            key={index}
            sx={{
              gridRow: position.row,
              gridColumn: position.col,
            }}
          >
            <Image
              src={`/images/${images[index].file}.png`}
              alt={"life"}
              width={isWideScreen ? images[index].size.width : 168}
              height={isWideScreen ? images[index].size.height : 106}
              style={{
                objectFit: isWideScreen ? "contain" : "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
