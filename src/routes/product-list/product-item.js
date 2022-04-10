import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Rating } from "components";

export function ProductItem({ id, title, price, image, category, rating }) {
  const { t } = useTranslation();

  return (
    <CardActionArea LinkComponent={Link} to={`product/${id}`}>
      <Card sx={{ maxWidth: 345 }} onClick={() => null}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" noWrap>
            {title}
          </Typography>
          <Chip label={category} size="small" />
          <Rating rate={rating?.rate} count={rating?.count} />
        </CardContent>
        <CardActions>
          <Typography ml={1} variant="subtitle2" color="text.secondary">
            {t("product_card.price").toUpperCase()}: ${price}
          </Typography>
        </CardActions>
      </Card>
    </CardActionArea>
  );
}
