import * as React from "react";
import Link from "@mui/material/Link";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";

interface IPCard {
  background: string;
  image: string;
  title?: string;
  description?: string;
  link?: string;
}

export default function PCard({
  background,
  image,
  title,
  description,
  link
}: IPCard) {
  return (
    <Card
      elevation={0}
      sx={{ maxWidth: 400, background, borderRadius: "1.66rem" }}
    >
      <Link underline="none" color="inherit" href={link}>
      <CardActionArea >
        <CardMedia sx={{ height: 300 }} image={image} title="plc" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    // <Box height={"40vh"} sx={{background: "#F5CE9B", borderRadius: "1.2rem", padding:".5rem"}}>

    // </Box>
  );
}
